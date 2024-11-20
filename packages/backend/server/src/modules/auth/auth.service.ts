import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { pick } from 'lodash-es';
import { PrismaService } from 'nestjs-prisma';

import { GithubOAuthProvider } from './oauth-providers/github';
import { AuthUrlOptions, OAuthProvider, OAuthUserInfo } from './oauth-providers/interface';

@Injectable()
export class AuthService {
  private oauthProviders = new Map<string, OAuthProvider>();

  constructor(
    private githubProvider: GithubOAuthProvider,
    private prisma: PrismaService
  ) {
    this.oauthProviders.set('github', githubProvider);
  }

  /**
   * 获取第三方授权URL模板
   * @param provider 提供者名称(如: 'github')
   * @param options 可选的授权参数
   * @returns 授权URL模板
   */
  getAuthorizationUrl(provider: string, options?: AuthUrlOptions): string {
    const oauthProvider = this.oauthProviders.get(provider);
    if (!oauthProvider) {
      throw new BadRequestException(`Unsupported OAuth provider: ${provider}`);
    }
    return oauthProvider.getAuthorizationUrl(options);
  }

  /**
   * 处理OAuth回调
   * @param provider 提供者名称
   * @param code 授权码
   * @returns 用户信息
   */
  async handleOAuthCallback(provider: string, code: string, options: AuthUrlOptions): Promise<OAuthUserInfo> {
    const oauthProvider = this.oauthProviders.get(provider);
    if (!oauthProvider) {
      throw new Error(`Unsupported OAuth provider: ${provider}`);
    }

    //第三方平台的用户信息
    const oauthUserInfo = await oauthProvider.getUserInfo(code, options);

    // 根据第三方平台的用户ID和提供商查找 users表中的用户
    let oauthAccount = await this.getOauthAccount(oauthUserInfo);

    if (!oauthAccount) {
      // 先创建用户 然后 创建oauthAccount 进行关联
      const userInfo = await this.createUser(oauthUserInfo);
      oauthAccount = await this.createOAuthAccount(oauthUserInfo, userInfo.id);
    }
    console.log('🚀 ~ AuthService ~ handleOAuthCallback ~ user:', oauthAccount);

    // TODO: 在这里处理用户信息
    // 1. 检查用户是否存在

    // 2. 如果不存在则创建新用户
    // 3. 更新用户的OAuth信息
    // 4. 生成JWT token

    return oauthAccount;
  }

  /**
   * 根据第三方平台的用户ID和提供商查找 users表中的用户 并返回关联的oauthAccount
   * @param userInfo 用户信息
   * @returns 关联的oauthAccount
   */
  async getOauthAccount(userInfo: OAuthUserInfo) {
    const { id, provider } = userInfo;
    // 根据第三方平台的用户ID和提供商查找 users表中的用户
    const oauthAccount = await this.prisma.oAuthAccount.findUnique({
      where: { providerAccountId: id, provider },
      include: {
        user: true
      }
    });

    return oauthAccount;
  }

  /**
   * 创建OAuth账户
   * @param userInfo 用户信息
   * @param userId 用户ID
   * @returns 创建的OAuth账户
   */
  async createOAuthAccount(userInfo: OAuthUserInfo, userId: string) {
    const accountData = pick(userInfo, ['provider', 'accessToken', 'refreshToken', 'expiresAt']);
    const oauthAccount = await this.prisma.oAuthAccount.create({
      data: { ...accountData, providerAccountId: userInfo.id, userId },
      include: {
        user: true
      }
    });

    return oauthAccount;
  }

  /**
   * 创建用户
   * @param userInfo 用户信息
   * @returns 创建的用户
   */
  async createUser(userInfo: OAuthUserInfo) {
    const userData = pick(userInfo, ['name', 'email', 'avatar']);

    const user = await this.prisma.user.create({
      data: userData
    });
    return user;
  }
}

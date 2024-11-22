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
  async handleOAuthCallback(provider: string, code: string, options: AuthUrlOptions): Promise<any> {
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
    } else {
      // 更新oauthAccount
      await this.updateOAuthAccount(oauthUserInfo);
      await this.updateUser(oauthUserInfo);
    }

    return oauthAccount.user;
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
    const oauthAccount = await this.prisma.oAuthAccount.create({
      data: {
        provider: userInfo.provider,
        providerAccountId: userInfo.id,
        userId: userId,
        accessToken: userInfo.accessToken
        // refreshToken: userInfo.refreshToken,
        // expiresAt: userInfo.expiresAt
      },
      include: {
        user: true
      }
    });

    return oauthAccount;
  }

  /**
   * 更新OAuth账户
   * @param userInfo 用户信息
   * @returns 更新的OAuth账户
   */
  async updateOAuthAccount(userInfo: OAuthUserInfo) {
    const oauthAccount = await this.prisma.oAuthAccount.update({
      where: { id: userInfo.id },
      data: userInfo
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

  async updateUser(userInfo: OAuthUserInfo) {
    const userData = pick(userInfo, ['name', 'email', 'avatar']);
    const user = await this.prisma.user.update({
      where: { id: userInfo.id },
      data: userData
    });

    return user;
  }
}

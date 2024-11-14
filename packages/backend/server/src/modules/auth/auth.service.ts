import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { GithubOAuthProvider } from './oauth-providers/github';
import { AuthUrlOptions, OAuthUserInfo } from './oauth-providers/interface';

@Injectable()
export class AuthService {
  private oauthProviders = new Map<string, any>();

  constructor(private githubProvider: GithubOAuthProvider) {
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
    // if (!oauthProvider) {
    //   throw new BadRequestException(`Unsupported OAuth provider: ${provider}`);
    // }
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

    const userInfo = await oauthProvider.getUserInfo(code, options);

    // TODO: 在这里处理用户信息
    // 1. 检查用户是否存在
    // 2. 如果不存在则创建新用户
    // 3. 更新用户的OAuth信息
    // 4. 生成JWT token

    return userInfo;
  }
}

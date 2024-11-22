import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { v4 as uuidv4 } from 'uuid';

import { AuthUrlOptions, OAuthAccessToken, OAuthProvider, OAuthUserInfo } from './interface';

@Injectable()
export class GithubOAuthProvider implements OAuthProvider {
  private readonly apiBaseUrl = 'https://github.com/login/oauth';
  private readonly oauthBaseUrl = `${this.apiBaseUrl}/authorize`;
  private readonly accessTokenUrl = `${this.apiBaseUrl}/access_token`;
  private readonly clientSecret: string;

  constructor(private configService: ConfigService) {
    this.clientSecret = this.configService.get<string>('GITHUB_CLIENT_SECRET');
  }

  /**
   * 生成GitHub OAuth授权URL模板
   * @param options 可选的授权参数
   * @returns GitHub授权URL模板，客户端需要自行添加client_id和redirect_uri
   */
  getAuthorizationUrl(options?: AuthUrlOptions): string {
    const params = new URLSearchParams({
      //TODO state的缓存 过期
      state: uuidv4(),
      ...(options || {})
    });

    return `${this.oauthBaseUrl}?${params.toString()}`;
  }

  /**
   * 获取GitHub访问令牌
   * @param code OAuth授权码
   * @param options 授权参数选项
   * @returns 访问令牌信息
   */
  async getAccessToken(code: string, options: AuthUrlOptions): Promise<OAuthAccessToken> {
    const response = await fetch(this.accessTokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        // client_id: 'Ov23liIjKcMH599s4BCL' || options.clientId,
        client_id: 'Ov23liIjKcMH599s4BCL',
        client_secret: this.clientSecret,
        code,
        redirect_uri: options.redirectUri
      })
    });

    if (!response.ok) {
      throw new Error(`GitHub OAuth error: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * 获取GitHub用户信息
   * @param code OAuth授权码
   * @param options 授权参数选项
   * @returns 标准化的用户信息
   */
  async getUserInfo(code: string, options: AuthUrlOptions): Promise<OAuthUserInfo> {
    const { access_token } = await this.getAccessToken(code, options);
    const response = await fetch(`https://api.github.com/user`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json'
      }
    });
    //TODO:过期时间
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const { id, email, name, avatar_url } = data;

    return {
      id: id.toString(),
      email,
      name,
      avatar: avatar_url,
      accessToken: access_token,
      provider: 'github'
    };
  }
}

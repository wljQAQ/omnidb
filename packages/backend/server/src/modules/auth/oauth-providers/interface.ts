export interface OAuthUserInfo {
  id: string;
  email?: string;
  name?: string;
  avatar?: string;
  provider: string;
}

export interface OAuthAccessToken {
  access_token: string;
  token_type: string;
  scope?: string;
}

export interface AuthUrlOptions {
  scope?: string;
  state?: string;
  clientId?: string;
  redirectUri?: string;
}

export interface OAuthProvider {
  /**
   * 获取OAuth授权URL模板
   * @param options 可选的授权参数(scope, state等)
   * @returns 基础授权URL，客户端需要自行添加client_id和redirect_uri
   */
  getAuthorizationUrl(options?: AuthUrlOptions): string;

  /**
   * 获取用户信息
   * @param code OAuth授权码
   * @param options 授权参数选项
   * @returns 标准化的用户信息
   */
  getUserInfo(code: string, options: AuthUrlOptions): Promise<OAuthUserInfo>;

  /**
   * 使用授权码获取访问令牌
   * @param code OAuth授权码
   * @param options 授权参数选项
   * @returns 访问令牌信息
   */
  getAccessToken(code: string, options: AuthUrlOptions): Promise<OAuthAccessToken>;
}

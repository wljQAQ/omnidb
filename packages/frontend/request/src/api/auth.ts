import request from '../request';

/**
 * 获取 OAuth 登录 URL
 * @param provider - OAuth 提供商
 * @returns 登录 URL
 */
function oauthLogin(provider: string) {
  return request.get(`/auth/oauth/${provider}`);
}

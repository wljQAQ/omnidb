import { Controller, Get, Param, Query } from '@nestjs/common';

import { CatchError } from '../../common/decorators/catch-error.decorator';
import { AuthService } from './auth.service';
import { AuthUrlOptions } from './oauth-providers/interface';

/**
 * 认证控制器
 * 处理所有与认证相关的路由
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * OAuth登录入口
   * @param provider OAuth提供商(如: github)
   * @returns 包含授权URL的对象
   */
  @Get('oauth/:provider')
  @CatchError()
  oauthLogin(@Param('provider') provider: string) {
    const authUrl = this.authService.getAuthorizationUrl(provider);
    return { url: authUrl };
  }

  /**
   * OAuth回调处理
   * @param provider OAuth提供商
   * @param code 授权码
   * @param redirectUri 重定向URI
   * @returns 用户信息
   */
  @Get('oauth/:provider/callback')
  @CatchError()
  async oauthCallback(@Param('provider') provider: string, @Query('code') code: string, @Query('redirect_uri') redirectUri: string) {
    const options: AuthUrlOptions = { redirectUri };
    const userInfo = await this.authService.handleOAuthCallback(provider, code, options);
    return userInfo;
  }
}

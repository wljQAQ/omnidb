import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GithubOAuthProvider } from './oauth-providers/github';

@Module({
  controllers: [AuthController],
  providers: [AuthService, GithubOAuthProvider]
})
export class AuthModule {}

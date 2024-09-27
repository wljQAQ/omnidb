import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { UserService } from './user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Post()
  async getHello(): Promise<string> {
    await this.sleep(20 * 1000);
    return this.appService.getHello();
  }

  @Post('/user')
  async signupUser(@Body() userData: { name?: string; email: string }): Promise<any> {
    console.log(userData,1111)
    return this.userService.createUser(userData);
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

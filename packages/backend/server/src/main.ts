import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

/**
 * 应用程序启动函数
 */
async function bootstrap() {
  // 创建 NestJS 应用实例
  const app = await NestFactory.create(AppModule);
  
  // 启用 CORS
  app.enableCors();
  
  // 注册全局响应拦截器
  // 用于统一处理响应格式
  app.useGlobalInterceptors(new TransformInterceptor());
  
  // 注册全局异常过滤器
  // 用于统一处理异常响应
  app.useGlobalFilters(new HttpExceptionFilter());
  
  // 启动应用，监听 3000 端口
  await app.listen(3000);
}

// 启动应用
bootstrap();

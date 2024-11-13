import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

/**
 * HTTP异常过滤器
 * 用于统一处理HTTP异常响应格式
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * 异常处理方法
   * @param exception HTTP异常对象
   * @param host 参数主机对象
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // 处理错误消息
    let message = 'Internal server error';
    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (typeof exceptionResponse === 'object' && 'message' in exceptionResponse) {
      message = (exceptionResponse as { message: string }).message;  // 类型断言解决 unknown 类型错误
    }

    // 返回统一的错误响应格式
    response.status(status).json({
      code: status,
      success: false,
      message,
      data: null
    });
  }
} 
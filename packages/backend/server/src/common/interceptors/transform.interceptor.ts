import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../interfaces/response.interface';

/**
 * 响应数据转换拦截器
 * 用于统一处理接口响应格式
 * @template T 响应数据类型
 */
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  /**
   * 拦截器实现方法
   * @param context 执行上下文
   * @param next 调用处理器
   * @returns Observable<ApiResponse<T>> 统一格式的响应流
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    // 处理响应数据流，转换为统一格式
    return next.handle().pipe(
      map(data => ({
        code: 0, // 成功状态码
        data, // 原始响应数据
        message: 'Success', // 成功消息
        success: true // 成功标志
      }))
    );
  }
} 
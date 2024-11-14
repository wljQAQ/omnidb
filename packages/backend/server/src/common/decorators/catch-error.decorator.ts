import { HttpException, HttpStatus } from '@nestjs/common';

interface ErrorConfig {
  message?: string;
  status?: HttpStatus;
  transform?: (error: Error) => { message: string; status: HttpStatus };
}

/**
 * 自动处理异常的方法装饰器
 * @param config 错误配置
 */
export function CatchError(config: ErrorConfig | string = {}) {
  const errorConfig: ErrorConfig = typeof config === 'string' ? { message: config } : config;

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        if (error instanceof HttpException) {
          throw error;
        }

        if (errorConfig.transform) {
          const { message, status } = errorConfig.transform(error);
          throw new HttpException(message, status);
        }

        throw new HttpException(
          errorConfig.message || error.message || propertyKey + ' error',
          errorConfig.status || HttpStatus.BAD_REQUEST
        );
      }
    };

    return descriptor;
  };
}

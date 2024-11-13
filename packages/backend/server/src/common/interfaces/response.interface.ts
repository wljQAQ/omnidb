/**
 * API统一响应格式接口
 * @template T 响应数据的类型
 */
export interface ApiResponse<T = any> {
  /** 响应状态码 (0 表示成功) */
  code: number;
  /** 响应数据 */
  data: T;
  /** 响应消息 */
  message: string;
  /** 请求是否成功 */
  success: boolean;
} 
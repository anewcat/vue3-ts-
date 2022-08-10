import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface KJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
  // 问号表示属性可填可不填
}
export interface KJRequestConfig extends AxiosRequestConfig {
  interceptors?: KJRequestInterceptors
  // 在自己定义的接口中对AxiosRequestConfig类型进行扩展
  showLoading?: boolean
  // 有些请求不需要有Loading，可以在request请求传参时控制，由于没有这样的参数，所以需要在这里定义
}

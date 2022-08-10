import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { KJRequestInterceptors, KJRequestConfig } from './types'
import { ElLoading } from 'element-plus'
// 从element-plus中直接导入loading
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
class KJRequest {
  instance: AxiosInstance
  interceptors?: KJRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean
  constructor(config: KJRequestConfig) {
    this.instance = axios.create(config)
    // 保存基本信息
    //axios中create函数创建出实例
    this.interceptors = config.interceptors
    // 保存传入的拦截器
    this.showLoading = config.showLoading ?? true
    // ??会判断前面的值是不是undefined，若是的话会给this.showLoading赋予问号后的值
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      // 每个实例都可以应用别人传进来的拦截
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      // 每个实例都可以应用别人传进来的接口
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有的实例都有拦截器：请求拦截成功1')
        if (this.showLoading) {
          // 判断showLoading是true还是false
          this.loading = ElLoading.service({
            // 为每个请求添加蒙版，请求结束后应该移除该loading
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有的实例都有拦截器：请求拦截失败1')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有拦截器：响应拦截成功1')
        // 将loading移除
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          // console.log('请求失败~，错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // console.log('所有的实例都有拦截器：响应拦截失败1')
        if (err.response.status === 404) {
          if (err.response.status === 404) {
            console.log('404错误')
          }
        }
        return err
      }
    )
  }
  // 封装一个请求
  request<T>(config: KJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 默认的AxiosRequestConfig不能传入任何拦截器，所以使用自己封装的KJRequestConfig
      // 1.单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        // 查看config中是否有config.interceptors?.requestInterceptor
        config = config.interceptors.requestInterceptor(config)
        // 有config会执行一下
      }
      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        // request中有两个泛型，第一个是any第二个是AxiosResponse
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // 查看config中是否有config.interceptors?.requestInterceptor
            res = config.interceptors.responseInterceptor(res)
            // 有config会执行一下
          }
          console.log(res)
          // 2.将showLoading设置为true，不会影响下一个请求
          this.showLoading = true

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = true
          return err
        })
    })
  }
  get<T>(config: KJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: KJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: KJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: KJRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default KJRequest

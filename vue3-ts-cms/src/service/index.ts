//service统一出口
import KJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const kjRequest = new KJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        if (config && config?.headers) {
          // axios AxiosRequestConfig中的header可能是undefined所以要进行判断
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      // console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败的拦截')
      return err
    }
  }
})
export default kjRequest

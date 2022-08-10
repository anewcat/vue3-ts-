import { createApp } from 'vue'
import { registerApp } from './global'
// 引入样式
import 'normalize.css'

import './assets/css/index.less'
// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
// import 'element-plus/theme-chalk/dark/css-vars.css'
import './service/axios_demo'
import App from './App.vue'
import store from './store'
import router from './router'
import kjRequest from './service'
const app = createApp(App)
registerApp(app)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// 有拦截的请求
kjRequest.request({
  url: 'home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    responseInterceptor: (res) => {
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
// 没有拦截的请求
kjRequest
  .get<DataType>({
    url: '/home/multidata',
    // method: 'GET',
    showLoading: true
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

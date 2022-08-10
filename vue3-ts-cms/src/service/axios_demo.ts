import axios from 'axios'
//axios的实例对象
// 模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
// 模拟get请求传参
// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'xkj',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
//模拟post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'xkj',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// //axios的配置选项
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 10000
//
// axios.all->多个请求，一起返回
// axios
//   .all([
//     axios.get('/get', { params: { name: 'xkj', age: 18 } }),
//     axios.post('/get', { params: { name: 'xkj', age: 18 } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//     console.log(res[1])
//   })

//axios的拦截器
// fn1：请求发送成功会执行的函数(第一个参数)
// fn2：请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //可以在这里做想做的操作
    // 给请求添加token
    // isloading动画
    // console.log('请求拦截成功')
    return config
    // 首先要返回配置config
  },
  (err) => {
    // console.log('请求发送错误')
    return err
  }
)

// fn1：数据响应成功(服务器正常的返回了数据 20x)
// fn2：服务器响应发生错误
axios.interceptors.response.use(
  (res) => {
    // console.log('响应拦截成功')
    // 可以在这里返回res.data，因为服务器返回的数据都是在data里，这样的话可以直接获得data数据
    return res
  },
  (err) => {
    // console.log('服务器响应失败')
    return err
  }
)

//方式一：手动的切换不同的环境，可以通过在一个地方同时定义多个环境切换注释的方式来实现
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/pro'
// const BASE_NAME = 'xkj'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'qka'

// 根据process.env.NODE_ENV
//其在不同环境下对应的值不同
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
  // BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/pro'
  // BASE_NAME = 'xkj'
} else {
  BASE_URL = 'http://coderwhy.org/test'
  // BASE_NAME = 'qka'
}
export { BASE_URL, TIME_OUT }

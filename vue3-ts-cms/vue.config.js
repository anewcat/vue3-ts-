const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置方式一：CLI配置提供的属性
  outputDir: './build'
  // 配置方式二：和webpack属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // 函数写法
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 配置方式三
  // chainWebpack:(config)=>{
  //     config.resolve.alias
  //     .set('@',path.resolve(__dirname,'src'))
  //     .set('components','@/components')
  //   }
})

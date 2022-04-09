const { defineConfig } = require('@vue/cli-service')
// const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir:bundle,
  lintOnSave: false,
  devServer: {
    proxy: 'http://121.4.92.135:8033',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https:/www.bilibili.com/index/ding.json',
  //       changOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  // 原生配置   需要先引入 webpack
  configureWebpack: {
    plugins: [
      // new webpack.BannerPlugin({
      //   banner: 'liurhui'
      // })
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/common/scss/_element-variables";`
        // additionalData: `@import "~@/element-variables";`
      }
    }
  }
})

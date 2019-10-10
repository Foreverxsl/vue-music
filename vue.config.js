const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  productionSourceMap: process.env.VUE_APP_PRODUCTION_SOURCE_MAP === 'on',
  devServer: {
    host: 'localhost',
    port: 8088,
    https: false,
    hot: true,
    hotOnly: false,
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    // 这里只写了两个，按这种格式.set('', resolve(''))
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets',resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
    // const oneOfsMap = config.module.rule('scss').oneOfs.store
    /*在vue开发中，在sass中，定义了一个函数或者mixin ，并且单独写在一个文件中，
    比如叫mixin.scss, 要使用必须要@import,
    但是在组件化开发的时候，很多组件都使用到，每一个都要引入，非常麻烦
    sass-resources-loader配置完后mixin.scss里的就可以全局使用了*/
    // oneOfsMap.forEach(item => {
    //   item
    //     .use('sass-resources-loader')
    //     .loader('sass-resources-loader')
    //     .options({
    //       // Provide path to the file with resources
    //       resources: './src/styles/base/_mixins.scss'
    //     })
    //     .end()
    // })
  }
}
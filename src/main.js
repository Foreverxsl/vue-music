import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 入口文件引入公共样式
import './common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

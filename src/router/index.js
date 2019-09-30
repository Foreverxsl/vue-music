import Vue from 'vue'
import Router from 'vue-router'
// import tab from '../components/tab/tab.vue'
const search = () => import(/* webpackChunkName: "search" */ '../views/search/index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/search',
      component: search
    }
    // {
    //   path: '/recommend',
    //   component: tab
    // }
  ]
})
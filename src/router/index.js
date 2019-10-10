import Vue from 'vue'
import Router from 'vue-router'
const search = () => import(/* webpackChunkName: "search" */ '../views/search/index.vue')
const singer = () => import(/* webpackChunkName: "search" */ '../views/singer/index.vue')
const rank = () => import(/* webpackChunkName: "search" */ '../views/rank/index.vue')
const recommend = () => import(/* webpackChunkName: "search" */ '../views/recommend/index.vue')

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
    },
    {
      path: '/singer',
      component: singer
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/recommend',
      component: recommend
    }
    // {
    //   path: '/recommend',
    //   component: tab
    // }
  ]
})
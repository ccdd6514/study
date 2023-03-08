import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    meta: {
      title: '首页',
      publicHeader: false,
      publicFooter: false
    }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "home" */ '../views/product.vue'),
    meta: {
      title: '产品中心',
      publicHeader: true,
      publicFooter: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router

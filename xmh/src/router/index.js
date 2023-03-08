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
    component: () => import(/* webpackChunkName: "product" */ '../views/product.vue'),
    meta: {
      title: '产品中心',
      publicHeader: true,
      publicFooter: true
    }
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/news.vue'),
    meta: {
      title: '新闻资讯',
      publicHeader: true,
      publicFooter: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
    meta: {
      title: '关于我们',
      publicHeader: true,
      publicFooter: true
    }
  },
  {
    path: '/job',
    name: 'job',
    component: () => import(/* webpackChunkName: "job" */ '../views/job.vue'),
    meta: {
      title: '人才召集',
      publicHeader: true,
      publicFooter: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router

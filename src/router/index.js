import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '@/pages/Home/index.vue'
import Logup from '@/pages/Logup/index.vue'
import Login from '@/pages/Login/index.vue'
import Create from '@/pages/Create/index.vue'
import Detail from '@/pages/Detail/index.vue'
import Edit from '@/pages/Edit/index.vue'
import My from '@/pages/My/index.vue'
import User from '@/pages/User/index.vue' */
import store from '../store'

Vue.use(Router)

/* const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/logup',
      name: 'Logup',
      component: Logup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: Edit,
      meta: { requiresAuth: true }
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: User
    }
  ]
}) */

// 异步加载路由页面的组件，节省一开始进入页面时加载全部页面组件的时间成本
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home/index.vue')
    },
    {
      path: '/logup',
      name: 'Logup',
      component: () => import('@/pages/Logup/index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Login/index.vue')
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('@/pages/Create/index.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: () => import('@/pages/Detail/index.vue')
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: () => import('@/pages/Edit/index.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/pages/My/index.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: () => import('@/pages/User/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router

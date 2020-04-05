import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index.vue'
import Logup from '@/pages/Logup/index.vue'
import Login from '@/pages/Login/index.vue'
import Create from '@/pages/Create/index.vue'
import Detail from '@/pages/Detail/index.vue'
import Edit from '@/pages/Edit/index.vue'
import My from '@/pages/My/index.vue'
import User from '@/pages/User/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/logup',
      name: 'Logup',
      component: Logup
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/create',
      name: 'Create',
      component: Create
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }, {
      path: '/my',
      name: 'My',
      component: My
    }, {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})

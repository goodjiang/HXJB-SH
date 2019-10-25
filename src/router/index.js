import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import List from '@/pages/List'
import Set from '@/pages/Set/Set'
import GaiPassword from '@/pages/Set/GaiPassword'
import SonList from '@/pages/Set/SonList'
import XiugaiSon from '@/pages/Set/XiugaiSon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Set/Set',
      name: 'Set',
      component: Set
    },
    {
      path: '/Set/GaiPassword',
      name: 'GaiPassword',
      component: GaiPassword
    },
    {
      path: '/Set/SonList',
      name: 'SonList',
      component: SonList
    },
    {
      path: '/Set/XiugaiSon',
      name: 'XiugaiSon',
      component: XiugaiSon
    }
  ]
})

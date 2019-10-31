import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import List from '@/pages/List'
import Set from '@/pages/Set/Set'
import GaiPassword from '@/pages/Set/GaiPassword'
import SonList from '@/pages/Set/SonList'
import XiugaiSon from '@/pages/Set/XiugaiSon'
import SvipHexiao from '@/pages/SvipHexiao'
import Billing from '@/pages/Billing/Billing'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:"/Login"
    },
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
    },
    {
      path: '/SvipHexiao',
      name: 'SvipHexiao',
      component: SvipHexiao
    },
    {
      path: '/Billing/Billing',
      name: 'Billing',
      component: Billing
    }
  ],
    mode: 'history',
})

export default router;

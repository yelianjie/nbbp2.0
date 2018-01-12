import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Register',
      name: 'Register',
      component: (resolve) => {
        require(['@/pages/Register'], resolve)
      }
    },
    {
      path: '/AgentCenter',
      name: 'AgentCenter',
      component: (resolve) => {
        require(['@/pages/AgentCenter'], resolve)
      }
    },
    {
      path: '/BusinessCenter',
      name: 'BusinessCenter',
      component: (resolve) => {
        require(['@/pages/BusinessCenter'], resolve)
      }
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: (resolve) => {
        require(['@/pages/Deposit'], resolve)
      }
    },
    {
      path: '/BasicBusiness',
      name: 'BasicBusiness',
      component: (resolve) => {
        require(['@/pages/BasicBusiness'], resolve)
      }
    },
    {
      path: '/NoticeSetting',
      name: 'NoticeSetting',
      component: (resolve) => {
        require(['@/pages/NoticeSetting'], resolve)
      }
    },
    {
      path: '/AdSetting',
      name: 'AdSetting',
      component: (resolve) => {
        require(['@/pages/AdSetting'], resolve)
      }
    },
    {
      path: '/Manager',
      name: 'Manager',
      component: (resolve) => {
        require(['@/pages/Manager'], resolve)
      }
    },
    {
      path: '/AgentBarInfo',
      name: 'AgentBarInfo',
      component: (resolve) => {
        require(['@/pages/AgentBarInfo'], resolve)
      }
    }
  ]
})

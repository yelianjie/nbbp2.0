import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => {
        require(['@/pages/Home'], resolve)
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: (resolve) => {
        require(['@/pages/Register'], resolve)
      }
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: (resolve) => {
        require(['@/pages/UserCenter'], resolve)
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: (resolve) => {
        require(['@/pages/Profile'], resolve)
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
      path: '/BapingSetting',
      name: 'BapingSetting',
      component: (resolve) => {
        require(['@/pages/BapingSetting'], resolve)
      }
    },
    {
      path: '/BgSetting',
      name: 'BgSetting',
      component: (resolve) => {
        require(['@/pages/BgSetting'], resolve)
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
    },
    {
      path: '/BindManage',
      name: 'BindManage',
      component: (resolve) => {
        require(['@/pages/BindManage'], resolve)
      }
    },
    {
      path: '/Main',
      name: 'Main',
      component: (resolve) => {
        require(['@/pages/Main'], resolve)
      }
    }
  ]
})

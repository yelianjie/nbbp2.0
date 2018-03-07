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
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/QrcodeLogin',
      name: 'QrcodeLogin',
      component: (resolve) => {
        require(['@/pages/QrcodeLogin'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: (resolve) => {
        require(['@/pages/Register'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: (resolve) => {
        require(['@/pages/UserCenter'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: (resolve) => {
        require(['@/pages/Profile'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/BusinessJoin',
      name: 'BusinessJoin',
      component: (resolve) => {
        require(['@/pages/BusinessJoin'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/AgentCenter',
      name: 'AgentCenter',
      component: (resolve) => {
        require(['@/pages/AgentCenter'], resolve)
      },
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/BusinessCenter/:id',
      name: 'BusinessCenter',
      component: (resolve) => {
        require(['@/pages/BusinessCenter'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/Deposit/:id',
      name: 'Deposit',
      component: (resolve) => {
        require(['@/pages/Deposit'], resolve)
      },
      meta: {
        roles: ['agent', 'business', 'manager']
      }
    },
    {
      path: '/BasicBusiness/:id',
      name: 'BasicBusiness',
      component: (resolve) => {
        require(['@/pages/BasicBusiness'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/NoticeSetting/:id',
      name: 'NoticeSetting',
      component: (resolve) => {
        require(['@/pages/NoticeSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/AdSetting/:id',
      name: 'AdSetting',
      component: (resolve) => {
        require(['@/pages/AdSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/BapingSetting/:id',
      name: 'BapingSetting',
      component: (resolve) => {
        require(['@/pages/BapingSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/BgSetting/:id',
      name: 'BgSetting',
      component: (resolve) => {
        require(['@/pages/BgSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/Manager/:id',
      name: 'Manager',
      component: (resolve) => {
        require(['@/pages/Manager'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/AgentBarInfo/:id',
      name: 'AgentBarInfo',
      component: (resolve) => {
        require(['@/pages/AgentBarInfo'], resolve)
      },
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/BindManage/:id',
      name: 'BindManage',
      component: (resolve) => {
        require(['@/pages/BindManage'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/Main/:id',
      name: 'Main',
      component: (resolve) => {
        require(['@/pages/Main'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/Charge',
      name: 'Charge',
      component: (resolve) => {
        require(['@/pages/Charge'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/Income',
      name: 'Income',
      component: (resolve) => {
        require(['@/pages/Income'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/About',
      name: 'About',
      component: (resolve) => {
        require(['@/pages/About'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/MyLevel',
      name: 'MyLevel',
      component: (resolve) => {
        require(['@/pages/MyLevel'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/MyBars',
      name: 'MyBars',
      component: (resolve) => {
        require(['@/pages/MyBars'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/MyManageBars',
      name: 'MyManageBars',
      component: (resolve) => {
        require(['@/pages/MyManageBars'], resolve)
      },
      meta: {
        roles: ['manager']
      }
    }
  ]
})

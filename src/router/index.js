import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'
const _import = file => () => import('@/pages/' + file + '.vue').then().catch(error => {
  console.log(error)
  store.commit('updateLoadingStatus', {isLoading: false})
  if (Vue.$vux) {
    Vue.$vux.toast.show({
      text: '网络错误，请重试或刷新页面',
      width: '15em'
    })
  }
})
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import('Home'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/QrcodeLogin',
      name: 'QrcodeLogin',
      component: _import('QrcodeLogin'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#f3f2f7'
      }
    },
    {
      path: '/Register',
      name: 'Register',
      component: _import('Register'),
      meta: {
        roles: ['user', 'agent', 'business']
      }
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: _import('UserCenter'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: _import('Profile'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/BusinessJoin',
      name: 'BusinessJoin',
      component: _import('BusinessJoin'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/AgentCenter',
      name: 'AgentCenter',
      component: _import('AgentCenter'),
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/BusinessCenter',
      name: 'BusinessCenter',
      component: _import('BusinessCenter'),
      meta: {
        roles: ['user', 'business'],
        allowValid: true
      }
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: _import('Deposit'),
      meta: {
        roles: ['agent', 'business', 'manager']
      }
    },
    {
      path: '/DepositDetails',
      name: 'DepositDetails',
      component: _import('DepositDetails'),
      meta: {
        roles: ['agent', 'business', 'manager']
      }
    },
    {
      path: '/BasicBusiness',
      name: 'BasicBusiness',
      component: _import('BasicBusiness'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/BasicBusiness'
      }
    },
    {
      path: '/NoticeSetting',
      name: 'NoticeSetting',
      component: _import('NoticeSetting'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/NoticeSetting'
      }
    },
    {
      path: '/AdSetting',
      name: 'AdSetting',
      component: _import('AdSetting'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/AdSetting'
      }
    },
    {
      path: '/BapingSetting',
      name: 'BapingSetting',
      component: _import('BapingSetting'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/BapingSetting'
      }
    },
    {
      path: '/BapingCustom',
      name: 'BapingCustom',
      component: _import('BapingCustom'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/BapingSetting'
      }
    },
    {
      path: '/BapingSong',
      name: 'BapingSong',
      component: _import('BapingSong'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/BapingSetting'
      }
    },
    {
      path: '/SongManage',
      name: 'SongManage',
      component: _import('SongManage'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/BapingSetting'
      }
    },
    /* {
      path: '/BgSetting',
      name: 'BgSetting',
      component: (resolve) => {
        require(['@/pages/BgSetting'], resolve)
      },
      meta: {
        roles: ['business', 'manager']
      }
    }, */
    {
      path: '/Manager',
      name: 'Manager',
      component: _import('Manager'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/Manager'
      }
    },
    {
      path: '/ManagerUpdate',
      name: 'ManagerUpdate',
      component: _import('ManagerUpdate'),
      meta: {
        roles: ['user', 'business'],
        managerValid: true,
        rights: '/Manager'
      }
    },
    {
      path: '/AgentBarInfo',
      name: 'AgentBarInfo',
      component: _import('AgentBarInfo'),
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/BindManage',
      name: 'BindManage',
      component: _import('BindManage'),
      meta: {
        roles: ['user', 'agent', 'business']
      }
    },
    {
      path: '/IncomeOthers',
      name: 'IncomeOthers',
      component: _import('IncomeOthers'),
      meta: {
        roles: ['agent', 'business']
      }
    },
    {
      path: '/IncomeByMonth',
      name: 'IncomeByMonth',
      component: _import('IncomeByMonth'),
      meta: {
        roles: ['agent', 'business']
      }
    },
    {
      path: '/Main/:id',
      name: 'Main',
      component: _import('Main'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/Lottery',
      name: 'Lottery',
      component: _import('Lottery'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#181b2a'
      }
    },
    {
      path: '/Charge',
      name: 'Charge',
      component: _import('Charge'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#181b2a'
      }
    },
    {
      path: '/Income',
      name: 'Income',
      component: _import('Income'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/About',
      name: 'About',
      component: _import('About'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: _import('Detail'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#121420'
      }
    },
    {
      path: '/BusinessOrderDetail',
      name: 'BusinessOrderDetail',
      component: _import('BusinessOrderDetail'),
      meta: {
        roles: ['user', 'agent', 'business'],
      }
    },
    {
      path: '/MyLevel',
      name: 'MyLevel',
      component: _import('MyLevel'),
      meta: {
        roles: ['user', 'agent', 'business'],
        bg: '#181b2a'
      }
    },
    {
      path: '/MyBars',
      name: 'MyBars',
      component: _import('MyBars'),
      meta: {
        roles: ['user', 'business']
      }
    },
    {
      path: '/MyManageBars',
      name: 'MyManageBars',
      component: _import('MyManageBars'),
      meta: {
        roles: ['manager']
      }
    },
    {
      path: '/HelpAgent',
      name: 'HelpAgent',
      component: _import('HelpAgent'),
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/HelpBusiness',
      name: 'HelpBusiness',
      component: _import('HelpBusiness'),
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/HelpBusinessSet',
      name: 'HelpBusinessSet',
      component: _import('HelpBusinessSet'),
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/HelpBusinessInsert',
      name: 'HelpBusinessInsert',
      component: _import('HelpBusinessInsert'),
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/SongOrders',
      name: 'SongOrders',
      component: _import('SongOrders'),
      meta: {
        roles: ['user']
      }
    }
  ]
})

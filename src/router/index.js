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
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      }
    },
    {
      path: '/QrcodeLogin',
      name: 'QrcodeLogin',
      component: (resolve) => {
        require(['@/pages/QrcodeLogin'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#f3f2f7'
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
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: (resolve) => {
        require(['@/pages/Profile'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      }
    },
    {
      path: '/BusinessJoin',
      name: 'BusinessJoin',
      component: (resolve) => {
        require(['@/pages/BusinessJoin'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
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
      path: '/BusinessCenter',
      name: 'BusinessCenter',
      component: (resolve) => {
        require(['@/pages/BusinessCenter'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: (resolve) => {
        require(['@/pages/Deposit'], resolve)
      },
      meta: {
        roles: ['agent', 'business', 'manager']
      }
    },
    {
      path: '/DepositOthers',
      name: 'DepositOthers',
      component: (resolve) => {
        require(['@/pages/DepositOthers'], resolve)
      },
      meta: {
        roles: ['agent', 'business', 'manager']
      }
    },
    {
      path: '/BasicBusiness',
      name: 'BasicBusiness',
      component: (resolve) => {
        require(['@/pages/BasicBusiness'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/NoticeSetting',
      name: 'NoticeSetting',
      component: (resolve) => {
        require(['@/pages/NoticeSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/AdSetting',
      name: 'AdSetting',
      component: (resolve) => {
        require(['@/pages/AdSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/BapingSetting',
      name: 'BapingSetting',
      component: (resolve) => {
        require(['@/pages/BapingSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/BgSetting',
      name: 'BgSetting',
      component: (resolve) => {
        require(['@/pages/BgSetting'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/Manager',
      name: 'Manager',
      component: (resolve) => {
        require(['@/pages/Manager'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/AgentBarInfo',
      name: 'AgentBarInfo',
      component: (resolve) => {
        require(['@/pages/AgentBarInfo'], resolve)
      },
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/BindManage',
      name: 'BindManage',
      component: (resolve) => {
        require(['@/pages/BindManage'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager']
      }
    },
    {
      path: '/IncomeOthers',
      name: 'IncomeOthers',
      component: (resolve) => {
        require(['@/pages/IncomeOthers'], resolve)
      },
      meta: {
        roles: ['agent', 'business']
      }
    },
    {
      path: '/IncomeByMonth',
      name: 'IncomeByMonth',
      component: (resolve) => {
        require(['@/pages/IncomeByMonth'], resolve)
      },
      meta: {
        roles: ['agent', 'business']
      }
    },
    {
      path: '/Main/:id',
      name: 'Main',
      component: (resolve) => {
        require(['@/pages/Main'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      }
    },
    {
      path: '/Charge',
      name: 'Charge',
      component: (resolve) => {
        require(['@/pages/Charge'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#181b2a'
      }
    },
    {
      path: '/Income',
      name: 'Income',
      component: (resolve) => {
        require(['@/pages/Income'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      }
    },
    {
      path: '/About',
      name: 'About',
      component: (resolve) => {
        require(['@/pages/About'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      }
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: (resolve) => {
        require(['@/pages/Detail'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#121420'
      },
      redirect: '/Detail/Charge',
      children: [
        {
          path: 'Charge',
          component: (resolve) => {
            require(['@/components/Detail/Charge'], resolve)
          },
          meta: {
            roles: ['user', 'agent', 'business', 'manager'],
            bg: '#121420'
          }
        },
        {
          path: 'Consume',
          component: (resolve) => {
            require(['@/components/Detail/Consume'], resolve)
          },
          meta: {
            roles: ['user', 'agent', 'business', 'manager'],
            bg: '#121420'
          }
        },
        {
          path: 'Income',
          component: (resolve) => {
            require(['@/components/Detail/Income'], resolve)
          },
          meta: {
            roles: ['user', 'agent', 'business', 'manager'],
            bg: '#121420'
          }
        },
        {
          path: 'Exchange',
          component: (resolve) => {
            require(['@/components/Detail/Exchange'], resolve)
          },
          meta: {
            roles: ['user', 'agent', 'business', 'manager'],
            bg: '#121420'
          }
        },
        {
          path: 'Deposit',
          component: (resolve) => {
            require(['@/components/Detail/Deposit'], resolve)
          },
          meta: {
            roles: ['user', 'agent', 'business', 'manager'],
            bg: '#121420'
          }
        }
      ]
    },
    {
      path: '/MyLevel',
      name: 'MyLevel',
      component: (resolve) => {
        require(['@/pages/MyLevel'], resolve)
      },
      meta: {
        roles: ['user', 'agent', 'business', 'manager'],
        bg: '#181b2a'
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
    },
    {
      path: '/HelpAgent',
      name: 'HelpAgent',
      component: (resolve) => {
        require(['@/pages/HelpAgent'], resolve)
      },
      meta: {
        roles: ['agent']
      }
    },
    {
      path: '/HelpBusiness',
      name: 'HelpBusiness',
      component: (resolve) => {
        require(['@/pages/HelpBusiness'], resolve)
      },
      meta: {
        roles: ['business']
      }
    },
    {
      path: '/HelpBusinessSet',
      name: 'HelpBusinessSet',
      component: (resolve) => {
        require(['@/pages/HelpBusinessSet'], resolve)
      },
      meta: {
        roles: ['user', 'business']
      }
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import router from './router'
import VueJsonp from 'vue-jsonp'
import './icons'
import 'vux/src/styles/reset.less'
import './styles/global.less'
import * as filters from './filters' // global filters
import * as directives from './directives' // global directives
import bpDialog from './plugins/bpDialog'
import maskPlugin from './plugins/mask'
import noscrollPlugin from './plugins/noscroll'
import { ToastPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin } from 'vux'
import VeeValidate, { Validator } from 'vee-validate'
import ZH_CN from 'vee-validate/dist/locale/zh_CN'
import { validateRules } from './utils/validateRules'
import VueLazyload from 'vue-lazyload'
const dictionary = {
  ch: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: (field) => field + '不能为空'
    }
  }
}
// custom validator
Object.keys(validateRules).forEach((key) => {
  Validator.extend(key, validateRules[key].validate)
  // merge the validator messages
  Object.keys(validateRules[key].messages).forEach(locale => {
    Validator.localize({
      [locale]: {
        messages: {
          [key]: validateRules[key].messages[locale]
        }
      }
    })
  })
})

Validator.localize('ch', ZH_CN)
Vue.use(VeeValidate, {
  errorBagName: 'vErrors',
  dictionary: dictionary
})
Vue.use(WechatPlugin)
Vue.use(VueJsonp)
Vue.use(bpDialog)
Vue.use(maskPlugin)
Vue.use(noscrollPlugin)
Vue.use(ToastPlugin, {
  position: 'bottom',
  time: 1500,
  type: 'text',
  isShowMask: true
})
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueLazyload)
Vue.use(VueRouter)
window.URL = window.URL || window.webkitURL
FastClick.attach(document.body)

Vue.config.productionTip = false

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('app/UPDATE_DIRECTION', 'forward')
    } else {
      store.commit('app/UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('app/UPDATE_DIRECTION', 'forward')
  }
  // 判断当前角色有没有权限进入这个路由
  // if (store.getters['user/role'])
  /* let role = store.getters['user/role']
  let userInfo = store.getters['user/userInfo']
  if (Object.keys(userInfo).length === 0) {
    store.dispatch('user/getUserInfo').then(() => {
      if (role.some((v) => to.meta.roles.includes(v))) {
        store.commit('updateLoadingStatus', {isLoading: true})
        next()
      } else {
        next({path: '/'})
      }
    })
  } else {
    if (role.some((v) => to.meta.roles.includes(v))) {
      store.commit('updateLoadingStatus', {isLoading: true})
      next()
    } else {
      next({path: '/'})
    }
  } */
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  document.documentElement.classList.remove('noscroll')
  store.commit('updateLoadingStatus', {isLoading: false})
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

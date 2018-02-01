// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import router from './router'
import './icons'
import 'vux/src/styles/reset.less'
import './styles/global.less'
import bpDialog from './plugins/bpDialog'
import maskPlugin from './plugins/mask'
import { ToastPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin } from 'vux'
import VeeValidate, { Validator } from 'vee-validate'
import ZH_CN from 'vee-validate/dist/locale/zh_CN'
import { validateRules } from './utils/validateRules'
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
Vue.use(bpDialog)
Vue.use(maskPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueRouter)
window.URL = window.URL || window.webkitURL
FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

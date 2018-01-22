// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import router from './router'
import './icons'
import bpDialog from './plugins/bpDialog'
import { ToastPlugin, ConfirmPlugin } from 'vux'
import VeeValidate, { Validator } from 'vee-validate'
import ZH_CN from 'vee-validate/dist/locale/zh_CN'
Validator.localize('ch', ZH_CN)
Validator.localize('ch')
Vue.use(VeeValidate, {
  errorBagName: 'vErrors'
})
Vue.use(bpDialog)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')

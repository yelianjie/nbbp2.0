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
import { getWxConfig, getHasToken } from './api/'
// let isAddWxMsg = false
// 判断
var tId = localStorage.getItem('tId')
if (process.env.NODE_ENV !== 'production' && !tId) {
  localStorage.setItem('tId', 'ad5f4d1290b91a4d16af4160618dda787c23d094')
  tId = localStorage.getItem('tId')
}
if (!tId) {
  getHasToken().then((res) => {
    // 有token了 存token下次不进来 继续路由
    localStorage.setItem('tId', res.result)
    init()
  }).catch((error) => {
    // 第一次登录
    if (error === '未登录') {
      var url = window.location.hash.substring(1)
      alert(window.location.origin + '/weixin/login/index?callback_url=' + url)
      window.location.href = window.location.origin + '/weixin/login/index?callback_url=' + url
    }
  })
} else {
  init()
}
function init () {
  // object.assign for wx
  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign (target, varArgs) { // .length of function is 2
        'use strict'
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object')
        }
        var to = Object(target)
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index]
          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey]
              }
            }
          }
        }
        return to
      },
      writable: true,
      configurable: true
    })
  }
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
    position: 'middle',
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
  // history.setItem('/', 0)
  router.beforeEach(function (to, from, next) {
    /* if (to.name === 'Main' && !isAddWxMsg) {
      addWxMsg({url: to.path})
    } */
    /* const toIndex = history.getItem(to.path)
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
    store.commit('updateLoadingStatus', {isLoading: true})
    next() */
    ++historyCount
    history.setItem('count', historyCount)
    // 判断当前角色有没有权限进入这个路由
    if (store.getters['user/role']) {
      let userInfo = store.getters['user/userInfo']
      if (Object.keys(userInfo).length === 0) {
        store.dispatch('user/getUserInfo').then(() => {
          let role = store.getters['user/role']
          if (role.some((v) => to.meta.roles.indexOf(v) > -1)) {
            store.commit('updateLoadingStatus', {isLoading: true})
            next()
          } else {
            next({path: '/'})
          }
        })
      } else {
        let role = store.getters['user/role']
        if (role.some((v) => to.meta.roles.indexOf(v) > -1)) {
          store.commit('updateLoadingStatus', {isLoading: true})
          next()
        } else {
          next({path: '/'})
        }
      }
    }
  })

  router.afterEach(function (to) {
    let shareParams = {}
    shareParams = {
      title: '这么有趣的霸屏交友互动，邀请你一起来玩~',
      desc: '新朋友、霸屏、游戏、送礼互动，线上结合线下，给您的生活增添更多趣味和可能。',
      link: window.location.origin + window.location.pathname,
      imgUrl: 'http://xnb.siweiquanjing.com/screen/images/logo1.png' // 分享图标
    }
    Vue.wechat.ready(() => {
      Vue.wechat.onMenuShareTimeline({
        ...shareParams,
        success: function () {},
        cancel: function () {}
      })
      Vue.wechat.onMenuShareAppMessage({
        ...shareParams,
        success: function () {},
        cancel: function () {}
      })
    })
    document.documentElement.classList.remove('noscroll')
    store.commit('updateLoadingStatus', {isLoading: false})
  })

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })

  function recal () {
    var docEl = document.documentElement
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var recalc = function () {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      var fontSize = clientWidth >= 750 ? 50 : 100 * (clientWidth / 750)
      store.commit('app/SET_FONTSIZE', fontSize)
    }
    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    recalc()
  }
  recal()
  // 微信config配置
  getWxConfig({url: window.location.href.split('#')[0]}).then((res) => {
    Vue.wechat.config({
      ...res.result,
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'previewImage', 'getLocation', 'chooseWXPay'] // 必填，需要使用的JS接口列表
    })
  }).finally(() => {
    // 是否关注
    // store.dispatch('user/isSubscribe')
    /* eslint-disable no-new */
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app-box')
  })
}
/* Vue.wechat.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: '', // 必填，公众号的唯一标识
  timestamp: , // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名
  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'previewImage', 'getLocation'] // 必填，需要使用的JS接口列表
}) */

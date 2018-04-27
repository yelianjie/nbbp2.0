import Vue from 'vue'
import { AjaxPlugin } from 'vux'
require('es6-promise').polyfill()
require('promise.prototype.finally').shim()
Vue.use(AjaxPlugin)
const baseURL = process.env.NODE_ENV === 'production' ? require('../../config/prod.env').BASE_API : require('../../config/dev.env').BASE_API
Vue.http.defaults.baseURL = baseURL
Vue.http.defaults.timeout = 5000
Vue.http.interceptors.request.use(function (config) {
  /* for (var i in config.params) {
    if (typeof config.params[i] === 'string' && config.params[i].indexOf('?') !== -1) {
      config.params[i] = config.params[i].substring(0, config.params[i].indexOf('?'))
    }
  } */
  // Do something before request is sent
  if (window.sessionStorage.getItem('tId')) {
    config.headers['tId'] = window.sessionStorage.getItem('tId')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

const request = (url, method = 'POST', data = {}) => {
  if (method === 'POST') {
    return Vue.http.post(url, data).then((response) => {
      if (response.data.code !== '306000' && response.data.code !== '301001') {
        var _textWidth = '10em'
        if (typeof response.data.result === 'string' && response.data.result.length > 10) {
          _textWidth = '15em'
        }
        Vue.$vux.toast.show({
          text: response.data.result,
          position: 'middle',
          type: 'text',
          time: 1500,
          width: _textWidth
        })
        return Promise.reject(response.data.result)
      } else if (response.data.code === '301001') {
        return Promise.reject(response.data.result)
      } else {
        return Promise.resolve(response.data)
      }
    }, (error) => {
      let errors = ''
      if (error.response) {
        // errors = error.response.data
        errors = '请求错误'
      } else if (error.request) {
        errors = error.request
      } else {
        errors = error.message.indexOf('timeout') !== -1 ? '请求超时' : error.message
      }
      return Promise.reject(errors)
    })
  } else {
    return Vue.http.get(url, {params: data}).then((response) => {
      return Promise.resolve(response.data)
    }, (error) => {
      if (error.response) {
        return Promise.reject(error.response.data)
      } else if (error.request) {
        return Promise.reject(error.request)
      } else {
        return Promise.reject(error.message)
      }
    })
  }
}

export default request

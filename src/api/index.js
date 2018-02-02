import Vue from 'vue'
import { AjaxPlugin } from 'vux'
import { dataURLtoBlob } from '@/utils/utils'
require('es6-promise').polyfill()
Vue.use(AjaxPlugin)
const baseURL = process.env.NODE_ENV === 'production' ? require('../../config/prod.env').BASE_API : require('../../config/dev.env').BASE_API
Vue.http.defaults.baseURL = baseURL
Vue.http.interceptors.request.use(function (config) {
  /* for (var i in config.params) {
    if (typeof config.params[i] === 'string' && config.params[i].indexOf('?') !== -1) {
      config.params[i] = config.params[i].substring(0, config.params[i].indexOf('?'))
    }
  } */
  // Do something before request is sent
  /* if (localStorage.getItem('token_guoguo')) {
    config.headers['Authorization'] = localStorage.getItem('token_guoguo')
  } */
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/**
 * 获取会员信息
 */
export const getMemberInfo = () => {
  return Vue.http.post('/weixin/members/getMember', {}).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}

/**
 * 更新会员信息
 * @param {*} data
 */
export const saveMemberInfo = (data) => {
  return Vue.http.post('/weixin/members/saveMcMsg', data).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}

/**
 * 代理注册
 * @param {*} data
 */
export const agentRegiste = (data) => {
  return Vue.http.post('/weixin/agent/registeragent', data).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}

/**
 * 上传图片
 * @param {*} blob
 */
export function uploadImage (base64, type, cb) {
  const blob = dataURLtoBlob(base64, type)
  var xhr = new XMLHttpRequest()
  var formdata = new FormData()
  formdata.append('file', blob, 'image.png')
  xhr.open('post', baseURL + '/weixin/file_upload/uploadImg')
  xhr.onreadystatechange = function () {
    console.log('readyState' + xhr.readyState)
    console.log('status' + xhr.status)
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText)
      const res1 = {error: false, msg: '上传成功', res: response.result}
      cb(res1)
    } else {
      const res2 = {error: true, msg: '上传失败'}
      cb(res2)
    }
  }
  xhr.send(formdata)
}

export const GetAlbums = (data) => {
  return Vue.http.get('/albums', {params: data}).then((response) => {
    return Promise.resolve(response.data)
  }, (error) => {
    return Promise.reject(error.response.data)
  })
}

import { dataURLtoBlob } from '@/utils/utils'
import request from '@/utils/request'
const baseURL = process.env.NODE_ENV === 'production' ? require('../../config/prod.env').BASE_API : require('../../config/dev.env').BASE_API

/**
 * 获取会员信息
 */
export const getMemberInfo = () => {
  return request('/weixin/members/getMember', 'POST')
}

/**
 * 更新会员信息
 * @param {*} data
 */
export const saveMemberInfo = (data) => {
  return request('/weixin/members/saveMcMsg', 'POST', data)
}

/**
 * 代理注册
 * @param {*} data
 */
export const agentRegiste = (data) => {
  return request('/weixin/agent/registeragent', 'POST', data)
}

/**
 * 获取酒吧公告
 * @param {*} data
 */
export const getNotice = () => {
  return request('/weixin/notice/getNotice', 'POST')
}

/**
 * 保存酒吧公告
 * @param {*} data
 */
export const saveNotice = (data) => {
  return request('/weixin/notice/saveNotice', 'POST', data)
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

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
 * 获取代理首页信息
 */
export const getAgentIndex = () => {
  return request('/weixin/agent/getAgentIndex', 'POST')
}

/**
 * 获取当前酒吧的霸屏主题、时间、礼物列表
 * @param {*} data
 */
export const getBpScreenThemes = (data) => {
  return request('/weixin/hotel/getHtScreenTheme', 'POST')
}

/**
 * 注册酒吧
 * @param {*} data
 */
export const registerBar = (data) => {
  return request('/weixin/hotel/registerHotel', 'POST', data)
}

/**
 * 获取商户所有酒吧
 */
export const getBars = () => {
  return request('/weixin/merchant/HotelList', 'POST')
}

/**
 * 删除酒吧
 */
export const deleteBar = (data) => {
  return request('/weixin/hotel/hotelDelete', 'POST', data)
}

/**
 * 获取当前商户当前酒吧的基本信息和收益情况
 */
export const getBarInfoById = (data) => {
  return request('/weixin/merchant/merchantInfo', 'POST', data)
}

/**
 * 获取酒吧基本信息
 */
export const getBarInfo = (data) => {
  return request('/weixin/hotel/getHotel', 'POST', data)
}

/**
 * 更新酒吧基本信息
 */
export const updateBarInfo = (data) => {
  return request('/weixin/hotel/updateHotel', 'POST', data)
}

/**
 * 获取酒吧霸屏主题、礼物、时间
 */
export const getBpDatas = (data) => {
  return request('/weixin/product/getProduct', 'POST', data)
}

/**
 * 修改霸屏主题、礼物、时间价格
 */
export const updateBpPrice = (data) => {
  return request('/weixin/product/savePrice', 'POST', data)
}

/**
 * 修改霸屏主题、礼物、时间勾选状态
 */
export const updateBpSelect = (data) => {
  return request('/weixin/product/saveProduct', 'POST', data)
}

/**
 * 保存酒吧公告
 * @param {*} data
 */
export const saveBarNotice = (data) => {
  return request('/weixin/notice/saveNotice', 'POST', data)
}

/**
 * 获取酒吧公告
 */
export const getBarNotice = (data) => {
  return request('/weixin/notice/getNotice', 'POST', data)
}

/**
 * 获取背景信息
 * @param {*} data
 */
export const getBg = (data) => {
  return request('/weixin/background/getBackground', 'POST', data)
}

/**
 * 勾选背景
 * @param {*} data
 */
export const setBg = (data) => {
  return request('/weixin/background/saveBackground', 'POST', data)
}

/**
 * 获取酒吧广告
 * @param {*} data
 */
export const getAd = (data) => {
  return request('/weixin/advert/getAdvert', 'POST', data)
}

/**
 * 修改广告图
 * @param {*} data
 */
export const updateAdImage = (data) => {
  return request('/weixin/advert/saveAdvert', 'POST', data)
}

/**
 * 获取酒吧管理员
 * @param {*} data
 */
export const getBarManagers = (data) => {
  return request('/weixin/hotel/getHotelManager', 'POST', data)
}

/**
 * 昵称搜索会员列表
 * @param {*} data
 */
export const getMembersByName = (data) => {
  return request('/weixin/members/getSubscribeMember', 'POST', data)
}

/**
 * 删除酒吧管理员
 * @param {*} data
 */
export const deleteManager = (data) => {
  return request('/weixin/hotel/delManager', 'POST', data)
}

/**
 * 添加酒吧管理员
 * @param {*} data
 */
export const addManager = (data) => {
  return request('/weixin/hotel/addManager', 'POST', data)
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

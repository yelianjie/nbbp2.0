import { dataURLtoBlob } from '@/utils/utils'
import Vue from 'vue'
import request from '@/utils/request'
const baseURL = process.env.NODE_ENV === 'production' ? require('../../config/prod.env').BASE_API : require('../../config/dev.env').BASE_API

/**
 * 添加url记录 关注后直接点击链接
*/
/* export const addWxMsg = (data) => {
  return request('/weixin/index/addWxMsg', 'POST', data)
} */

/**
 * 客户端登录
*/
export const validWinLogin = (data) => {
  return request('/weixin/index/validWinLogin', 'POST', data)
}

/**
 * 获取是否已经有token
*/
export const getHasToken = (data) => {
  return request('/weixin/login/getTokenId', 'POST', data)
}

/**
 * 获取微信配置
*/
export const getWxConfig = (data) => {
  return request('/weixin/index/getJsApiConfig', 'POST', data)
}

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
 * 获取酒吧收益和信息
 * @param {*} data
 */
export const getBarMoney = (data) => {
  return request('/weixin/hotel/getHotelMoney', 'POST', data)
}

/**
 * 获取酒吧的代理的收益和基本信息
 * @param {*} data
 */
export const getAgentBar = (data) => {
  return request('/weixin/agent/getAgentHotel', 'POST', data)
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
  return request('/weixin/manager/managerList', 'POST', data)
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
 * 保存百分比
 * @param {*} data
 */
export const updateRate = (data) => {
  return request('/weixin/hotel/updateRate', 'POST', data)
}

/**
 * 获取省市区数据
 */
export const getRegionData = () => {
  return request('/weixin/index/getRegion', 'POST')
}

/**
 * 根据城市获取酒吧列表
 * @param {*} data
 */
export const getBarsByCity = (data) => {
  return request('/weixin/hotel/getHotelList', 'POST', data)
}

/**
 * 获取酒吧基本信息、主题、礼物、时间
 * @param {*} data
 */
export const getBarAllInfo = (data) => {
  return request('/weixin/hotel/getHotelAllMsg', 'POST', data)
}

/**
 * 获取在线用户
 * @param {*} data
 */
export const getOnlines = (data) => {
  return request('/weixin/hotel/getOnlineMc', 'POST', data)
}

/**
 * 点赞
 * @param {*} data
 */
export const favoriteDo = (data) => {
  return request('/weixin/members/addFabulous', 'POST', data)
}

/**
 * 添加普通消息
 * @param {*} data
 */
export const addNormalMsg = (data) => {
  return request('/weixin/message/addMsg', 'POST', data)
}

/**
 * 添加霸屏打赏消息
 * @param {*} data
 */
export const addBpDsMsg = (data) => {
  return request('/weixin/order/addOrder', 'POST', data)
}

/**
 * 获取最新10条消息
 * @param {*} data
 */
export const getNewestMsg = (data) => {
  return request('/weixin/message/getNewestMsg', 'POST', data)
}

/**
 * 获取最新消息
 * @param {*} data
 */
export const getMaxMsg = (data) => {
  return request('/weixin/message/getMaxMsg', 'POST', data)
}

/**
 * 获取用户等级及等级说明
 */
export const getLevelInfo = () => {
  return request('/weixin/members/getMemberGradeInfo', 'POST')
}

/**
 * 绑定酒吧管理
 * @param {*} data
 */
export const bindBarManager = (data) => {
  return request('/weixin/hotel/bindPriManage', 'POST', data)
}

/**
 * 当前用户是否已关注
 */
export const isSubscribe = (data) => {
  return request('/weixin/members/isSubscribe', 'POST', data)
}

/**
 * 获取充值金额列表
*/
export const getCharges = () => {
  return request('/weixin/recharge/rechargeList')
}

/**
 * 提交订单
 * @param {*} data
 */
export const rechargePay = (data) => {
  return request('/weixin/recharge/jspay', 'POST', data)
}

/**
 * 直接支付
 * @param {*} data
 */
export const wxPay = (data) => {
  return request('/weixin/recharge/gwPay', 'POST', data)
}

/**
 * 兑换成牛角
 * @param {*} data
 */
export const exchangeToCoin = (data) => {
  return request('/weixin/members/exchangeMoney', 'POST', data)
}

/**
 * 微信提现
 * type = 1   普通用户提现
 * type = 2 + 酒吧id  商户针对酒吧提现
 * type = 3 + 酒吧id  代理针对酒吧提现
 * type = 4 + 酒吧id  酒吧管理针对酒吧提现
 * @param {*} data
 */
export const depositToCash = (data) => {
  return request('/weixin/recharge/wxTransfer', 'POST', data)
}

/**
 * 获取酒吧管理酒吧列表和总收益
*/
export const getBarManagerMoney = () => {
  return request('/weixin/hotel/getHotelManageMoney')
}

/**
 * 根据酒吧获取可提现余额
 * @param {*} data
 */
export const getTransferMoneyByBar = (data) => {
  return request('/weixin/hotel/getHotelTransferMoney', 'POST', data)
}

/**
 * 删除消息
 * @param {*} data
 */
export const deleteMsg = (data) => {
  return request('/weixin/hotel/delMsg', 'POST', data)
}

/**
 * 查询有没有开大屏幕
 * @param {*} data
 */
export const isOpenClient = (data) => {
  return request('/weixin/hotel/isOpenClient', 'POST', data)
}

/**
 * 解除绑定
 * @param {*} data
 */
export const releaseSupervise = (data) => {
  return request('/weixin/hotel/releaseSupervise', 'POST', data)
}

/**
 * 获取当前用户是否已经是酒吧管理
 */
export const isSupervise = () => {
  return request('/weixin/hotel/isSupervise', 'POST')
}

/**
 * 获取普通用户的充值记录
 * @param {*} data
 */
export const getRechargeList = (data) => {
  return request('/weixin/recharge/getRechargeList', 'POST', data)
}

/**
 * 获取普通用户的消费记录
 * @param {*} data
 */
export const getConsumeList = (data) => {
  return request('/weixin/recharge/getConsumeList', 'POST', data)
}

/**
 * 获取普通用户的收益记录
 * @param {*} data
 */
export const getIncomeList = (data) => {
  return request('/weixin/recharge/getIncomeList', 'POST', data)
}

/**
 * 获取普通用户的兑换记录
 * @param {*} data
 */
export const getExchangeList = (data) => {
  return request('/weixin/recharge/getExchangeList', 'POST', data)
}

/**
 * 获取普通用户的提现记录
 * @param {*} data
 */
export const getWithdrawList = (data) => {
  return request('/weixin/recharge/getWithdrawList', 'POST', data)
}

/**
 * 获取商家、代理用户针对酒吧的提现记录
 * @param {*} data
 */
export const getWithdrawListByHid = (data) => {
  return request('/weixin/recharge/getWithdrawListByHid', 'POST', data)
}

/**
 * 获取商家、代理用户针对酒吧的收益记录
 * @param {*} data
 */
export const getIncomeListByHid = (data) => {
  return request('/weixin/recharge/getIncomeListByHid', 'POST', data)
}

/**
 * 获取代理Code
 * @param {*} data
 */
export const getAgentCode = (data) => {
  return request('/weixin/hotel/getAgentCode', 'POST', data)
}

/**
 * 生成红包
 * @param {*} data
 */
export const createHb = (data) => {
  return request('/weixin/hongbao/createHb', 'POST', data)
}

/**
 * 抢红包
 * @param {*} data
 */
export const robHb = (data) => {
  return request('/weixin/hongbao/robHb', 'POST', data)
}

/**
 * 未抢完的红包列表
 * @param {*} data
 */
export const unFinishHbList = (data) => {
  return request('/weixin/hongbao/unFinishHbList', 'POST', data)
}

/**
 * 判断红包是否已领取
 * @param {*} data
 */
export const isRobByid = (data) => {
  return request('/weixin/hongbao/isRobByid', 'POST', data)
}

/**
 * 红包倒计时结束后请求下改变状态
 * @param {*} data
 */
export const isDjsOver = (data) => {
  return request('/weixin/hongbao/is_djs_over', 'POST', data)
}

/**
 * 获取红包领取列表
 * @param {*} data
 */
export const robHbMemberList = (data) => {
  return request('/weixin/hongbao/robHbMemberList', 'POST', data)
}

/**
 * 获取红包订单
 * @param {*} data
 */
export const getPacketOrder = (data) => {
  return request('/weixin/order/getNewOrder', 'POST', data)
}

/**
 * 获取红包信息
 * @param {*} data
 */
export const getHbInfo = (data) => {
  return request('/weixin/hongbao/getHbInfo', 'POST', data)
}

/**
 * 获取红包状态
 * @param {*} data
 */
export const getHbStatus = (data) => {
  return request('/weixin/hongbao/getHbStatus', 'POST', data)
}

/**
 * 获取删除的消息
 * @param {*} data
 */
export const getDelMsg = (data) => {
  return request('/weixin/hotel/getDelMsg', 'POST', data)
}

/**
 * 获取抽奖状态
 * @param {*} data
 */
export const canJoin = (data) => {
  return request('/weixin/chou/canJoin', 'POST', data)
}

/**
 * 抽奖报名
 * @param {*} data
 */
export const lotteryJoin = (data) => {
  return request('/weixin/chou/baoMing', 'POST', data)
}

/**
 * 拉黑
 * @param {*} data
 */
export const addBlack = (data) => {
  return request('/weixin/members/addBlack', 'POST', data)
}

/**
 * 黑名单列表
 * @param {*} data
 */
export const blackList = (data) => {
  return request('/weixin/members/blackList', 'POST', data)
}

/**
 * 解除黑名单
 * @param {*} data
 */
export const releaseBlack = (data) => {
  return request('/weixin/members/releaseBlack', 'POST', data)
}

/**
 * 获取管理员信息
 * @param {*} data
 */
export const getManagerInfo = (data) => {
  return request('/weixin/manager/getManagerInfo', 'POST', data)
}

/**
 * 更新管理员信息
 * @param {*} data
 */
export const updateManagerInfo = (data) => {
  return request('/weixin/manager/updateManagerInfo', 'POST', data)
}

/**
 * 获取权限列表
 * @param {*} data
 */
export const getFunction = (data) => {
  return request('/weixin/manager/getFunction', 'POST', data)
}

/**
 * 是否是黑名单
 * @param {*} data
 */
export const isBlack = (data) => {
  return request('/weixin/members/isBlack', 'POST', data)
}

/**
 * 判断管理员是否有添加管理/进入管理页面的权限
 * @param {*} data
 */
export const isSuperManager = (data) => {
  return request('/weixin/manager/isSuperManager', 'POST', data)
}

/**
 * 管理员是否可以进入商户中心
 * @param {*} data
 */
export const isAllowIn = (data) => {
  return request('/weixin/manager/isAllowIn', 'POST', data)
}

/**
 * 获取版本号
 * @param {*} data
 */
export const getNewVersion = (data) => {
  return request('/weixin/version/getNewVersion', 'POST', data)
}

/**
 * 查询本月剩余添加次数
 * @param {*} data
 */
export const restAmountManager = (data) => {
  return request('/weixin/manager/restAmountManager', 'POST', data)
}

/**
 * 查询本月是否能添加
 * @param {*} data
 */
export const isRest = (data) => {
  return request('/weixin/manager/isRest', 'POST', data)
}

/**
 * 获取管理员剩余霸屏次数
 * @param {*} data
 */
export const getRestScreenAmount = (data) => {
  return request('/weixin/manager/getRestScreenAmount', 'POST', data)
}

/**
 * 判断权限
 * @param {*} data
 */
export const isHaveFunction = (data) => {
  return request('/weixin/manager/isHaveFunction', 'POST', data)
}

/**
 * 商家后台歌曲上架
 * @param {*} data
 */
export const addSong = (data) => {
  return request('/weixin/diange/addSong', 'POST', data)
}

/**
 * 查询已上架歌曲
 * @param {*} data
 */
export const getSongs = (data) => {
  return request('/weixin/diange/idsOnShelvers', 'POST', data)
}

/**
 * 手动添加歌曲
 * @param {*} data
 */
export const manualAddSong = (data) => {
  return request('/weixin/diange/addSongShelvers', 'POST', data)
}

/**
 * 获取上架歌曲数量
 * @param {*} data
 */
export const getShelvesAmount = (data) => {
  return request('/weixin/diange/getShelvesAmount', 'POST', data)
}

/**
 * 保存商家点歌设置
 * @param {*} data
 */
export const merchantSetting = (data) => {
  return request('/weixin/diange/merchantSetting', 'POST', data)
}

/**
 * 获取商家点歌设置
 * @param {*} data
 */
export const getMerchantSetting = (data) => {
  return request('/weixin/diange/getMerchantSetting', 'POST', data)
}

/**
 * 点歌搜索歌曲
 * @param {*} data
 */
export const searchSong = (data) => {
  return request('/weixin/diange/searchSong', 'POST', data)
}

/**
 * 判断是否有点歌权限
 * @param {*} data
 */
export const isHaveRight = (data) => {
  return request('/weixin/diange/isHaveRight', 'POST', data)
}

/**
 * 判断是否可以点歌
 * @param {*} data
 */
export const canDianGe = (data) => {
  return request('/weixin/diange/canDianGe', 'POST', data)
}

/**
 * 点歌下单
 * @param {*} data
 */
export const addSongOrder = (data) => {
  return request('/weixin/diange/addSongOrder', 'POST', data)
}

/**
 * 本场已点
 * @param {*} data
 */
export const tonightOdrList = (data) => {
  return request('/weixin/diange/tonightOdrList', 'POST', data)
}

/**
 * 历史点歌列表
 * @param {*} data
 */
export const historyOdrList = (data) => {
  return request('/weixin/diange/historyOdrList', 'POST', data)
}

/**
 * 管理员标记是否已唱
 * @param {*} data
 */
export const isFinish = (data) => {
  return request('/weixin/diange/isFinish', 'POST', data)
}

/**
 * 获取上架歌曲列表
 * @param {*} data
 */
export const onShelvesList = (data) => {
  return request('/weixin/diange/onShelvesList', 'POST', data)
}

/**
 * 下架歌曲
 * @param {*} data
 */
export const underShelves = (data) => {
  return request('/weixin/diange/underShelves', 'POST', data)
}

/**
 * 判断是否可霸屏
 * @param {*} data
 */
export const canBp = (data) => {
  return request('/weixin/screen/canBp', 'POST', data)
}

/**
 * 上传图片

 */
export function uploadImage (base64, type, cb, flag = 0, isLogo = false) {
  const blob = dataURLtoBlob(base64, type)
  var xhr = new XMLHttpRequest()
  var formdata = new FormData()
  formdata.append('file', blob, 'image.png')
  formdata.append('flag', flag)
  if (isLogo) {
    formdata.append('type', 'logo')
  }
  xhr.open('post', baseURL + '/weixin/file_upload/uploadImg')
  xhr.setRequestHeader('tId', sessionStorage.getItem('tId'))
  xhr.onreadystatechange = function () {
    /* console.log('readyState' + xhr.readyState)
    console.log('status' + xhr.status) */
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText)
      if (response.code !== '301000') {
        var _textWidth = '10em'
        if (typeof response.result === 'string' && response.result.length > 10) {
          _textWidth = '18em'
        }
        Vue.$vux.toast.show({
          text: response.result,
          position: 'middle',
          type: 'text',
          time: 1500,
          width: _textWidth
        })
      } else {
        const res1 = {error: false, msg: '上传成功', res: response.result}
        cb(res1)
      }
    } else {
      const res2 = {error: true, msg: '上传失败'}
      cb(res2)
    }
  }
  xhr.send(formdata)
}

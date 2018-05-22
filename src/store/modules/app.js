// initial state
const namespaced = true

const state = {
  buyDialogInfo: {},
  direction: 'forward',
  fontSize: 50,
  hbCurInfo: {hb: {}},
  onlineVisible: false,
  onlineHbChose: [],
  scene: '',
  hbmount: 50,
  hbRobInfo: {},
  currentUserInfo: {},
  chargeVisible: false,
  chargeCallback: () => {},
  payType: 1 // 1=》牛角支付 2=》直接支付3=>充值购买
}

// getters
const getters = {
  buyDialogInfo: () => state.buyDialogInfo,
  direction: () => state.direction,
  fontSize: () => state.fontSize,
  hbCurInfo: () => state.hbCurInfo,
  hbRobInfo: () => state.hbRobInfo,
  currentUserInfo: () => state.currentUserInfo,
  payType: () => state.payType,
  chargeVisible: () => state.chargeVisible,
  chargeCallback: () => state.chargeCallback,
  onlineVisible: () => state.onlineVisible,
  onlineHbChose: () => state.onlineHbChose,
  scene: () => state.scene
}

// actions
const actions = {
  ChangeBuyDialogInfo ({commit, state}, data) {
    commit('CHANGE_BUY_DIALOG_INFO', data)
  }
}

// mutations
const mutations = {
  CHANGE_BUY_DIALOG_INFO (state, data) {
    state.buyDialogInfo = data
  },
  UPDATE_DIRECTION (state, direction) {
    state.direction = direction
  },
  SET_FONTSIZE (state, data) {
    state.fontSize = data
  },
  SET_IS_CHARGE (state, data) {
    state.buyDialogInfo.isCharge = data
  },
  SET_HB_CUR_INFO (state, data) {
    state.hbCurInfo = data
  },
  SET_HB_ROB_INFO (state, data) {
    state.hbRobInfo = data
  },
  SET_CURRENT_USER_INFO (state, data) {
    state.currentUserInfo = data
  },
  SET_PAY_TYPE (state, data) {
    state.payType = data
  },
  SET_CHARGEVISIBLE (state, data) {
    state.chargeVisible = data
  },
  SET_CHARGECALLBACK (state, data) {
    state.chargeCallback = data
  },
  SET_ONLINEVISIBLE (state, data) {
    state.onlineVisible = data
  },
  SET_ONLINESELECTED (state, data) {
    state.onlineHbChose = data
  },
  SET_FIELD (state, data) {
    state[data.field] = data.value
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

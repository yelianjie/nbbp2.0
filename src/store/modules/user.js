import { getMemberInfo, saveMemberInfo } from '@/api/'
const namespaced = true

const state = {
  userInfo: {},
  token: '',
  role: ['user'],
  isSub: false,
  subTicket: '',
  barManagerInfo: {}
}

// getters
const getters = {
  userInfo: () => state.userInfo,
  role: () => state.role,
  barManagerInfo: () => state.barManagerInfo,
  isSub: () => state.isSub,
  subTicket: () => state.subTicket
}

// actions
const actions = {
  async getUserInfo ({commit, state}, data) {
    try {
      let response = await getMemberInfo()
      commit('SET_USER_INFO', response.result)
      var role = ['user']
      if (response.result.isAgent > 0) {
        role.push('agent')
      }
      if (response.result.isMM > 0) {
        role.push('business')
      }
      if (response.result.isHMM > 0) {
        role.push('manager')
      }
      commit('SET_ROLE', role)
      return Promise.resolve(response.result)
    } catch (e) {

    }
  },
  async saveUserInfo ({commit, state}, data) {
    try {
      let response = await saveMemberInfo(data)
      // commit('SET_USER_INFO', response.result)
      return Promise.resolve(response.result)
    } catch (e) {

    }
  }
  /* async isSubscribe ({commit, state}, data) {
    try {
      let response = await isSubscribe()
      var isSub
      if (response.result === '已关注') {
        isSub = false
      } else {
        isSub = true
        commit('SET_SUBTICKET', response.result)
      }
      commit('SET_SUBSCRIBE', isSub)
    } catch (e) {
      // commit('SET_SUBSCRIBE', true)
    }
  } */
}

// mutations
const mutations = {
  SET_TOKEN (state, data) {
    state.token = data
  },
  SET_BAR_MANAGER (state, data) {
    state.barManagerInfo = data
  },
  SET_USER_INFO (state, data) {
    state.userInfo = data
  },
  SET_ROLE (state, data) {
    state.role = data
  },
  SET_USER_INFO_BALANCE (state, data) {
    state.userInfo.balance = data
  },
  SET_SUBSCRIBE (state, data) {
    state.isSub = data
  },
  SET_SUBTICKET (state, data) {
    state.subTicket = data
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

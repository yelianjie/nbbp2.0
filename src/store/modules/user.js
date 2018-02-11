import { getMemberInfo, saveMemberInfo } from '@/api/'
const namespaced = true

const state = {
  userInfo: {},
  token: '',
  role: ['user']
}

// getters
const getters = {
  userInfo: () => state.userInfo,
  role: () => state.role
}

// actions
const actions = {
  async getUserInfo ({commit, state}, data) {
    try {
      let response = await getMemberInfo()
      commit('SET_USER_INFO', response.result)
      if (response.result.isAgent > 0) {
        commit('SET_ROLE', ['user', 'agent'])
      }
      if (response.result.isMM > 0) {
        commit('SET_ROLE', ['user', 'business'])
      }
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
}

// mutations
const mutations = {
  SET_TOKEN (state, data) {
    state.token = data
  },
  SET_USER_INFO (state, data) {
    state.userInfo = data
  },
  SET_ROLE (state, data) {
    state.role = data
  },
  SET_USER_INFO_BALANCE (state, data) {
    state.userInfo.balance = data
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

import { getMemberInfo, saveMemberInfo } from '@/api/'
const namespaced = true

const state = {
  userInfo: {},
  token: ''
}

// getters
const getters = {
  userInfo: () => state.userInfo
}

// actions
const actions = {
  async getUserInfo ({commit, state}, data) {
    try {
      let response = await getMemberInfo()
      commit('SET_USER_INFO', response.result)
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
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

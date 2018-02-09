
const namespaced = true

const state = {
  currentUserInfo: {}
}

// getters
const getters = {
  currentUserInfo: () => state.currentUserInfo
}

// actions
const actions = {
}

// mutations
const mutations = {
  SET_NORMAL_MSG (state, {field, value}) {
    state.normalMsg[field] = value
  },
  SET_CURRENT_USER_INFO (state, data) {
    state.currentUserInfo = data
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

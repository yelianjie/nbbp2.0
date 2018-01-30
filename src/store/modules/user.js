// initial state
const namespaced = false

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
  ChangeBuyDialogInfo ({commit, state}, data) {
    commit('_ChangeBuyDialogInfo', data)
  }
}

// mutations
const mutations = {
  SET_TOKEN (state, data) {
    state.token = data
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

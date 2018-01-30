// initial state
const namespaced = false

const state = {
  buyDialogInfo: {}
}

// getters
const getters = {
  buyDialogInfo: () => state.buyDialogInfo
}

// actions
const actions = {
  ChangeBuyDialogInfo ({commit, state}, data) {
    commit('_ChangeBuyDialogInfo', data)
  }
}

// mutations
const mutations = {
  _ChangeBuyDialogInfo (state, data) {
    state.buyDialogInfo = data
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

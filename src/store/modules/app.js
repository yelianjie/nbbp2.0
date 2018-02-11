// initial state
const namespaced = true

const state = {
  buyDialogInfo: {},
  direction: 'forward'
}

// getters
const getters = {
  buyDialogInfo: () => state.buyDialogInfo,
  direction: () => state.direction
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
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

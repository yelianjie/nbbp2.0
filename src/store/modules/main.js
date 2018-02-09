
const namespaced = true

const state = {
  normalMsg: {},
  bpDsMsg: {}
}

// getters
const getters = {
  normalMsg: () => state.normalMsg,
  bpDsMsg: () => state.bpDsMsg
}

// actions
const actions = {
  setNormalMsg ({commit, state}, data) {
    commit('SET_NORMAL_MSG', data)
  }
}

// mutations
const mutations = {
  SET_NORMAL_MSG (state, {field, value}) {
    state.normalMsg[field] = value
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

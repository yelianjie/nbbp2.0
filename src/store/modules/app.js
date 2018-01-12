// initial state
const namespaced = true

const state = {
  msg: 'Hello, Vue!'
}

// getters
const getters = {
  msg: () => state.msg
}

// actions
const actions = {
  ChangeMsg ({commit, state}, data) {
    commit('ChaneMsg', 'Hello, Vue-cli!')
  }
}

// mutations
const mutations = {
  ChaneMsg (state, data) {
    state.msg = data
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import main from './modules/main'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    main
  }
})

store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
export default store

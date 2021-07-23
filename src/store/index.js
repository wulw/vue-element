import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [
    createPersistedState({
      key: 'vue-element',
      storage: window.sessionStorage,
      reducer: state => ({
        user: state.login.user
      })
    })
  ]
})

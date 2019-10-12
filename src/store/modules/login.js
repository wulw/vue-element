const state = {
  auth: null
}

const getters = {}

const mutations = {}

const actions = {
  // 设置用户信息
  setAuth (state, obj) {
    state.auth = obj;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

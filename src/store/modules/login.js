const state = {
  auth: {
    name: 'lywu6',
    password: '123456'
  }
}

const getters = {}

const mutations = {
  // 设置用户信息
  setAuth: (state, payload) => {
    state.auth = payload;
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

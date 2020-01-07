const state = {
  user: {
    id: '',
    name: 'lywu6',
    password: '123456'
  }
}

const getters = {}

const mutations = {
  // 设置用户信息
  setUser: (state, payload) => {
    state.user = payload;
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

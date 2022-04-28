const state = {
  user: {
    id: '',
    name: 'w_lw',
    password: '123456'
  },
  activeIndex: '1'
}

const getters = {}

const mutations = {
  // 设置用户信息
  setUser: (state, payload) => {
    state.user = payload;
  },
  // 设置菜单栏index
  setMenuIndex: (state, payload) => {
    state.activeIndex = payload;
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

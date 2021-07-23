import Vue from 'vue'

export default {
  setActiveIndex(state, payload) {
    Vue.set(state, 'activeIndex', payload)
  }
}

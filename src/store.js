import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    add(state, amount) {
      state.count += amount
    }
  },
  actions: {
    addAsync({ commit }, payload){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('add', payload.amount)
          resolve()
        }, 1000)
      })
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    countWithSuffix(state) {
      return `${state.count} 回`
    }
  },
  // Mutationは同期処理でなければならなず、Actionは非同期処理も可能
  // Mutationは状態の変更のみを行う
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  }
})

export const counter = {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    isPositive: state => {
      return state.count > 0
    }
  },
  // Mutationは同期処理でなければならなず、Actionは非同期処理も可能
  // Mutationは状態の変更のみを行う
  mutations: {
    increment(state) {
      state.count++
    },
    add (state, amount) {
      state.count += amount
    },
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
}

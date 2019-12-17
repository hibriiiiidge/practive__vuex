import Vue from 'vue'
import Vuex from 'vuex'
// import { counter } from './modules/counter.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    budget: "100",
    isBudgetActive: true
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
    setBudget(state, budget) {
      state.isBudgetActive = budget.length !== 0
      state.budget = budget
    },
  },
  actions: {
    addAsync({ commit }, payload){
      return new Promise(() => {
        setTimeout(() => {
          commit('add', payload.amount)
        }, 1000)
      })
    }
  }
})

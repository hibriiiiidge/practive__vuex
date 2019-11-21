<template>
  <div>
    <div>
      <p :class="countClass">{{ count }}</p>
    </div>
    <button @click="add">count up</button>
    <search-input-group
      @input=inputBudget
      @focus=focusBudget
      @blur=blurBudget
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
import SearchInputGroup from './SearchInputGroup'

export default {
  components: {
    SearchInputGroup
  },
  computed: {
    ...mapState([
      "count", "budget", "isBudgetActive"
    ]),
    ...mapGetters([
      "isPositive"
    ]),
    countClass() {
      return {
        'blue': this.isPositive
      }
    }
  },
  methods: {
    ...mapMutations([
      "increment", "setBudget", "setFocusBudget", "setBlurBudget"
    ]),
    ...mapActions([
      "addAsync"
    ]),
    add() {
      this.increment()
      this.addAsync({ amount: 1000 })
    },
    inputBudget(budget) {
      this.setBudget(budget);
    },
    focusBudget() {
      this.setFocusBudget();
    },
    blurBudget(budget) {
      this.setBlurBudget(budget);
    },
  }
}
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>

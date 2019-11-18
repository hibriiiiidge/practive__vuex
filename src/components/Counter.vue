<template>
  <div>
    <div>
      <p :class="countClass">{{ count }}</p>
    </div>
    <button @click="add">count up</button>
    <search-input-group
      :isBudgetActive=isBudgetActive
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
  data() {
    return {
      isBudgetActive: false,
    }
  },
  computed: {
    ...mapState([
      "count", "budget"
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
      "increment", "setBudget"
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
      this.isBudgetActive = true;
    },
    blurBudget(budget) {
      this.isBudgetActive = budget.length !== 0;
    },
  }
}
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>

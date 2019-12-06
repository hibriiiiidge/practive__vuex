<template>
  <div>
    <search-min-input
      :isBudgetActive=isBudgetActive
      :budget=budget
      :budgetType=budgetType.lower
      @input=inputBudget
      @focus=focusBudget
      @blur=blurBudget
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SearchMinInput from './SearchMinInput'

export default {
  components: {
    SearchMinInput
  },
  data() {
    return {
      budgetType: {
        "lower": 0,
        "higher": 1
      }
    }
  },
  computed: {
    ...mapState([
      "budget", "isBudgetActive"
    ]),
  },
  methods: {
    ...mapMutations([
      "setBudget", "setFocusBudget", "setBlurBudget"
    ]),
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

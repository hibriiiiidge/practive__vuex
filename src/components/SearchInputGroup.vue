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
import { mapState } from 'vuex';
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
    inputBudget(value) {
      this.$emit('input', value)
    },
    focusBudget() {
      this.$emit('focus')
    },
    blurBudget(value) {
      this.$emit('blur', value)
    }
  },
}
</script>

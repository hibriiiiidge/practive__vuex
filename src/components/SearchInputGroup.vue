<template>
  <div>
    <search-min-input
      :isBudgetActive=isBudgetActive
      :budget=budget
      :budgetType=budgetType.lower
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
  props: {
    isBudgetActive: {
      type: Boolean,
      default: false
    },
    isHigherBudgetActive: {
      type: Boolean,
      default: false
    },
    higherBudget: {
      type: String,
      default: ''
    }
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
      "budget",
    ]),
  },
  methods: {
    // inputBudget(value, budgetType) {
    //   this.$emit('input', value, budgetType)
    // },
    focusBudget() {
      this.$emit('focus')
    },
    blurBudget(value) {
      this.$emit('blur', value)
    }
  },
}
</script>

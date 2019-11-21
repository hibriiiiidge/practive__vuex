<template>
  <div>
    <span class="earch-form__yen-mark">¥</span>
    <input
      type="number"
      :class="'input-form--min' + [isBudgetActive ? '--inputted' : '' ]"
      :value=budget
      :placeholder=placeholder
      @input=onInput
      @focus=onFocusBudget
      @blur=onBlurBudget
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    budgetType: {
      type: Number,
      default: 1
    }
  },
  computed: {
    placeholder() {
      return this.budgetType === 0 ? '下限無し' : '上限無し'
    },
    ...mapState([
      "budget", "isBudgetActive"
    ]),
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
    onFocusBudget() {
      this.$emit('focus')
    },
    onBlurBudget(e) {
      this.$emit('blur', e.target.value)
    }
  }
}
</script>


<style scoped>
  .input-form--min {
    background: red;
  }
</style>

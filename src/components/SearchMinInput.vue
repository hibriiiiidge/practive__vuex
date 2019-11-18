<template>
  <div>
    <span class="earch-form__yen-mark">¥</span>
    <input
      type="number"
      :class="'input-form--min' + [isBudgetActive ? '--inputted' : '' ]"
      :value=budget
      :placeholder=placeholder
      @focus=onFocusBudget
      @blur=onBlurBudget
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    isBudgetActive: {
      type: Boolean,
      default: false
    },
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
      "budget",
    ]),
  },
  methods: {
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
  .input-form--min--inputted {
    background: red;
  }
</style>

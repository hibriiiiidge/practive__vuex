<template>
  <div>
    <span>¥</span>
    <input
      type="number"
      :class="'input-form--min' + [isBudgetActive ? '--inputted' : '' ]"
      :value=budget
      @input=onInput
      @focus=onFocusBudget
      @blur=onBlurBudget
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
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

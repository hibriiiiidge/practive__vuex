<template>
  <div>
    <search-min-input
      @input=onInput
      @focus=onFocusBudget
      @blur=onBlurBudget
    />
  </div>
</template>

<script>
import SearchMinInput from './SearchMinInput'

export default {
  components: {
    SearchMinInput
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    onFocusBudget() {
      this.$emit('focus')
    },
    onBlurBudget(value) {
      this.$emit('blur', value)
    }
  }
}
</script>

<template>
  <div class="child">
    <div>子3</div>
    価格項目
    <grand-child3
      :isBudgetActive=isBudgetActive
      :budget=budget
      @input=onInput
    />
  </div>
</template>

<script>
import GrandChild3 from './GrandChild3'

export default {
  components: {
    GrandChild3
  },
  props: {
    isBudgetActive: {
      type: Boolean,
      default: false
    },
    budget: {
      type: String,
      default: ''
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
  }
}
</script>

<style>
.child {
  border: 1px solid blue;
}
</style>

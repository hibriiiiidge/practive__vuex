<template>
  <div class="child">
    <div>子</div>
    価格項目
    <grand-child1
      @input=onInput
    />
  </div>
</template>

<script>
import GrandChild1 from './GrandChild1'

export default {
  components: {
    GrandChild1
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

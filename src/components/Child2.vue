<template>
  <div class="child">
    <div>子2</div>
    価格項目
    <grand-child2
      @input=onInput
    />
  </div>
</template>

<script>
import GrandChild2 from './GrandChild2'

export default {
  components: {
    GrandChild2
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

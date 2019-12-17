<template>
  <div class="children">
    <div>子</div>
    価格項目
    <search-min-input
      @input=onInput
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
  }
}
</script>

<style>
.children {
  border: 1px solid blue;
}
</style>

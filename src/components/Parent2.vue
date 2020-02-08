<template>
  <div class="parent">
    <dir>親2</dir>
    <child2
      @input=inputBudget
    />
  </div>
</template>

<script>
import Child2 from './Child2'

export default {
  components: {
    Child2,
  },
  methods: {
    inputBudget(value) {
      this.$store.commit('setBudget', value);
    }
  }
}
</script>

<style scoped>
.parent {
  border: 1px solid red;
}
</style>

<template>
  <div>
    <div>
      <h1>Counter without map helper</h1>
      <p :class="countClass">{{ count }}</p>
    </div>
    <button @click="add">count up</button>
  </div>
</template>

<script>
// import store from '../store'

export default {
  computed: {
    count () {
        return this.$store.state.count
        // store を import すれば ↓ ともかける
        // return store.state.count
    },
    countClass () {
      return {
        'blue': this.$store.getters.isPositive
      }
    }
  },
  methods: {
    add () {
      this.$store.commit('increment');
      this.$store.dispatch('addAsync', { amount: 1000 });
    },
  }
}
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>

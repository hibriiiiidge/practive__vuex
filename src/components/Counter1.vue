<template>
  <div>
    <div>
      <h1>Counter with map helper</h1>
      <p :class="countClass">{{ count }}</p>
    </div>
    <button @click="add">count up</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([
      "count"
    ]),
    ...mapGetters([
      "isPositive"
    ]),
    countClass() {
      return {
        'blue': this.isPositive
      }
    }
  },
  methods: {
    ...mapMutations([
      "increment"
    ]),
    ...mapActions([
      "addAsync"
    ]),
    add() {
      this.increment()
      this.addAsync({ amount: 1000 })
    },
  }
}
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>

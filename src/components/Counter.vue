<template>
  <div>
    <div>
      <p :class="countClass">{{ count }}</p>
    </div>
    <button @click="add">count up</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { mapActions } from 'vuex';

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
    }
  }
}
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>

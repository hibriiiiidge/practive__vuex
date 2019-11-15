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
    // this.count が store.state.count にマッピング
    // count () {
    //   return store.state.count
    // }
    ...mapState({
      count: state => state.counter.count
    }),
    // countClass() {
    //   return {
    //     'blue': this.$store.getters.isPositive,
    //   }
    // }
    ...mapGetters({
      isPositive: 'counter/isPositive',
    }),
    countClass() {
      return {
        'blue': this.isPositive
      }
    }
  },
  methods: {
    ...mapMutations({
      // this.increment() が this.$store.commit('increment')にマッピング
      // 'increment'
      increment: 'counter/increment',
    }),
    ...mapActions({
      // this.addAsync() が this.$store.dispatch('addAsync')にマッピング
      // 'addAsync'
      addAsync: 'counter/addAsync'
    }),
    add() {
      // this.$store.commit('increment')
      this.increment()
      // this.$store.dispatch('addAsync', { amount: 1000 })
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

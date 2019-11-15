<template>
  <div>
    <div>
      {{ showCounter }}
    </div>
    <button @click="add">count up</button>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';
import { mapMutations } from 'vuex';


export default {
  computed: {
    // this.count が store.state.count にマッピング
    // count () {
    //   return store.state.count
    // }
    // ...mapState([
    //   "count"
    // ]),
    showCounter() {
      return this.$store.getters.countWithSuffix
    }
  },
  methods: {
    ...mapMutations([
      // this.increment() が this.$store.commit('increment')にマッピング
      'increment'
    ]),
    add() {
      // this.$store.commit('increment')
      this.increment()
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>

<style scoped>

</style>

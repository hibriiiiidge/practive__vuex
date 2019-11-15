<template>
  <div>
    <div>
      {{ count }}
    </div>
    <button @click="add">count up</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: {
    // this.count が store.state.count にマッピング
    // count () {
    //   return store.state.count
    // }
    ...mapState([
      "count"
    ]),
  },
  methods: {
    ...mapMutations([
      // this.increment() が this.$store.commit('increment')にマッピング
      'increment'
    ]),
    ...mapActions([
      // this.addAsync() が this.$store.dispatch('addAsync')にマッピング
      'addAsync'
    ]),
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

</style>

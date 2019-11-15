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

export default {
  computed: {
    ...mapState([
      "count"
    ])
  },
  methods: {
    ...mapMutations([
      // this.increment() が　this.$store.commit('increment')　にマッピング
      'increment'
    ]),
    add() {
      // this.$store.commit('increment')
      this.increment()
      this.$store.dispatch('addAsync', { amount: 1000 })
    }
  }
}
</script>

<style scoped>

</style>

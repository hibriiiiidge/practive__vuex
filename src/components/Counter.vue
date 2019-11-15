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
    // add () {
    //   this.$store.commit('increment')
    // }
    ...mapMutations([
      'increment'
    ]),
    add() {
      this.increment()
    }
  }
}
</script>

<style scoped>

</style>

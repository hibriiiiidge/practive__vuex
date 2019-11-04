<template>
  <div>
    <div>
      {{ count }}
    </div>
    <button @click="add">count up</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      "count"
    ])
  },
  methods: {
    add () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>
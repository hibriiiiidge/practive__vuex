<template>
  <div>
    <div>
      {{ count }}
    </div>
    <button @click="increment">count up</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {

    }
  }
}
</script>
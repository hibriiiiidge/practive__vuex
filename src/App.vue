<template>
  <div id="app">
    <div>
      {{ count }}
    </div>
    <button @click="increment">count up</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

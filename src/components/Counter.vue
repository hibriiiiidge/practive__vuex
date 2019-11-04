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
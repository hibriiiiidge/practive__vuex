<template>
  <div id="app">
    <counter></counter>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import store from './store.js'

export default {
  name: 'app',
  store,
  components: {
    Counter
  }
}
</script>

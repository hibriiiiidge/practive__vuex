<template>
  <div class="grandchild">
    <div>孫2</div>
    <span>¥</span>
    <input
      type="number"
      :class="'input-form--min' + [isBudgetActive ? '--inputted' : '' ]"
      :value=budget
      @input=onInput
    />
    <p>
      {{ budget }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    budget() {
      return this.$store.state.budget
    },
    isBudgetActive(){
      return this.$store.state.isBudgetActive
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
    },
  }
}
</script>

<style scoped>
.grandchild {
  border: 1px solid green;
}

.input-form--min {
  background: red;
}
</style>

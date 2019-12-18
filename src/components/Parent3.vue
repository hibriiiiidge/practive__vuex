<template>
  <div class="parent">
    <dir>親3</dir>
    <child3
      :isBudgetActive=isBudgetActive
      :budget=budget
      @input=inputBudget
    />
  </div>
</template>

<script>
import Child3 from './Child3'

export default {
  components: {
    Child3,
  },
  data() {
    return {
      budget: "100",
      isBudgetActive: true
    }
  },
  methods: {
    inputBudget(value) {
      this.budget = value
      this.isBudgetActive = this.budget.length !== 0
    }
  }
}
</script>

<style scoped>
.parent {
  border: 1px solid red;
}
</style>

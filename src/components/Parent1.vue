<template>
  <div class="parent">
    <dir>親</dir>
    <children1
      :isBudgetActive=isBudgetActive
      :budget=budget
      @input=inputBudget
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Children1 from './Children1'

export default {
  components: {
    Children1,
  },
  computed: {
    ...mapState([
      "budget", "isBudgetActive"
    ]),
  },
  methods: {
    ...mapMutations([
      "setBudget"
    ]),
    inputBudget(budget) {
      this.setBudget(budget);
    },
  }
}
</script>

<style scoped>
.parent {
  border: 1px solid red;
}
</style>

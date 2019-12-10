<template>
  <div>
    <children1
      :isBudgetActive=isBudgetActive
      :budget=budget
      @input=inputBudget
      @focus=focusBudget
      @blur=blurBudget
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
      "setBudget", "setFocusBudget", "setBlurBudget"
    ]),
    inputBudget(budget) {
      this.setBudget(budget);
    },
    focusBudget() {
      this.setFocusBudget();
    },
    blurBudget(budget) {
      this.setBlurBudget(budget);
    },
  }
}
</script>

<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <meal
        v-for="meal in meals"
        :key="meal.idMeal"
        :meal="meal"
        :data="meal.idMeal"
      />
    </b-row>
  </b-container>
</template>

<script>
import Meal from "./Meal.vue";
export default {
  components: { Meal },
  props: {
    meals: Array,
  },
};
</script>

<style>
</style>
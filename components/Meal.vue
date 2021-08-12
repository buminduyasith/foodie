<template>
  <b-col cols="4">
    <b-card
      :title="meal.strMeal"
      :img-src="meal.strMealThumb"
      :img-alt="meal.strMeal"
      img-top
      tag="article"
      style="max-width: 20rem; height: 380px"
      class="mb-2 cuscard"
    >
      <b-button
        href="#"
        style="width: 100%; margin-top: 10px; margin-bottom: 10px"
        variant="primary"
        @click="openCategory"
        >Buy</b-button
      >
    </b-card>
  </b-col>
  <!-- end -->
</template>

<script>
export default {
  props: {
    meal: Object,
  },
};
</script>

<style scoped>
img {
  height: 200px !important;
  object-fit: cover;
}
</style>

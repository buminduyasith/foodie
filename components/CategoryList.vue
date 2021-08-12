<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <category
        v-for="catergory in categories"
        :key="catergory.idCategory"
        :catergory="catergory"
      />
    </b-row>
  </b-container>
</template>

<script>
import Category from "./Category.vue";
export default {
  components: { Category },
  //   props: {
  //     'categories',
  //   },
  props: ["categories"],
  mounted() {
    console.log(this.categories);
  },
};
</script>

<style>
</style>
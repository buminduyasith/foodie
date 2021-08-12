<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col cols="4" v-for="(catergory, index) in categories" :key="index">
        <category />
      </b-col>
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
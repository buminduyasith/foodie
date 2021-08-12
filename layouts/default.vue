<template>
  <div>
    <nav-bar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: { NavBar },
  mounted() {
    console.log("navbar");
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h1 v-for="(items, index) in items" :key="index">hi</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  async asyncData({ params, $axios, store }) {
    await store.dispatch("getItemsByCategory", params.category);
  },

  computed: {
    ...mapGetters(["items"]),
  },
  methods: {},
};
</script>

<style>
</style>
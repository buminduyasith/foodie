<template>
  <div>
    <meals :meals="items" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Meals from "~/components/Meals.vue";
export default {
  components: { Meals },
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
<template>
  <div>
    <category-list :categories="categories" />
  </div>
</template>

<script>
import CategoryList from "~/components/CategoryList.vue";
import NavBar from "~/components/NavBar.vue";
import { mapGetters } from "vuex";
export default {
  components: { NavBar, CategoryList },

  async mounted() {
    console.log("run" + process.env.DB_HOST_SPACE);
    this.$store.dispatch("getCategories");
  },
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>

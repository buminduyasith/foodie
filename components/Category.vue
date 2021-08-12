<template>
  <b-col cols="4">
    <b-card
      :title="catergory.strCategory"
      :img-src="catergory.strCategoryThumb"
      :img-alt="catergory.strCategory"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 cuscard"
    >
      <b-card-text>
        {{ textTrucated }}
      </b-card-text>

      <b-button href="#" variant="primary" @click="openCategory">Open</b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    catergory: Object,
  },
  mounted() {
    // console.log(this.catergory.strCategoryThumb);
  },
  computed: {
    textTrucated: function () {
      if (this.catergory.strCategoryDescription.length < 100)
        return this.catergory.strCategoryDescription;
      return this.catergory.strCategoryDescription.substring(0, 100) + "...";
    },
  },
  methods: {
    // ...mapActions(["getItemsByCategory"]),
    openCategory() {
      // alert("done");
      this.$router.push("/products/" + this.catergory.strCategory);
    },
  },
};
</script>

<style>
</style>
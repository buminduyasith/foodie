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

      <b-button
        href="#"
        variant="primary"
        @click="getItemsByCategory(catergory.strCategory)"
        >Open</b-button
      >
    </b-card>
  </b-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    catergory: Object,
  },
  mounted() {
    console.log(this.catergory.strCategoryThumb);
  },
  computed: {
    textTrucated: function () {
      if (this.catergory.strCategoryDescription.length < 100)
        return this.catergory.strCategoryDescription;
      return this.catergory.strCategoryDescription.substring(0, 100) + "...";
    },
  },
  methods: {
    ...mapActions(["getItemsByCategory"]),
  },
};
</script>

<style>
</style>
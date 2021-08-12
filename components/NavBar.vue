<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Foodie</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <cart-counter />
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CartCounter from "./CartCounter.vue";
export default {
  components: { CartCounter },
};
</script>

<style>
</style>
<template>
  <div v-if="isSecondPage" class="header">
    <h1>Weight Room</h1>
    <h2>Below is how busy the weight rooms are.</h2>
  </div>
  <router-link v-if="isSecondPage" to="/" class="back">
    <div>
      Back
    </div>
  </router-link>
  <div class="weightroombackground">
      <div v-if="isSecondPage" class="content">
        <h1>This is Another Page!</h1>
        <p>This is my second page.</p>
        <p>Average Weight room Rating: {{ averageRating }}</p>
        <!-- Other content for the second page -->
      </div>
      <div class="blur-background"></div>
      <router-view></router-view>
    </div>
  </template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'WeightRoom',
    computed: {
      isSecondPage() {
        return this.$route.path === '/second-page';
      },
      ...mapGetters('Weight-room', ['averageRating']), // Use the getter from the 'gym' module
    },
  };
  </script>

<!--CSS Link-->

<style scoped>

@import './Weightroom.css';

</style>
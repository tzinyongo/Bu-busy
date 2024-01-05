<!-- src/App.vue -->
<template>
  <div id="app">
    <router-link v-if="isThirdPage" to="/" class="back">
      <div>
        Back
      </div>
    </router-link>
    <div v-if="isThirdPage" class="content">
      <h1></h1>
      <p></p>
      <!-- Other content for the third page -->
    </div>
    <router-view />
    <RateFacility v-if="isThirdPage && isSurveyVisible" />
  </div>
</template>

<script>
import RateFacility from '@/components/RateFacility.vue';

export default {
  name: 'ThirdPage',
  components: {
    RateFacility,
  },
  computed: {
    isThirdPage() {
      return this.$route.path === '/third-page';
    },
    isSurveyVisible() {
      // You can conditionally show the survey based on certain criteria
      return true;
    },
  },
};
</script>

<style scoped>
.back {
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  background-color: grey;
  text-align: center;
  text-decoration: none;
  color: inherit;
  border-radius: 5px;
  padding: 5px 10px;
}

.content {
  margin-top: 40px; /* Adjusted margin-top */
  margin-left: 10px;
}
</style>

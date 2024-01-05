<template>
  <div>
    <router-link v-if="isSecondPage" to="/" class="back">
      <div>
        Back
      </div>
    </router-link>
    <div v-if="isSecondPage" class = "content">
      <h1>This is Another Page!</h1>
      <p>This is my second page.</p>
      <p>Average Weight room Rating: {{ averageRating }}</p>
      <!-- Other content for the second page -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'AnotherPage',
  computed: {
    isSecondPage() {
      return this.$route.path === '/another-page';
    },
    ...mapGetters('Weight-room', ['averageRating']), // Use the getter from the 'gym' module
    },
  
};
</script>

<style scoped>
.back{
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

.content{
  margin-top: 40px; /* Adjusted margin-top */
  margin-left: 10px; 
}

</style>
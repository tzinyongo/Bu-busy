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
.back {
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: rgba(12, 12, 12, 0.4); /* Subtle transparent gray */
  border: 2px solid rgba(128, 128, 128, 0.5); /* Slightly transparent border */
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease, border 0.3s ease;
}

.back:hover {
  background-color: rgba(169, 169, 169, 0.6); /* Darker gray on hover */
  border: 2px solid rgba(128, 128, 128, 0.7); /* Darker border on hover */
  transform: scale(1.05); /* Slight scale on hover for depth effect */
  cursor: pointer;
}

.content {
  margin-top: 60px;
  margin-left: 20px;
}
</style>


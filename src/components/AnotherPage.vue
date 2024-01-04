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
      <p>Average Gym Rating: {{ getAverageRating('gym') }}</p>
      <p>Average Courts Rating: {{ getAverageRating('courts') }}</p>
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
    isThirdPage() {
      return this.$route.path === '/third-page';
    },
    ...mapGetters(['averageRating']),
  },
  methods: {
    getAverageRating(section) {
      return this.averageRating(section).toFixed(2);
    },
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
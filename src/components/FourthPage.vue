<template>
  <div>
    <router-link v-if="isFourthPage" to="/" class="back">
      <div>
        Back
      </div>
    </router-link>
    <div v-if="isFourthPage" class = "content">
      <h1>This is Another Page!</h1>
      <p>This is my Fourth page.</p>
      <!-- Other content for the second page -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AnotherPage',
  computed: {
    isFourthPage() {
      return this.$route.path === '/fourth-page';
    }
  }
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
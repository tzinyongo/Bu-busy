<template>
  <div id="app">
    <router-view v-if="isRootPage"></router-view>
    <router-link v-if="isRootPage" to="/another-page" class="gym-info-box">
      <div>
        <h1>Weight Room</h1>
        <p>
          Welcome to our school's gym! Check out the facilities and enjoy your workout.
        </p>
        Click me to go to another page
      </div>
    <router-view v-if="isRootPage"></router-view>
    <router-link v-if="isRootPage" to="/third-page" class="evaluate">
      <div> 
        <h1> Evaluate </h1>
      </div>
    </router-link>
    </router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isRootPage() {
      return this.$route.path === '/';
    }
  }
  
};
</script>

<style>
.gym-info-box {
  display: block;
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
}

.evaluate{
  position: absolute;
  bottom: 10px;
  display: block;
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
}
.gym-info-box:hover {
  background-color: #bbb;
  cursor: pointer;
}
</style>

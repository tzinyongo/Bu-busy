<template>
  <div id="app">
    <div class="header">
      <h1>BU-Busy</h1>
    </div>

    <router-view v-if="isRootPage"></router-view>

    <router-link v-if="isRootPage" to="/another-page" class="gym-info-box">
      <div>
        <h1>Weight Room</h1>
        <p>
          Welcome to our school's gym! Check out the facilities and enjoy your workout.
        </p>
        Click me to go to another page
      </div>
    </router-link>

    <router-view v-if="isRootPage"></router-view>
    <router-link v-if="isRootPage" to="/fourth-page" class="courts">
      <div> 
        <h1> Courts </h1>
      </div>
    </router-link>

    <router-view v-if="isRootPage"></router-view>
    <router-link v-if="isRootPage" to="/third-page" class="evaluate">
      <div> 
        <h1> Rate our Facility </h1>
      </div>
    
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
</script >

<style scoped>
.header {
  background-color:none; /* Green background color for the header */
  padding: 20px;
  text-align: center;

}

.gym-info-box {
  display: inline-block;
  display: block;
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  padding: 5px 10px; 
  margin-bottom: 20px;
}
.gym-info-box:hover {
  background-color: #bbb;
  cursor: pointer;
}
.evaluate{
  display: block;
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  padding: 5px 10px; 
  margin-bottom: 20px;
  
}
.evaluate:hover{
  background-color: #bbb;
  cursor: pointer;
}

.courts{
  display: block;
  background-color: #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  padding: 5px 10px; 
  margin-bottom: 20px;
}

.courts:hover{
  background-color: #bbb;
  cursor: pointer;
}



</style>

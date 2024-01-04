<template>
  <div id="app" class="flex-container">
    <div class="header">
      <h1>BU-Busy</h1>
    </div>

    <div class="box-container">
      <!-- Router Links -->
      <router-link v-if="isRootPage" to="/another-page" class="gym-info-box">
        <div>
          <h1>Weight Room</h1>
          <p>Welcome to our school's gym! Check out the facilities and enjoy your workout.</p>
          Click me to go to another page
        </div>
      </router-link>

      <router-link v-if="isRootPage" to="/fourth-page" class="courts">
        <div>
          <h1>Courts</h1>
          <p>Check the business on the courts of our BU Fitrec</p>
          Click me to go to another page
        </div>
      </router-link>

      <router-link v-if="isRootPage" to="/third-page" class="evaluate">
        <div>
          <h1>Rate our Facility</h1>
        </div>
      </router-link>
    </div>

    <!-- Router Views -->
    <router-view v-if="isRootPage"></router-view>
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

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px; /* Optional: Add some margin between header and boxes */
}

.header {
  background-color: none;
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




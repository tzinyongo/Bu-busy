<template>
  <div id="app" class="flex-container">
    <!-- Header Section -->
    <div class="header">
      <h1>BU-Busy</h1>
      <h2>
        This is where you can find how busy the gym is!
      </h2>
    </div>

    <!-- Box Container Section -->
    <div class="box-container">
      <!-- Router Links -->
      <router-link v-if="isRootPage" to="/another-page" class="gym-info-box">
        <div>
          <h1>Weight Room</h1>
          <p>Welcome to our school's gym! Check out the facilities and enjoy your workout.</p>
          <span>Click me to go to another page</span>
        </div>
      </router-link>

      <router-link v-if="isRootPage" to="/fourth-page" class="courts">
        <div>
          <h1>Courts</h1>
          <p>Check the business on the courts of our BU Fitrec</p>
          <span>Click me to go to another page</span>
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
    },
  },
};
</script>

<style scoped>
/* General Styles */
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; /* Light background color */
}

.box-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin: 20px 0;
}

/* Header Styles */
.header {
  background-color: #ecf0f1; /* Light gray background */
  color: #2c3e50; /* Dark gray text */
  padding: 20px;
  text-align: center;
}

/* Gym Info Box Styles */
.gym-info-box,
.evaluate,
.courts {
  flex: 0 0 calc(33.33% - 20px);
  background-color: #fff; /* White background */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: #3498db; /* Light blue text */
  transition: transform 0.2s ease, background-color 0.3s ease;
  margin-bottom: 20px;
}

.gym-info-box:hover,
.evaluate:hover,
.courts:hover {
  transform: scale(1.05); /* Enlarge only on hover */
  background-color: #ecf0f1; /* Light gray background on hover */
  color: #2c3e50; /* Dark gray text on hover */
  cursor: pointer;
}

/* Heading Styles */
.gym-info-box h1,
.evaluate h1,
.courts h1 {
  margin-bottom: 10px;
  color: #3498db; /* Light blue text */
}

/* Paragraph Styles */
.gym-info-box p,
.evaluate p,
.courts p {
  color: #7f8c8d; /* Light gray text */
  margin-bottom: 15px;
}

/* Span Styles */
.gym-info-box span,
.courts span {
  display: block;
  color: #3498db; /* Light blue text */
  font-weight: bold;
}

</style>
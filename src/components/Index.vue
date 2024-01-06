<template>
  <div class="app flex-container" :class="{ isRootPage: isRootPage }" >
    <!-- Header Section -->
    <div class="header">
      <h1>Busy-BU</h1>
      <h2>
        This is where you can find how busy the FitRec is!
      </h2>
    </div>

    <!-- Box Container Section -->
    <div class="box-container">
      <!-- Router Links -->
      <router-link v-if="isRootPage" to="/second-page" class="gym-info-box">
        <div>
          <h1>Weight Room</h1>
          <p>Welcome to the Weight room! Check out the facilities and enjoy your workout.</p>
        </div>
      </router-link>

      <router-link v-if="isRootPage" to="/fourth-page" class="courts">
        <div>
          <h1>Courts</h1>
          <p>Check the business on the courts of our BU Fitrec</p>
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
    background-color: rgba(12, 12, 12, 0); /* Subtle transparent gray */
  }
  
  .app {
    position: relative;
  }
  
  /* Modified: Add background image only on the root page */
  .app::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/3/33/BU_Fitrec.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(10px); /* Adjust the blur radius as needed */
    z-index: -1;
    /* Use v-if to conditionally apply the background only on the root page */
    display: none;
  }
  
  /* Added: Show the background only on the root page */
  .app.isRootPage::before {
    display: block;
  }
  
  /* Box Container Section */
  .box-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    margin: 20px 0;
  }
  
  /* Header Styles */
  .header {
    background-color: rgba(12, 12, 12, 0.4); /* Subtle transparent gray */
    color: #ffffff; /* Dark gray text */
    padding: 20px;
    text-align: center;
  }
  
  /* Gym Info Box Styles */
  .gym-info-box,
  .evaluate,
  .courts {
    flex: 0 0 calc(33.33% - 20px);
    background-color: rgba(12, 12, 12, 0.4); /* Subtle transparent gray */
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    color: #ffffff; /* Light blue text */
    transition: transform 0.2s ease, background-color 0.3s ease;
    margin-bottom: 20px;
  }
  
  .gym-info-box:hover,
  .evaluate:hover,
  .courts:hover {
    transform: scale(1.05); /* Enlarge only on hover */
    background-color: #1f1f1fae; /* Light gray background on hover */
    color: #2c3e50; /* Dark gray text on hover */
    cursor: pointer;
  }
  
  /* Heading Styles */
  .gym-info-box h1,
  .evaluate h1,
  .courts h1 {
    margin-bottom: 10px;
    color: #ffffff; /* Light blue text */
  }
  
  /* Paragraph Styles */
  .gym-info-box p,
  .evaluate p,
  .courts p {
    color: #c0c0c0; /* Light gray text */
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
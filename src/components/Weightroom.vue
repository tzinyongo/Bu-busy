<template>
  <div v-if="isSecondPage" class="header">
    <h1>Weight Room</h1>
    <h2>Below is how busy the weight rooms are.</h2>
  </div>
  <router-link v-if="isSecondPage" to="/" class="back">
    <div>
      Back
    </div>
  </router-link>
  <div class="weightroombackground">
      <div v-if="isSecondPage" class="content1">
        <h1>This is Another Page!</h1>
        <p>This is my second page.</p>
        <p>Average Weight room Rating: {{ averageRating }}</p>
        <!-- Other content for the second page -->
      </div>
      <div class="blur-background"></div>
      <router-view></router-view>
    </div>
  </template>

<script>
  import axios from 'axios'; 
  export default {
    name: 'WeightRoom',
    data(){
    return {
      averageRating:0,
    };
  },
    computed: {
      isSecondPage() {
        return this.$route.path === '/second-page';
      },
      //...mapGetters('Weight-room', ['averageRating']), // Use the getter from the 'gym' module
    },
    methods:{
    async fetchAverageRating(){
      try{
        const response = await axios.get('http://localhost:3000/api/averageRating');
        if(!response.ok)
        {
          throw new Error('HTTP error');
        }
        console.log('Response:', response); // Log the entire response object
        this.averageRating = response.data.averageRating;
      }catch(error){
        console.error('Error fetching average rating: ', error);
      }
    },
  },
  mounted(){
    if(this.isSecondPage){
      this.fetchAverageRating();
      //fetch average rating every hour
    setInterval(() => {
      this.fetchAverageRating();

    }, 3600000);
    } 
  },
  };
  </script>

<!--CSS Link-->

<style scoped>

@import './Weightroom.css';

</style>
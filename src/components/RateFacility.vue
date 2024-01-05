<template>
    <div>
      <h2 v-if="!submitted">Rate Our Facility</h2>
      <div v-if="!submitted">
        <label>
          Where are you currently?
          <div>
            <input type="radio" id="gym" value="gym" v-model="section" />
            <label for="gym">Weight room</label>
          </div>
          <div>
            <input type="radio" id="courts" value="courts" v-model="section" />
            <label for="courts">Courts</label>
          </div>
        </label>
        <br />
        <label>
          What would you rate it 1-5?
          <div>
            <input type="radio" id="rating1" value="1" v-model="rating" />
            <label for="rating1">1</label>
          </div>
          <div>
            <input type="radio" id="rating2" value="2" v-model="rating" />
            <label for="rating2">2</label>
          </div>
          <div>
            <input type="radio" id="rating3" value="3" v-model="rating" />
            <label for="rating3">3</label>
          </div>
          <div>
            <input type="radio" id="rating4" value="4" v-model="rating" />
            <label for="rating4">4</label>
          </div>
          <div>
            <input type="radio" id="rating5" value="5" v-model="rating" />
            <label for="rating5">5</label>
          </div>
        </label>
        <br />
        <button @click="submitRating">Submit</button>
      </div>
      <div v-if="submitted">
        <p>Thank you for submitting!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        section: 'gym',
        rating: '1',
        submitted: false,
      };
    },
    methods: {
      submitRating() {
        this.$store.dispatch('submitRating', {
          section: this.section,
          rating: parseInt(this.rating),
        });
        this.resetForm();
        this.submitted = true;
        this.$router.push('/');
      },
      resetForm() {
        this.section = 'gym';
        this.rating = '1';
      },
    },
  };
  </script>

<style scoped>
 .back {
  position: absolute;
  top: 20px;
  left: 20px; /* Adjusted left position to move it to the top left corner */
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
</style>
  
  
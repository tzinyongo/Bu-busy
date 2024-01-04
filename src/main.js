import { createApp } from 'vue';
import App from './components/App.vue';
import AnotherPage from './components/AnotherPage.vue';
import ThirdPage from './components/ThirdPage.vue';
import FourthPage from './components/FourthPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store'; // Import the modular Vuex store
import 'vue';


// Define your routes
const routes = [
  { path: '/third-page', component: ThirdPage },
  { path: '/another-page', component: AnotherPage },
  { path: '/fourth-page', component: FourthPage },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  //transition: false,
});

// Create the Vue app
const app = createApp(App).use(store);

// Use the router with the app
app.use(router);

// Mount the app to the '#app' element in your HTML
app.mount('#app');
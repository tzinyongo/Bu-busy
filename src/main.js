import { createApp } from 'vue';
import App from './components/App.vue';
import AnotherPage from './components/AnotherPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Define your routes
const routes = [
  { path: '/', component: App },
  { path: '/another-page', component: AnotherPage },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  transisition: false,
});

// Create the Vue app
const app = createApp(App);

// Use the router with the app
app.use(router);

// Mount the app to the '#app' element in your HTML
app.mount('#app');
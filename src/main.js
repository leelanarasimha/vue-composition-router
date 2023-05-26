import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import NotFound from './pages/NotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/:pathMatch(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

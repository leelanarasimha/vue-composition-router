import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import SinglePost from './pages/SinglePost.vue';
import PostComponent from './pages/PostComponent.vue';
import ProductComponent from './pages/ProductComponent.vue';
import NotFound from './pages/NotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/:productName+', component: ProductComponent },
  { path: '/:id(\\d+)', component: SinglePost },
  { path: '/posts/:id', component: SinglePost },
  { path: '/:pathMatch(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
});

const app = createApp(App);
app.use(router);
app.mount('#app');

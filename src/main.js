import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import SinglePost from './pages/SinglePost.vue';
import LeftSideBar from './components/LeftSideBar.vue';
import RightSideBar from './components/RightSideBar.vue';
import PostComponent from './pages/PostComponent.vue';
import ProductComponent from './pages/ProductComponent.vue';
import NotFound from './pages/NotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    components: {
      default: Home,
      LeftSideBar: About,
      RightSideBar
    }
  },
  {
    path: '/about',
    components: {
      default: About,
      RightSideBar: LeftSideBar,
      LeftSideBar: RightSideBar
    }
  },
  {
    path: '/articles',
    name: 'posts',
    component: Posts,
    children: [{ path: ':id', name: 'singlePost', component: SinglePost }]
  },
  // { path: '/:productName+', component: ProductComponent },
  // { path: '/:id(\\d+)', component: SinglePost },

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

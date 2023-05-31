import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Posts from './pages/Posts.vue';
import SinglePost from './pages/SinglePost.vue';
import LeftSideBar from './components/LeftSideBar.vue';
import RightSideBar from './components/RightSideBar.vue';
import SearchUser from './pages/SearchUser.vue';
import ProductComponent from './pages/ProductComponent.vue';
import NotFound from './pages/NotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
    props: { name: 'Leela web dev' }
  },
  {
    path: '/about/:id',
    components: {
      default: About,
      RightSideBar: LeftSideBar,
      LeftSideBar: RightSideBar
    },
    props: { default: true, RightSideBar: true, LeftSideBar: true }
  },
  { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) },
  {
    path: '/articles',
    name: 'posts',
    component: Posts,
    children: [{ path: ':id', name: 'singlePost', component: SinglePost, props: true }]
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

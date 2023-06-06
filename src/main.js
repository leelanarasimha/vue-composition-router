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
import { createPinia } from 'pinia';

const routes = [
  {
    path: '/',
    component: Home,

    beforeEnter: [auth1, auth2]
  },
  {
    path: '/about',
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

function auth1(to, from) {
  console.log('auth1');
  return true;
}

function auth2() {
  console.log('auth2');
  return true;
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
});

function authAccess(to) {
  console.log('accessing');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (to.path.includes('articles') || to.path.includes('notfound')) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 500);
  });
}

router.beforeEach(async (to, from, next) => {
  console.log('beforeEach');
  next(true);
});

router.afterEach((to, from) => {
  console.log('after Each ');
});

router.beforeResolve(async (to) => {
  console.log('before Resolve');
  if (to.path.includes('articles')) {
    // await authAccess(to);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    app.provide('postsData', await response.json());
  }
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');

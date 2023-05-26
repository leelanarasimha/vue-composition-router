<template>
  <div>
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/adsd">Broken Link</a></li>
    </ul>

    <div>
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import About from './pages/About.vue';
  import Home from './pages/Home.vue';
  import NotFound from './pages/NotFound.vue';

  const routes = {
    '/': Home,
    '/about': About
  };

  const currentPath = ref(window.location.hash);

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  });

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound;
  });
</script>

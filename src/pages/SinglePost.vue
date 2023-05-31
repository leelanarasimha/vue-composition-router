<template>
  <div>SIngle Post {{ $route.params.id }}</div>

  <div v-if="post">
    <div>{{ post.id }}</div>
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
  </div>

  <div>
    <router-link to="/posts">Back</router-link>
  </div>
</template>
<script setup>
  import { ref, watch, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();

  const post = ref(null);

  const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    post.value = await response.json();
  };

  watchEffect(getPost);
</script>

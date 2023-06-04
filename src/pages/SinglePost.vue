<template>
  <div>SIngle Post {{ $route.params.id }}</div>

  <div v-if="post">
    <div>{{ post.id }}</div>
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
  </div>

  <div>
    <button @click="onBackClick">Back To Posts</button>
  </div>
</template>
<script setup>
  import { ref, watch, watchEffect } from 'vue';
  import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();

  const props = defineProps({
    id: String
  });
  console.log(props);
  console.log(route.params);

  const post = ref(null);

  const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post.value = await response.json();
  };

  getPost(props.id);
  onBeforeRouteUpdate((to, from) => {
    getPost(to.params.id);
  });

  const onBackClick = () => {
    router.go(-1);
  };
</script>

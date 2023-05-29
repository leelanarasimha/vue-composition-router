<template>
  <div>Posts Page</div>

  <table class="table table-striped" v-if="posts.length">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td><router-link :to="{ path: `/posts/${post.id}` }">View Post</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import { onMounted, ref } from 'vue';

  const posts = ref([]);

  onMounted(() => {
    fetchPosts();
  });

  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    posts.value = await response.json();
  };
</script>

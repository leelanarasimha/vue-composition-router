<template>
  <div>About Page</div>
  <div>Counter: {{ counter.count }}</div>
</template>

<script setup>
  import { useCounterStore } from '../stores/counter';

  const props = defineProps(['id']);

  const counter = useCounterStore();
  console.log('about page');
  console.log(props);
</script>

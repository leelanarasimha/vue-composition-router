<template>
  <div>Home Page</div>
  <div>Counter: {{ counter.count }}</div>
  <div>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<script setup>
  import { useCounterStore } from '../stores/counter';

  const props = defineProps(['name']);
  const counter = useCounterStore();

  console.log(props);
</script>

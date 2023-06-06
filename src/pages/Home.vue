<template>
  <div>Home Page</div>
  <div>Counter: {{ count }}</div>
  <div>doubleCOunt: {{ doubleCount }}</div>
  <div>
    <button @click="increment()">Increment</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import { useCounterStore } from '../stores/counter';

  const props = defineProps(['name']);
  const counter = useCounterStore();

  // const count = counter.count;
  // const doubleCount = counter.doubleCOunt;
  // const {count, doubleCount} = counter;

  // const {count, doubleCount} = storeToRefs(counter);
  const count = computed(() => counter.count);
  const doubleCount = computed(() => counter.doubleCount);

  const { increment } = counter;

  console.log(props);
</script>

<template>
  <div>Home Page</div>
  <div>Counter: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <div>doubleCountPlusOne: {{ doubleCountPlusOne(3) }}</div>
  <div>User with 1: {{ getUserById(1).name }}</div>
  <div>Name: {{ name }}</div>
  <!-- <div>doubleValue: {{ doubleValue }}</div> -->
  <div>
    <button @click="add()">Increment</button>
    <button @click="counter.$reset()">Reset</button>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import { useCounterStore } from '../stores/counter';

  const counter = useCounterStore();

  const { count, doubleCount, name, doubleCountPlusOne, getUserById } = storeToRefs(counter);

  const { increment } = counter;

  counter.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
  });

  function add() {
    counter.$patch({
      count: counter.count + 1,
      name: Math.random() + 'dsds'
    });
    // counter.count++;
    // counter.name = Math.random() + 'dsds';
  }
</script>

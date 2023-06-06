<template>
  <div>Home Page</div>
  <div>Counter: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <!-- <div>doubleValue: {{ doubleValue }}</div> -->
  <div>
    <button @click="add()">Increment</button>
  </div>
</template>

<script>
  import { mapActions, mapState, mapWritableState } from 'pinia';
  import { useCounterStore } from '../stores/counter';
  export default {
    computed: {
      // ...mapState(useCounterStore, {
      //   counter: 'count',
      //   doubleCounter: 'doubleCount',
      //   doubleValue: (state) => state.doubleCount + 1
      // }),
      ...mapWritableState(useCounterStore, ['count', 'doubleCount'])
    },
    methods: {
      ...mapActions(useCounterStore, ['increment']),
      add() {
        this.count++;
      }
    }
  };
</script>

<template>
  <div>Home Page</div>
  <div>Counter: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <div>Name: {{ name }}</div>
  <!-- <div>doubleValue: {{ doubleValue }}</div> -->
  <div>
    <button @click="add()">Increment</button>
    <button @click="$reset()">Reset</button>
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
      ...mapWritableState(useCounterStore, ['count', 'doubleCount', 'name'])
    },
    mounted() {
      this.$subscribe((mutation, state) => {
        console.log(mutation), console.log(state);
      });
    },
    methods: {
      ...mapActions(useCounterStore, ['increment', '$reset', '$patch', '$subscribe']),
      add() {
        this.$patch({
          count: this.count + 1,
          name: Math.random() + 'dsds'
        });
      }
    }
  };
</script>

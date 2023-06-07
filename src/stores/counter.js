import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// export const useCounterStore = defineStore('counterStore', {
//   state: () => {
//     return {
//       count: 0,
//       name: 'leela web dev'
//     };
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++;
//     }
//   }
// });

export const useCounterStore = defineStore('counterStore', () => {
  const count = ref(0);
  const name = ref('leela web dev');

  const doubleCount = computed(() => count.value * 3);

  function increment() {
    count.value++;
  }

  function $reset() {
    count.value = 0;
    name.value = 'leela web dev';
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    $reset
  };
});

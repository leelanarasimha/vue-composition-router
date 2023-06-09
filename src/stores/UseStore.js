import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  const users = ref([
    { id: 1, name: 'leela' },
    { id: 2, name: 'dsdsd' }
  ]);

  return { users };
});

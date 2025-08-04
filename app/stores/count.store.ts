import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Example");
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function reset() {
    count.value = 0;
  }

  return { count, name, doubleCount, increment, reset };
});
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Example");
  const doubleCount = computed(() => count.value * 2);

  console.log(doubleCount.value);

  function increment() {
    count.value++;
  }

  function reset() {
    count.value = 0;
  }

  function changeName(newName: string) {
    name.value = newName
  }

  return { count, name, changeName, doubleCount, increment, reset };
});
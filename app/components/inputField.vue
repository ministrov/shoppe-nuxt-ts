<template>
  <input v-model="data" class="input" :class="variant" />
</template>

<script setup lang="ts">
const { variant } = defineProps<{
  variant: "gray" | "black";
}>();
const data = defineModel<string>();

console.log(data);
</script>

<style scoped>
.input {
  width: 100%;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-black);
  border: none;
  background: none;
}
.input::placeholder {
  color: var(--color-dark-gray);
}
.gray {
  border-bottom: 1px solid var(--color-gray);
}
.black {
  border-bottom: 1px solid var(--color-black);
}
</style>

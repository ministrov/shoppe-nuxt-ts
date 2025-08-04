<template>
  <button v-show="isShown" class="fav-button">
    <Icon name="icons:add-favorite" size="18px" />
  </button>
</template>

<script setup lang="ts">
const { id, isShown } = defineProps<{
  id: number;
  isShown: boolean;
}>();

console.log(id, isShown);
</script>

<style scoped>
.fav-button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>

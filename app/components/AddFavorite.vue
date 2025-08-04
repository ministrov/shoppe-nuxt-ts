<template>
  <div>Add Favorite</div>
  <button>
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

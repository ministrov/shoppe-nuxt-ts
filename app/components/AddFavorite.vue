<template>
  <button
    v-show="isShown || favoriteStore.isFavorite(id)"
    class="fav-button"
    @click.stop.prevent="() => favoriteStore.toggleFavorite(id)"
  >
    <Icon name="icons:add-favorite" size="18px" />
  </button>
</template>

<script setup lang="ts">
const { id, isShown } = defineProps<{
  id: number;
  isShown: boolean;
}>();

const favoriteStore = useFavoritesStore();
</script>

<style scoped>
.fav-button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>

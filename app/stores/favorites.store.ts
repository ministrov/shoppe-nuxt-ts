import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favoriteIds = ref<number[]>([]);

  function addToFavorites(id: number) {
    if (!favoriteIds.value.includes(id)) {
      favoriteIds.value.push(id);
    }
  }

  function removeFromFavorites(id: number) {
    favoriteIds.value = favoriteIds.value.filter((item) => {
      console.log(item);
      return item !== id
    });
  }

  return { favoriteIds, addToFavorites, removeFromFavorites }
});

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const useFavoritesStore = defineStore(
  'favorites',
  () => {
    const favoriteIds = ref<number[]>([]);

    function isFavorite(id: number) {
      return favoriteIds.value.find(f => f === id);
    }

    function toggleFavorite(id: number) {
      if (!favoriteIds.value.includes(id)) {
        favoriteIds.value.push(id);
        return;
      }

      favoriteIds.value = favoriteIds.value.filter((item) => {
        console.log(item);
        return item !== id
      });
    }

    // async function fetchFavorites() {
    //   const data = await $fetch<GetCategoriesResponse>(API_URL + '/categories');
    //   favoriteIds.value = data.categories.map((c) => c.id)
    // }

    return { favoriteIds, toggleFavorite, isFavorite }
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['favoriteIds']
    }
  }
);



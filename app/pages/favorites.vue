<template>
  <div>
    <h1>Welcome to Favorites Page</h1>

    {{ favoriteStore.favoriteIds[0] }}
  </div>
</template>

<script setup land="ts">
const favoriteStore = useFavoritesStore();
favoriteStore.addToFavorites(1);
// await favoriteStore.fetchFavorites();
await callOnce("fetchFavorites", async () => favoriteStore.fetchFavorites(), {
  mode: "navigation",
});
</script>

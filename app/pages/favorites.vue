<template>
  <div>
    <h1>Welcome to Favorites Page</h1>

    {{ favoriteStore.favoriteIds[0] }}

    {{ counter.count }}

    <button @click="counter.increment">++</button>
    <button @click="counter.reset">Reset</button>
  </div>
</template>

<script setup land="ts">
const favoriteStore = useFavoritesStore();
const counter = useCounterStore();
favoriteStore.addToFavorites(1);
</script>

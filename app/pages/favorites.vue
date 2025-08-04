<template>
  <div>
    <h1>Welcome to Favorites Page</h1>

    {{ favoriteStore.favoriteIds[0] }}

    {{ count }}

    {{ name }}

    <button @click="increment">++</button>
    <button @click="reset">Reset</button>
    <button @click="doubleCount">*2</button>
    <button @click="() => changeName('Eduardo')">Change Name</button>
  </div>
</template>

<script setup land="ts">
const favoriteStore = useFavoritesStore();
const counter = useCounterStore();
const { increment, reset, doubleCount, changeName } = counter;
const { count, name } = storeToRefs(counter);
favoriteStore.addToFavorites(1);
</script>

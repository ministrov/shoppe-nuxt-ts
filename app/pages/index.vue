<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is your first Nuxt page.</p>

    <NuxtLink to="/about">About</NuxtLink>

    <!-- <button @click="openAbout">Move to</button> -->
  </div>
</template>

<script setup lang="ts">
// function openAbout() {
//   navigateTo("/about");
// }
</script>

<style scoped>
.home {
  padding: 2rem;
  background-color: rebeccapurple;
}
</style>
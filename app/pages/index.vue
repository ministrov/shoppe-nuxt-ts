<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p v-if="isPage !== false">This is your first Nuxt page.</p>

    <NuxtLink to="/about">About</NuxtLink>

    <!-- <button @click="openAbout">Move to</button> -->
    <InputField
      variant="black"
      placeholder="Ваш email для акций и предложений"
    />
  </div>
</template>

<script setup lang="ts">
const isPage = ref(true);
</script>

<style scoped>
.home {
  padding: 2rem;
  background-color: rebeccapurple;
}
</style>

<template>
  <NuxtLayout>
    <main class="main">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import "~/assets/styles/main.css";
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.main {
  max-width: 1248px;
  margin: 0 auto;
  padding: 40px 0;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<template>
  <NuxtLayout>
    <main class="main">
      <UApp>
        <NuxtPage />
      </UApp>
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
  padding: 40px 24px;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .main {
    padding: 0 16px;
  }
}
</style>

<template>
  <div>
    <h1>Мой аккаунт</h1>

    <NuxtLink href="/" @click="authStore.clearToken">
      Выход
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});

const authStore = useAuthStore();

</script>

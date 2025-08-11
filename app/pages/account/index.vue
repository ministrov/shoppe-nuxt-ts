<template>
  <div>
    <h1>Мой аккаунт</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
// const authStore = useAuthStore();

// if (!authStore.token) {
//   navigateTo('/auth/login');
// }

// // console.log(authStore.token);
</script>

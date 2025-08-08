<template>
  <div>
    <h1>Welcome to the Account Page</h1>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

console.log(authStore.token);
</script>

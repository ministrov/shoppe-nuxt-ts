<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
throw createError({
  statusCode: 401,
  statusMessage: "You are not authorized",
  data: {
    userId: 123
  }
});
</script>
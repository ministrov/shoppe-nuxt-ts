<template>
  <div class="error__wrapper">
    <h1>{{ error.statusCode }} ошибка</h1>

    <p v-if="error.statusCode === 404" class="error__message">
      Страница не найдена, попробуйте перейти на главную страницу
    </p>

    <p v-else class="error__message">
      {{ error.statusMessage }}
    </p>

    <ActionButton color="ghost" @click="goHome">
      Главная страница
    </ActionButton>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();

console.log(error, "error");

function goHome() {
  navigateTo("/");
}
</script>

<style scoped>
.error__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 100vh;
}

.error__message {
  margin: 0;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  color: var(--color-dark-gray);
}
</style>

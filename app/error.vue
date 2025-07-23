<template>
  <div>
    <h1>{{ error.statusCode }} ошибка</h1>

    <p>
      {{ error.statusMessage }} Страница не найдена, попробуйте перейти на
      главную страницу
    </p>

    <!-- <ActionButton> Главная страница </ActionButton> -->
    <!-- <ActionButton color="ghost"> Главная страница </ActionButton> -->
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();
</script>

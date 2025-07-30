<template>
  <div>
    <h1 class="left">Каталог товаров</h1>

    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div class="catalog__cards"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const API_URL = "http://localhost:3000/api";
// const input = ref("");
const select = ref("");
const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");
const categoriesSelect = computed(() => {
  return data.value
    ? data.value?.categories.map((category) => ({
        value: category.id.toString(),
        label: category.name,
      }))
    : [];
});
</script>

<style scoped>
.catalog {
  display: flex;
  gap: 36px;
}

.catalog__filter {
  width: 260px;
}
</style>

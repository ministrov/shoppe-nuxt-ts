<template>
  <div>
    <h1 class="left">Каталог товаров</h1>

    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div class="catalog__cards">
        <CatalogCard
          v-for="product in productsData?.products"
          :key="product.id"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { GetProductsResponse } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const select = ref("");
const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");
const { data: productsData } = await useFetch<GetProductsResponse>(
  API_URL + "/products",
  {
    query: {
      limit: 20,
      offset: 0,
    },
  }
);
const defaultSelect = { value: "", label: "Категория" };
const categoriesSelect = computed(() => {
  return data.value
    ? data.value?.categories
        .map((category) => ({
          value: category.id.toString(),
          label: category.name,
        }))
        .concat(defaultSelect)
    : [defaultSelect];
});

console.log(categoriesSelect);
</script>

<style scoped>
.left {
  margin-bottom: 38px;
}
.catalog {
  display: flex;
  gap: 40px;
}

.catalog__filter {
  width: 260px;
}

.catalog__cards {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 70px;
}

@media screen and (max-width: 1330px) {
  .catalog__cards {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    column-gap: 16px;
    row-gap: 48px;
  }
}

@media screen and (max-width: 768px) {
  .catalog__cards {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    column-gap: 12px;
    row-gap: 24px;
  }
}
</style>

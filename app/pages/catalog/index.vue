<template>
  <div>
    <h1 class="left">Каталог товаров</h1>

    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div class="catalog__cards">
        <CatalogCard v-bind="product" />
        <CatalogCard v-bind="product" />
        <CatalogCard v-bind="product" />
        <CatalogCard v-bind="product" />
        <CatalogCard v-bind="product" />
        <CatalogCard v-bind="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { Product } from "~/interfaces/product.interface";

// const API_URL = "http://localhost:3000/api";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
// const MY_ENV_VAR = config.public.myEnvVariable;
const select = ref("");
const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");
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

// console.log(MY_ENV_VAR);

const product: Product = {
  id: 1,
  name: "Lira Earrings",
  price: 20,
  short_description: "Элегантные золотистые серьги-кольца",
  long_description:
    "Отлично подойдут к любому гардеробу. Чистое золото высокой пробы, которое не оставит вас равнодушными к качеству изделия.",
  sku: "12",
  discount: 0,
  images: [
    "/images/jewelry/lira1.jpg",
    "/images/jewelry/lira2.jpg",
    "/images/jewelry/lira3.jpg",
    "/images/jewelry/lira4.jpg",
  ],
  category_id: 1,
  category: {
    id: 1,
    name: "Серьги",
    alias: "earrings",
  },
  created_at: new Date(),
  updated_at: new Date(),
};
// const { data: productsData } = await useFetch<GetProductsResponse>(API_URL + "/products");
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
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 70px;
}
</style>

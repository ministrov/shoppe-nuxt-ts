<template>
  <div class="catalog">
    <h1 class="left">Избранное</h1>

    <NoFavorites v-if="products?.length === 0" />

    <ul class="catalog__grid">
      <li class="catalog__item">
        <CatalogCard
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/interfaces/product.interface";
const favoriteStore = useFavoritesStore();
const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const products = ref<Product[]>();

console.log(products);
console.log(products.value);

watchEffect(async () => {
  const data = await Promise.all(
    favoriteStore.favoriteIds.map((id) => {
      return $fetch<{ product: Product }>(API_URL + "/products/" + id);
    })
  );
  products.value = data.map((el) => el.product);
});
</script>

<style scoped>
.catalog {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 100vh;
}
.catalog__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 64px 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>

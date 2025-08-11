<template>
  <section class="catalog-page">
    <h1 class="left">Каталог товаров</h1>

    <div class="catalog">
      <div class="catalog__filter">
        <div class="catalog__search">
          <InputField v-model="search" variant="gray" placeholder="Поиск..." />
          <Icon name="icons:search" size="18px" />
        </div>
        <SelectField v-model="category_id" :options="categoriesSelect" />
      </div>
      <ul class="catalog__cards">
        <CatalogCard
          v-for="product in productsData?.products"
          :key="product.id"
          v-bind="product"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { GetProductsResponse } from "~/interfaces/product.interface";

const API_URL = useAPI();
const route = useRoute();
const router = useRouter();

const category_id = ref(route.query.category_id?.toString() || "");
const search = ref(route.query.search?.toString() || "");

// watch(category_id, () => {
//   router.replace({ query: { category_id: category_id.value } });
// });
// watchEffect(() => {

// });

watch([category_id, search], () => {
  changeRoute(category_id, search);
});

const changeRoute = useDebounceFn((category_id, search) => {
  router.replace({
    query: { category_id: category_id.value, search: search.value },
  });
}, 1000);

const query = computed(() => ({
  limit: route.query.limit ?? 20,
  offset: route.query.offset ?? 0,
  category_id: route.query.category_id || undefined,
  search: route.query.search || undefined,
}));
const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");
const { data: productsData } = await useFetch<GetProductsResponse>(
  API_URL + "/products",
  {
    key: "get-products",
    query,
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
</script>

<style scoped>
.catalog-page {
  min-height: 100vh;
}

.left {
  margin-bottom: 38px;
}
.catalog {
  display: flex;
  gap: 40px;
}

.catalog__filter {
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.catalog__search {
  position: relative;
}

.catalog__search .iconify {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.catalog__cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  column-gap: 24px;
  row-gap: 70px;
  margin: 0;
  margin-bottom: 60px;
  padding: 0;
  list-style: none;
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

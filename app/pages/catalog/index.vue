<template>
  <section class="catalog-page">
    <div class="catalog-page__search-mobile">
      <SearchForm />
    </div>

    <h1 class="left catalog-page__title">Каталог товаров</h1>

    <div class="catalog">
      <div class="catalog__filter">
        <div class="catalog__search">
          <InputField v-model="search" variant="gray" placeholder="Поиск..." />
          <Icon name="icons:search" size="18px" />
        </div>
        <SelectField v-model="category_id" :options="categoriesSelect" />
        <div class="catalog__price-search">
          <USlider v-model="price" color="neutral" size="lg" />

          <span>{{ `Цена: $${price[0]} - $${price[1]}` }}</span>
        </div>
        <div class="catalog__switch">
          <span class="catalog__switch-label">Со скидкой</span>
          <USwitch size="xl" color="neutral" value="false" />
        </div>
      </div>

      <div class="catalog__cards-wrapper">
        <ul class="catalog__cards">
          <CatalogCard
            v-for="product in productsData?.products"
            :key="product.id"
            v-bind="product"
          />
        </ul>

        <UPagination
          v-model:page="page"
          active-color="neutral"
          size="xl"
          :total="8"
          :items-per-page="6"
          :sibling-count="1"
        />
      </div>
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
const price = ref([0, 185]);
const page = ref(3);

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
  padding-top: 96px;
  padding-bottom: 164px;
}

.catalog-page__search-mobile {
  display: none;
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
  gap: 24px;
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

.catalog__price-search {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.catalog__switch {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  .catalog-page__search-mobile {
    display: block;
  }

  .catalog-page {
    padding-top: 64px;
    padding-bottom: 96px;
  }

  .catalog {
    flex-direction: column;
  }

  .catalog__cards {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    column-gap: 12px;
    row-gap: 24px;
  }
}

@media screen and (max-width: 475px) {
  .catalog-page__search-mobile {
    margin-top: 17px;
    margin-bottom: 24px;
  }

  .catalog-page {
    padding-top: 0;
    padding-bottom: 64px;
  }

  .catalog-page__title {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 26px;
  }

  .catalog__cards {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
  }
}
</style>

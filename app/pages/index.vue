<template>
  <div class="home">
    <div class="home__search-mobile">
      <SearchForm />
    </div>

    <section class="home__promo">
      <h2 class="visually-hidden">Промо секция со слайдером</h2>
      <UCarousel
        v-slot="{ item }"
        auto-height
        dots
        :items="items"
        class="w-full mx-auto"
        :ui="{
          container: 'transition-[height]',
          controls: 'absolute -bottom-3 z-50',
          dots: '-bottom-2',
          dot: 'w-2 h-2'
        }"
      >
        <CarouselItem v-bind="item" />
      </UCarousel>
    </section>

    <section class="home__cards">
      <header class="home__cards-header">
        <h2>Последние поступления</h2>
        <NuxtLink to="/catalog">Все</NuxtLink>
      </header>

      <ul class="home__list">
        <CatalogCard
          v-for="product in lastTrendProducts"
          :key="product.id"
          v-bind="product"
        />
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/no-duplicates
import img1 from "@/assets/about-img-1.jpg";
import img2 from "@/assets/about-img-2.jpg";
// eslint-disable-next-line import/no-duplicates
import img3 from "@/assets/about-img-1.jpg";
import { NuxtLink } from "#components";
import type { GetProductsResponse } from "~/interfaces/product.interface";

const API_URL = useAPI();
const data = await $fetch<GetProductsResponse>(API_URL + "/products");
const lastTrendProducts = computed(() => {
  return data?.products.slice(0, 6);
});

interface CarouselItem {
  id: number;
  title: string;
  src: string;
  price: number;
}

const items = [
  { id: 1, title: "Gold big hoops", price: 69.9, src: img1 },
  { id: 2, title: "Gold big hoops", price: 149.9, src: img2 },
  { id: 3, title: "Gold big hoops", price: 99.9, src: img3 },
] as CarouselItem[];

</script>

<style scoped>
.home {
  padding-bottom: 100px;
}

.home__search-mobile {
  display: none;
}

.home__promo {
  margin-bottom: 64px;
  padding: 0 16px 0 0;
}

.home__cards-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.home__cards-header h2 {
  font-size: 33px;
  font-weight: 500;
  line-height: 39px;
  color: var(--color-black);
}

.home__cards-header a {
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--color-accent);
}

.home__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  column-gap: 58px;
  row-gap: 86px;
}

@media screen and (max-width: 1024px) {
  .home__list {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    column-gap: 24px;
    row-gap: 64px;
  }
}

@media screen and (max-width: 768px) {
  .home {
    padding-bottom: 64px;
  }

  .home__promo {
    margin-bottom: 48px;
  }

  .home__search-mobile {
    display: block;
    margin-top: 24px;
    margin-bottom: 48px;
  }

  .home__cards-header h2 {
    font-size: 28px;
    line-height: 34px;
  }

  .home__list {
    grid-template-columns: repeat(2, minmax(136px, 1fr));
    column-gap: 16px;
    row-gap: 48px;
  }
}

@media screen and (max-width: 475px) {
  .home {
    padding-bottom: 32px;
  }

  .home__search-mobile {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .home__cards-header h2 {
    font-size: 24px;
    line-height: 30px;
  }

  .home__list {
    row-gap: 24px;
  }

  .card__name {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>

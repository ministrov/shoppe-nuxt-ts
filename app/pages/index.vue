<template>
  <div class="home">
    <section class="home__promo">
      <h2 class="visually-hidden">Промо секция со слайдером</h2>
      <UCarousel v-slot="{ item }" dots :items="items" class="w-full mx-auto">
        <CarouselItem v-bind="item" />
      </UCarousel>
    </section>

    <section class="home__cards">
      <header class="home__cards-header">
        <h2>Последние поступления</h2>
        <NuxtLink to="/catalog">Все</NuxtLink>
      </header>

      <ul class="home__list"></ul>
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
/* .home {
  padding: 0 16px 0 0;
} */

.home__promo {
  margin-bottom: 64px;
  padding: 0 16px 0 0;
}

.home__cards-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>

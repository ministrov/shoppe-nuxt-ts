<template>
  <div class="home">

    <section class="home__promo">
      <div class="home__carousel">
        <UCarousel v-slot="{ item }" dots :items="items" class="w-full mx-auto">
           <CarouselItem v-bind="item" />
        </UCarousel>
      </div>
    </section>

    <section class="home__cards"></section>

  </div>
</template>

<script setup lang="ts">

interface CarouselItem {
  id: number,
  title: string,
  src: string,
  price: number
}

const items = [
  { id: 1, title: 'Gold big hoops', price: 69.9, src: '../assets/about-img-1.jpg' },
  { id: 2, title: 'Gold big hoops', price: 149.9, src: '../assets/about-img-2.jpg' },
  { id: 3, title: 'Gold big hoops', price: 99.9, src: '../assets/about-img-1.jpg' },
] as CarouselItem[]
</script>

<style scoped>
.home {
  /* padding: 2rem; */
  background-color: rebeccapurple;
}
</style>

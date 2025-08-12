<template>
  <div class="home">

    <section class="home__promo">
      <div class="home__carousel">
        <UCarousel v-slot="{ item }" dots :items="items" class="w-full mx-auto">
          <img :src="item" width="1248" height="646" class="rounded-lg">
        </UCarousel>
      </div>
    </section>

    <section class="home__cards">
      <ul>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
        <li>item-1</li>
      </ul>
    </section>

  </div>
</template>

<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<style scoped>
.home {
  /* padding: 2rem; */
  background-color: rebeccapurple;
}
</style>

<template>
  <div class="carousel__item">
    <img :src="item.src" width="1248" height="646" alt="`Jewellry name ${{ item.title }}`">
    <h3 class="carousel__item-title">{{ item.title }}</h3>
    <p class="carousel__item-price">$ {{ item.price }}</p>

    <NuxtLink to="/catalog" class="carousel__item-link">
      Смотреть
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const item = defineProps<{
  title: string;
  src: string;
  price: number;
}>();
</script>

<style scoped>

</style>
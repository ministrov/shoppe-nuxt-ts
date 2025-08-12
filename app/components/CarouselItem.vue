<template>
  <div class="carousel__item">
    <img
      :src="item.src"
      width="1232"
      height="551"
      alt="{{ `Jewellry name ${item.title}` }}"
    />

    <div class="carousel__text">
      <h3 class="carousel__item-title">{{ item.title }}</h3>
      <p class="carousel__item-price">$ {{ item.price }}</p>

      <NuxtLink to="/catalog" class="carousel__item-link"> Смотреть </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const item = defineProps<{
  title: string;
  src: string;
  price: number;
}>();

console.log(item.src);
console.log(typeof item.src);
</script>

<style scoped>
.carousel__item {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: tomato;
}

.carousel__text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  color: white;
}
</style>

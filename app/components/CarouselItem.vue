<template>
  <div class="carousel__item">
    <img
      class="carousel__item-img"
      :src="item.src"
      width="1232"
      height="551"
      :alt="`Jewellry name ${item.title}`"
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
</script>

<style scoped>
.carousel__item {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.carousel__text {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  padding-left: 40px;
}

.carousel__item-title {
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 33px;
  line-height: 39px;
  color: var(--color-white);
}

.carousel__item-price {
  margin-bottom: 48px;
  font-family: var(--font);
  font-size: 26px;
  line-height: 32px;
  color: var(--color-white);
}

.carousel__item-link {
  display: block;
  width: 193px;
  height: 53px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: var(--color-white);
  border-radius: 6px;
  border: 2px solid var(--color-white);
}

@media screed and (max-width: 768px) {
  /* .carousel__item-img {
    aspect-ratio: 4 / 3;
  } */

  .carousel__text {
    bottom: 0;
    left: 0;
    transform: translate(0, 0);
    padding-left: 24px;
  }
}
</style>

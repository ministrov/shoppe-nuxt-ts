<template>
  <div class="card">
    <div class="card__image">
      <div class="card__discount">-{{ product.discount }}%</div>
    </div>
    <div class="card__name">
      {{ product.name }}
    </div>
    <div class="card__price">$ {{ product.price }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/interfaces/product.interface";

const product = defineProps<Product>();
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  text-decoration: none;
}
.card__image {
  aspect-ratio: 1/1;
  width: 100%;
  min-width: 320px;
  border-radius: 8px;
  padding: 16px;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: v-bind(image); */
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.card__price {
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  text-transform: capitalize;
  color: var(--color-accent);
}
.card__footer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.card__name {
  font-size: 20px;
  line-height: 26px;
  color: var(--color-black);
}
.card__discount {
  background: var(--color-accent);
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--color-white-light);
}
</style>

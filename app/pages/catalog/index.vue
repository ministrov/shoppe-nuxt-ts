<template>
  <div>
    <h1 class="left">Каталог товаров</h1>

    <SelectField
      v-model="select"
      :options="[
        { value: '', label: 'Категории' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]"
    />

    <!-- <button @click="makeRequest">Send</button> -->
  </div>
</template>

<script setup lang="ts">
// import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const input = ref("");
const select = ref("");
// const API_URL = "http://localhost:3000/api";
// async function* createAsyncIterable() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// async function makeRequest() {
//   try {
//     const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories");
//     console.log(data, "data");
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function main() {
//   for await (const item of createAsyncIterable()) {
//     console.log(`The current item is ${item} and the type is ${typeof item}`);
//   }
// }

// main();
// async function sendData() {
//   const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories", {
//     method: "POST",
//     body: input,
//   });

//   console.log(data);
// }

console.log(input.value);
</script>

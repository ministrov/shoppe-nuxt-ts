<template>
  <div>
    <h1>Welcome to the Catalog Page</h1>

    <SelectField
      v-model="select"
      :options="[
        { value: '', label: 'Категории' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
// import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const input = ref("");
const select = ref("");
// const API_URL = "http://localhost:3000/api";

// async function sendData() {
//   const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories", {
//     method: "POST",
//     body: input,
//   });

//   console.log(data);
// }

console.log(input.value);
</script>

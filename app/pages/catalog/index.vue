<template>
  <div>
    <h1>Welcome to the Catalog Page</h1>
    <!-- <h1>Welcome to the Catalog Page</h1> -->
    <InputField v-model="input" variant="black" />
    <!-- <input v-model="input" type="text" /> -->
    <button @click="sendData">Send</button>
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const input = ref("");
const API_URL = "http://localhost:3000/api";

async function sendData() {
  const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories", {
    method: "POST",
    body: input,
  });

  console.log(data);
}

console.log(input.value);
</script>

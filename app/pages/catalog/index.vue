<template>
  <div>
    <h1>Welcome to the Catalog Page</h1>
    <!-- <h1>Welcome to the Catalog Page</h1> -->
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

// const config = useRuntimeConfig();
// const API_URL = config.public.apiurl;
// const API_URL = useRuntimeConfig().public.apiurl;
const API_URL = "http://localhost:3000/api";
// const token = config.public.token;
const data = await $fetch<GetCategoriesResponse>(API_URL + "/categoriess");

console.log(data);
// console.log(token);
// console.log(config.public);
</script>

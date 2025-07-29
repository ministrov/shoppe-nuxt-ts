<template>
  <div>
    <h1>Welcome to the Catalog Page</h1>
    <!-- <h1>Welcome to the Catalog Page</h1> -->
  </div>
</template>

<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories");

console.log(data);
// console.log(config.public);
</script>

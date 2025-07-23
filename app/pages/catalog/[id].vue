<template>
  <div>
    <h1>Welcome to the Catalog {{ id }}Page</h1>
  </div>
</template>

<script setup>
const route = useRoute();

const id = ref(route.params.id);

console.log(id.value);
console.log(typeof id.value);
console.log(id.value);

const numberId = +id.value;

console.log(numberId);
console.log(typeof numberId);
</script>

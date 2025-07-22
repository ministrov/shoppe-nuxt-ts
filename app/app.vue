<script setup lang="ts">
const hello = ref('hello world');

console.log(hello.value);

</script>

<template>
  <div>
    {{ hello }}
    <TestComponent />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

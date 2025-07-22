<script setup lang="ts">
const hello = ref('hello world');
const number = ref<number>(100);

const runtime = useRuntimeConfig();
const token = ref(runtime.token);

// console.log(hello.value);

</script>

<template>
  <div>
    {{ hello }}
    <!-- <TestOne /> -->

    {{ token }}
    {{ number }}
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

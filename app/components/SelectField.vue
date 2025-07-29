<template>
  <div class="seletc-wrapper">
    <select v-model="model" class="select">
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>();
const { options } = defineProps<{
  options: { label: string; value: string }[];
}>();
</script>

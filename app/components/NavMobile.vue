<template>
  <div v-if="open" class="nav-mobile">
    <header>
      <NuxtLink to="/cart">
        <Icon name="icons:cart" size="18px" />
      </NuxtLink>

      <button @click="$emit('close')">
        <Icon name="icons:close" size="18px" />
      </button>
    </header>

    <!-- <div v-if="isOpen" class="nav-mobile__content">Mobile content</div> -->
    <SearchForm />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
const { open } = defineProps<{
  open: boolean;
}>();

emit("close");
</script>

<style scoped>
.nav-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-mobile {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 16px 16px;
    background-color: tomato;
  }
}
</style>

<template>
  <div class="nav-mobile">
    <Icon name="icons:cart" size="25px" />
    <Icon name="icons:burger-menu" size="25px" @click="toggleMenu" />

    <div v-if="isOpen" class="nav-mobile__content">Mobile content</div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

function toggleMenu() {
  if (isOpen.value) {
    isOpen.value = false;
  } else {
    isOpen.value = true;
  }
}
</script>

<style scoped>
.nav-mobile {
  display: none;
}

.nav-mobile__content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: tomato;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .nav-mobile {
    display: block;
  }
}
</style>

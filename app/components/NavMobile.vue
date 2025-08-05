<template>
  <div class="nav-mobile">
    <Icon name="icons:cart" size="18px" />
    <Icon v-if="isOpen" name="icons:close" size="18px" @click="closeMenu" />
    <Icon
      v-else
      class="nav-mobile__burger"
      name="icons:burger-menu"
      size="20px"
      @click="openMenu"
    />

    <div v-if="isOpen" class="nav-mobile__content">Mobile content</div>
  </div>
</template>

<script setup>
const isOpen = ref(false);

function openMenu() {
  isOpen.value = true;
}

function closeMenu() {
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
    display: flex;
    gap: 16px;
  }

  .nav-mobile__burger {
    cursor: pointer;
  }
}
</style>

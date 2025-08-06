<template>
  <div class="nav-mobile">
    <header>
      <NuxtLink to="/cart">
        <Icon name="icons:cart" size="18px" />
      </NuxtLink>

      <button>
        <Icon v-if="isOpen" name="icons:close" size="18px" @click="closeMenu" />
      </button>
    </header>

    <!-- <div v-if="isOpen" class="nav-mobile__content">Mobile content</div> -->
  </div>
</template>

<script setup>
const isOpen = ref(false);

// function openMenu() {
//   isOpen.value = true;
// }

// function closeMenu() {
//   if (isOpen.value) {
//     isOpen.value = false;
//   } else {
//     isOpen.value = true;
//   }
// }
</script>

<style scoped>
.nav-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .nav-mobile {
    /* display: flex;
    gap: 16px; */
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

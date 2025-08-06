<template>
  <div v-if="open" class="nav-mobile">
    <header class="nav-mobile__header">
      <NuxtLink to="/" class="nav-mobile__logo">
        <IconLogo />
      </NuxtLink>

      <div class="nav-mobile__btns">
        <NuxtLink to="/cart">
          <Icon name="icons:cart" size="24px" />
        </NuxtLink>

        <button class="nav-mobile__close" @click="$emit('close')">
          <Icon name="icons:close" size="24px" />
        </button>
      </div>
    </header>

    <!-- <div v-if="isOpen" class="nav-mobile__content">Mobile content</div> -->
    <div class="nav-mobile__search">
      <SearchForm />
    </div>

    <div class="nav-mobile__content">
      <div class="nav-mobile__menu">
        <NuxtLink to="/" class="nav-mobile__link">Главная</NuxtLink>
        <NuxtLink to="/catalog" class="nav-mobile__link">Магазин</NuxtLink>
        <NuxtLink to="/about" class="nav-mobile__link">О нас</NuxtLink>
      </div>
      <div class="nav-mobile__hr"></div>
      <div class="nav-mobile__icons">
        <NuxtLink to="/account" class="nav-mobile__link">
          <Icon name="icons:user" size="24px" />
          Мой аккаунт
        </NuxtLink>
        <NuxtLink to="/favorites" class="nav-mobile__link">
          <Icon name="icons:favorites" size="24px" />
          Избранное
        </NuxtLink>
        <NuxtLink to="/cart" class="nav-mobile__link">
          <Icon name="icons:exit" size="24px" />
          Выход
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
const { open } = defineProps<{
  open: boolean;
}>();

console.log(open);

emit("close");
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .nav-mobile {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 24px 32px;
    background-color: var(--color-white);
  }

  .nav-mobile__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .nav-mobile__search {
    margin-bottom: 40px;
  }

  .nav-mobile__menu {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 30px;
  }

  .nav-mobile__hr {
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid var(--color-gray);
  }

  .nav-mobile__icons {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .nav-mobile__link {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: var(--font);
    font-size: 24px;
    line-height: 30px;
    text-decoration: none;
    color: var(--color-black);
  }

  .nav-mobile__btns {
    display: flex;
    gap: 16px;
  }

  .nav-mobile__close {
    border: none;
    background: none;
    cursor: pointer;
  }
}

@media screen and (max-width: 375px) {
  .nav-mobile {
    padding: 16px 16px;
  }

  .nav-mobile__link {
    font-size: 20px;
    line-height: 26px;
  }
}
</style>

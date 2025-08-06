<template>
  <div class="header">
    <NuxtLink to="/" class="header__logo">
      <IconLogo />
    </NuxtLink>

    <div class="header__content">
      <div class="header__menu">
        <NuxtLink to="/catalog">Магазин</NuxtLink>
        <NuxtLink to="/about">О нас</NuxtLink>
      </div>
      <div class="header__hr"></div>
      <div class="header__icons">
        <NuxtLink to="#">
          <Icon name="icons:search" size="21px" />
        </NuxtLink>
        <NuxtLink to="/cart">
          <Icon name="icons:cart" size="21px" />
        </NuxtLink>
        <NuxtLink to="/favorites">
          <Icon name="icons:favorites" size="21px" />
        </NuxtLink>
        <NuxtLink to="/account">
          <Icon name="icons:user" size="21px" />
        </NuxtLink>
      </div>
    </div>

    <div class="header__mobile-btns">
      <NuxtLink to="/cart">
        <Icon name="icons:cart" size="24px" />
      </NuxtLink>

      <button class="nav-mobile__burger" @click="openMenu">
        <Icon name="icons:burger-menu" size="24px" />
      </button>
    </div>

    <NavMobile :open="isOpen" @close="closeMenu" />
  </div>
</template>

<script setup>
const isOpen = ref(false);
console.log(isOpen);

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
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  max-width: 1248px;
  margin: 0 auto;
  margin-top: 48px;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-gray);
}

.header__content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.header__mobile-btns {
  display: none;
}

.nav-mobile__burger {
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.header__menu {
  display: flex;
  gap: 60px;
  align-items: center;
}

.header__menu a {
  padding-bottom: 48px;
  font-size: 16px;
  line-height: 27px;
  color: var(--color-black);
  text-decoration: none;
}

.header__menu a:hover {
  color: var(--color-dark-gray);
}

.header__menu a.router-link-active {
  border-bottom: 2px solid var(--color-black);
}

.header__icons {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header__icons a {
  border-bottom: none;
  padding-bottom: 48px;
}

.header__icons a.router-link-active {
  border-bottom: 2px solid var(--color-black);
}

.header__hr {
  align-self: flex-start;
  height: 17px;
  margin-top: 4px;
  border-left: 1px solid var(--color-dark-gray);
}

@media screen and (max-width: 768px) {
  .header {
    position: relative;
    margin-top: 32px;
    border-bottom: none;
  }

  .header__content {
    display: none;
  }

  .header__mobile-btns {
    display: flex;
    gap: 16px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    margin-top: 16px;
  }
}
</style>

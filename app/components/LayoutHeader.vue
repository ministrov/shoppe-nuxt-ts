<template>
  <div class="header">
    <NuxtLink to="/">
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
  </div>
</template>

<script setup>
console.log("Setup");

onMounted(() => {
  console.log("Mounted");
});
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
</style>

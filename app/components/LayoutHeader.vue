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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>

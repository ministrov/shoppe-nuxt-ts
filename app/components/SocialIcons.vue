<template>
  <div class="socials">
    <NuxtLink to="#">
      <Icon name="icons:li" size="25px" />
    </NuxtLink>
    <NuxtLink to="#">
      <Icon name="icons:fb" size="25px" />
    </NuxtLink>
    <NuxtLink to="#">
      <Icon name="icons:in" size="25px" />
    </NuxtLink>
    <NuxtLink to="#">
      <Icon name="icons:tw" size="25px" />
    </NuxtLink>
  </div>
</template>

<style>
.socials {
  display: flex;
  gap: 20px;
}

.socials a {
  color: var(--color-dark-gray);
}

.socials a:hover {
  color: var(--color-dark);
}
</style>

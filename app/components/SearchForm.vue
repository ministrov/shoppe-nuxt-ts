<template>
  <form class="search">
    <Icon name="icons:search" size="18px" />
    <input
      class="search__input"
      type="text"
      name="search"
      placeholder="Поиск"
    />
  </form>
</template>

<style scoped>
.search {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
}

.search__input {
  width: 100%;
  font-family: var(--font);
  font-size: 16px;
  border: none;
  background-color: var(--color-gray-light);
}
</style>

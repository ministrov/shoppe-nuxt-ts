<template>
  <div class="footer">
    <hr />
    <div class="footer__top">
      <ul>
        <li><NuxtLink to="#">Контакты</NuxtLink></li>
        <li><NuxtLink to="#">Условия покупки</NuxtLink></li>
        <li><NuxtLink to="#">Доставка и возврат</NuxtLink></li>
      </ul>
      <div class="footer__form">
        <InputField
          placeholder="Введите email для новостей и акций"
          variant="black"
        />
        <button class="footer__subscribe">
          <Icon name="icons:arrow-right" size="8px" />
        </button>
      </div>
    </div>
    <div class="footer__buttom">
      <div>© {{ new Date().getFullYear() }} Shoppe</div>
      <div class="footer__social">
        <SocialIcons />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: purple;
}
.footer hr {
  height: 1px;
  border: none;
  border-bottom: 1px solid var(--color-gray);
}
.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__top ul {
  display: flex;
  padding: 0;
  gap: 30px;
  list-style: none;
}

.footer__top ul a {
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-dark-gray);
}

.footer__top a:hover {
  fill: red;
}

.footer__buttom {
  display: flex;
  justify-content: space-between;
}

.footer__form {
  position: relative;
}

.footer__form input {
  min-width: 380px;
}
.footer__subscribe {
  position: absolute;
  right: 0;
  top: 10px;
  background: none;
  border: none;
}
</style>

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
          class="footer__input"
          placeholder="Ваш email для акций и предложений"
          variant="black"
        />
        <button class="footer__subscribe">
          <Icon name="icons:arrow-right" size="8px" />
        </button>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__copyright">
        © {{ new Date().getFullYear() }} Shoppe
      </div>
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
  padding-bottom: 68px;
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
  line-height: 22px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-dark-gray);
}

.footer__top a:hover {
  fill: red;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
}

.footer__form {
  position: relative;
}

.footer__input {
  width: 396px;
}

.footer__subscribe {
  position: absolute;
  right: 0;
  top: 10px;
  background: none;
  border: none;
}

@media screen and (max-width: 1024px) {
  .footer__top {
    flex-direction: column;
    gap: 32px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .footer__input {
    order: 1;
  }

  .footer__top ul {
    order: 2;
  }

  .footer__social {
    order: 1;
  }

  .footer__copyright {
    order: 2;
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding: 48px;
  }

  .footer__top {
    align-items: normal;
  }

  .footer__input {
    width: 100%;
  }
}

@media screen and (max-width: 575px) {
  .footer {
    gap: 0;
  }

  .footer hr {
    display: none;
  }

  .footer__top {
    gap: 20px;
  }

  .footer__top ul {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 36px;
  }

  .footer__top ul a {
    font-size: 12px;
    line-height: 20px;
  }
}

@media screen and (max-width: 375px) {
  .footer {
    padding: 32px;
  }

  .footer__bottom {
    align-items: flex-start;
    gap: 25px;
  }
}
</style>

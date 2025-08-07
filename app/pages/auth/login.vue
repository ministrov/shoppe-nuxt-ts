<template>
  <div class="login">
    <h1 class="login__title">Мой аккаунт</h1>

    <div class="login__tabs"></div>

    <form action="#" class="login-form">
      <div class="login-form__fiels">
        <InputField variant="gray" placeholder="Email" />
        <InputField type="password" variant="gray" placeholder="Пароль" />
      </div>

      <div class="login-form__actions">
        <ActionButton color="primary"> Вход </ActionButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
}
.login__title {
  margin-bottom: 64px;
}

.login__tabs {
  height: 50px;
  margin-bottom: 126px;
  background-color: var(--color-gray-light);
  border-radius: 8px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.login-form__fiels {
  display: flex;
  flex-direction: column;
  gap: 46px;
}

.login-form__actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-form__actions a {
  font-family: var(--font);
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  color: var(--color-black);
}

.login-form__actions a:hover {
  color: var(--color-black-hover);
}
</style>

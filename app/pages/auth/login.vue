<template>
  <div class="login">
    <h1 class="login__title">Мой аккаунт</h1>

    <div class="login__tabs"></div>

    <form action="POST" class="login-form">
      <div class="login-form__fiels">
        <InputField v-model="email" variant="gray" placeholder="Email" />
        <InputField
          v-model="password"
          type="password"
          variant="gray"
          placeholder="Пароль"
        />
      </div>

      <div class="login-form__actions">
        <ActionButton color="primary" @click.stop.prevent="login">
          Вход
        </ActionButton>
        <NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { LoginResponse } from "~/interfaces/auth.interface";

const API_URL = useAPI();
const email = ref<string | undefined>("");
const password = ref<string | undefined>("");
const authStore = useAuthStore();

async function login() {
  if (!email.value || !password.value) {
    alert(
      "Заполните все поля для входа в систему. Пожалуйста, проверьте введенные данные и повторите попытку."
    );
  }
  try {
    const data = await $fetch<LoginResponse>(API_URL + "/auth/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    authStore.setToken(data.token);
    navigateTo("/accout");
    console.log("Успешный вход:", data);
  } catch (error) {
    console.error("Ошибка входа:", error);
  }
}
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding-top: 104px;
  padding-bottom: 265px;
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
  text-align: center;
  color: var(--color-black);
}

.login-form__actions a:hover {
  color: var(--color-black-hover);
}
</style>

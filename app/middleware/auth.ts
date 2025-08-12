export default defineNuxtRouteMiddleware(() => {
  const auth = useCookie<{ token: string }>('auth');

  console.log(auth);

  if (!auth.value?.token) {
    return navigateTo('/auth/login');
  }
});
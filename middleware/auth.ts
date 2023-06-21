export default defineNuxtRouteMiddleware((to, from) => {
    const userToken = useCookie('token');
    if (to.path !== '/' && !userToken.value) {
      return navigateTo('/')
    }
  })
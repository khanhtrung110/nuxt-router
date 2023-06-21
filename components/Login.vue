<template>
    <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <h1 class="text-xl text-center mb-2">Login</h1>
        <form @submit.prevent="onLogin" class="flex flex-col gap-1">
            <input type="text" class="p-2 border border-black" v-model="userName">
            <input type="password" class="p-2 border border-black" v-model="userPassword">
            <button class="px-2 py-1 bg-green-600 mt-1 rounded-[2px]">Login</button>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const router = useRouter();

const userName = ref('');
const userPassword = ref('');

   const { data } = useFetch('/api/content');
   console.log(data);

 

// const customerToken = useCookie(
//   'token',
//   {
//     default: () => '12345',
//   }
// )
const onLogin = () => {
  $fetch('/api/login', {
    method: 'POST',
    body: { user: userName.value, password: userPassword.value},
  })
  router.push({ path: "/notes" });
}
onMounted(() => {
    console.log(document.cookie);
    
})
</script>

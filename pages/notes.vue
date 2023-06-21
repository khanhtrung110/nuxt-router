<template>
    <div>
        <button class="ml-auto px-2 py-1 bg-slate-500 text-white" @click="onLogout">Logout</button>
        <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2">
            <h1 class="text-2xl font-bold text-center">Content</h1>
            <p v-for="item in list"> {{ item }} </p>
            <button class="rounded-[2px] bg-blue-600 px-2 py-1 text-white cursor-pointer"
                @click="onRequest">RequestData</button>
        </div>
    </div>
</template>
<script setup>
const router = useRouter();
definePageMeta({
    middleware: ["auth"]
})
const list = ref([]);
const onRequest = async () => {
    const data =  await $fetch('/api/content');
    list.value = data;
}
console.log(useRequestHeaders(['cookie']),123);
const onLogout = () => {
    const userToken = useCookie('token');
    userToken.value = '';
    router.push('/')
}
</script>
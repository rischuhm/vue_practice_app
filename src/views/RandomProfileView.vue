<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { reactive, ref } from 'vue';

const user = reactive({})

const fetchData = async () => {
    let data = await fetch('https://randomuser.me/api/')
    let userData = await data.json()
    // user.value = await userData.results[0]
    Object.assign(user, userData.results[0])
    console.log(userData.results[0])
}

onBeforeMount(() => {
    fetchData()
})

</script>

<template>
    <h1 class="text-center text-4xl mt-10">Here is a Random Profile!</h1>
    <div class="border border-1 max-w-sm mx-auto rounded-xl shadow-lg p-8 m-4 min-h-[300px]">
        <div v-if="user.name">
            <div class="flex flex-row items-center place-content-around g-0">
                <img class="rounded-full" :src="user.picture.large" alt="">
                <div>
                    <p class="text-xl">{{ user.name.first }} {{ user.name.last }}</p>
                    <p>{{ user.dob.age }} years old</p>
                    <p>Member since {{ user.registered.date.substring(0, 4) }}</p>
                </div>
            </div>
            <div class="text-center">
                <p class="pl-4 mt-4">{{ user.location.street.name }} {{ user.location.street.number }},
                    {{user.location.postcode }}, {{ user.location.city }}</p>
                <p class="pl-4">{{ user.phone }}</p>
                <p class="pl-4">{{ user.email }}</p>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center">
        <button class="rounded-full rounded bg-blue-400 text-white p-2 shadow-lg hover:bg-blue-500"
            @click="fetchData">Fetch another user!</button>
    </div>
</template>
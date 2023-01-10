<script setup>
import { ref, computed } from 'vue';
import Palindrom from '../components/stringChecks/Palindrom.vue';
import UniqueChars from '../components/stringChecks/UniqueChars.vue';
const msg = ref('Hello world!')

const reversedMsg = computed(() => {
  return msg.value.split("").reverse().join("")
})


</script>

<template>
  <main>
    <div class="container mx-auto mt-10">
      <h1 class="text-5xl">String checker!</h1>
      
      <input class="border-2 border-black my-3" v-model="msg">
      <p>Your String reversed: {{reversedMsg}}</p>
      <p> Your string has {{msg.length}} characters</p>
      <UniqueChars :data=msg></UniqueChars>
      <Palindrom :data=msg></Palindrom>
     
    </div>
  </main>
</template>
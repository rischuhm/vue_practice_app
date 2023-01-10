<script setup>
import { ref, computed } from 'vue';

const text = ref("")

const minLen = computed(() => {
    console.log(text.value.length)
    return text.value.length >= 8
})

const minNums = computed(() => {
    const myString = text.value.replace(/\D/g,'');
    return myString.length
})

const minCapChars = computed(() => {
    const myString = text.value.replace(/[^A-Z]/g,'');
    return myString.length
})




</script>

<template>
<div class="container mx-auto mt-10">

<h1 class="text-5xl">Password Checker</h1>
<p>Enter a password and see how the criteria change if you fulfill them</p>

<input v-model="text" class="border text-xl my-5" placeholder=" Enter password here" type="text">
<!-- <p>Your password: {{text.length}}</p> -->
<p :class="{'text-red-700' : !minLen, 'text-green-700' : minLen,}">Has minimum 8 characters <span v-if="minLen">&#10003;</span><span v-if="!minLen">&#215;	</span></p>
<p>Contains min. 2 capital letters {{minCapChars}} </p>
<p>Contains min. 2 numbers --> {{minNums}}</p>


</div>
</template>
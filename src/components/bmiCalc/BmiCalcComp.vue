<script setup>
import { ref, computed } from 'vue'

const height = ref(1)
const weight = ref(1)

const bmi = computed(() => {
  return Math.round((weight.value)/((height.value/100)**2)*100)/100
})
</script>

<template>
<span>Height: </span><input type="text" v-model="height"><br>
<span>Weight: </span><input type="text" v-model="weight">

<h1 v-if="bmi <50 && bmi >5">Your BMI is : {{ bmi }}</h1>


</template>
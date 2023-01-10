<script setup>
import { ref } from 'vue'
import Hello from '../components/helloComp/Hello.vue';
import BmiCalcComp from '../components/bmiCalc/BmiCalcComp.vue';

const name = ref('Richard')
const age = ref(28)
</script>

<template>
<!-- Todo create a hello component -->
<Hello :name=name></Hello>
<Hello name="Georg"></Hello>
<p>Nice to see you here at age {{age}}</p>

<BmiCalcComp />


</template>

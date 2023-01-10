<script setup>

import { computed } from "vue";

const props = defineProps({"data":String})

const isPalindrom = computed(() => {
  return props.data.split("").reverse().join("").toLowerCase() == props.data.toLowerCase()
})


</script>

<template>
<p v-if="isPalindrom && props.data.length >= 2">Your string is a palindrom</p>
<p v-if="!isPalindrom">Your string is NO palindrom</p>
</template>
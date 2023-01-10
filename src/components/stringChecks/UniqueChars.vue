<script setup>

import { computed } from "vue";

const props = defineProps({"data":String})

const uniqueChars = computed(() => {
  const len = Array.from(new Set(props.data.split(""))).length
  return len
})


</script>

<template>
<p> Your string has {{uniqueChars}} unique characters</p>
</template>
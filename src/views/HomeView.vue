<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <main>
    <div class="container mx-auto mt-10">
      <h1 class="text-5xl mb-5">Welcome to my Site</h1>
      <p class="my-5">Here is a list of projects to do with vue.js. Feel free to explore!</p>
      <ul class="list-disc text-emerald-700">
        <li><RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/stringchecker">StringChecker</RouterLink></li>
        <li><RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/passchecker">PassChecker</RouterLink></li>
      </ul>

    </div>
  </main>
</template>
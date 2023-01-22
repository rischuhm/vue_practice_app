<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      
      <nav class="container mx-auto pt-3">
        <div class="flex items-center">
        <img class="h-12 grow-0 mr-4" src="./assets/logo.svg" alt="">
        <div class="flex grow gap-x-2.5 text-emerald-700">
        <RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/">Home</RouterLink>
        <RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/stringchecker">StringChecker</RouterLink>
        <RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/passchecker">PassChecker</RouterLink>
        <RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/bmicalc">BMICalc</RouterLink>
        <RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/randomprofile">RandomProfiles</RouterLink>
        <RouterLink class="transition duration-500	 ease-in-out hover:text-emerald-400" to="/about">About</RouterLink>
        </div>
      </div>
      
      </nav>
  </header>

  <RouterView />
</template>


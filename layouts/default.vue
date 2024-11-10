<template>
  <div class="h-full">
    <header class="flex justify-center items-center py-4 w-full relative bg-primary-950 bg-opacity-70">
      <NuxtLink to="/" class="font-bold text-xl text-primary-200 text-center">
        <h1 class="text-2xl">Carbonara Restaurant's</h1>
        <p class="text-sm">Company Inc.</p>
      </NuxtLink>
    </header>
    <BaseNav class="absolute w-full">
      <div class="flex justify-center space-x-6 text-2xl font-bold">
        <NuxtLink to="/" class=" hover:text-accent transition">Calculator</NuxtLink>
        <NuxtLink to="/stores" class=" hover:text-accent transition">Our Stores</NuxtLink>
      </div>
    </BaseNav>
    <main class="mt-16 sm:mt-20 relative bg-primary-900 bg-opacity-30 p-5">
      <div class="flex flex-col items-center justify-center">
        <slot />
      </div>
    </main>
    <footer class="py-4 text-center bg-primary-950 bg-opacity-70 text-primary-200">
      <p>&copy; 2024 Company Inc. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>

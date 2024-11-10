<template>
  <div class="w-full h-full bg-img absolute top-0 left-0 z-0"></div>
  <header class="flex justify-center items-center py-4 w-full relative">
    <NuxtLink to="/" class="font-bold text-xl text-center">
      <p>SRR - Restaurant APP</p>
      <p class="text-sm">Company Inc.</p>
    </NuxtLink>
  </header>
  <BaseNav class="absolute w-full ">
    <div class="flex justify-between space-x-6 text-2xl font-bold">
      <NuxtLink to="/" class=" hover:text-accent transition">Calculator</NuxtLink>
      <a href="/stores" class=" hover:text-accent transition">Our Stores</a>
    </div>
  </BaseNav>
  <main class="py-16">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>
  <footer class="py-4 text-center ">
    <p>&copy; 2024 Company Inc. All rights reserved.</p>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
aside {
  width: 200px;
}
</style>

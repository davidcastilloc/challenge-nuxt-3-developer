<template>
  <header class="container mx-auto flex justify-between items-center py-4">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class=" font-bold text-xl">
        <p>SRR - Restaurant APP</p>
        <p class="text-sm">Company Inc.</p>
      </NuxtLink>
    </div>
  </header>
  <section class="container mx-auto py-4">
    <BaseNav class="container mx-auto">
      <div class="flex justify-between space-x-6">
        <NuxtLink to="/" class=" hover:text-accent transition">Home</NuxtLink>
        <NuxtLink to="/calculator" class=" hover:text-accent transition">Calculator</NuxtLink>
        <NuxtLink to="/stores" class=" hover:text-accent transition">Stores</NuxtLink>
      </div>
    </BaseNav>
  </section>

  <main class="py-8">
    <div class="container mx-auto">
      <slot />
    </div>
  </main>

  <footer class="bg-dark py-4 text-center ">
    <p>&copy; 2023 Company Inc. All rights reserved.</p>
  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>
aside {
  width: 200px;
}
</style>

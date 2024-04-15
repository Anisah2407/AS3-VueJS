<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-col items-center">
      <img src="" class="w-32 h-32 rounded-full mb-4" alt="Profile Picture" />
      <h1 class="text-2xl font-bold">Noranisah Binti Salahudin</h1>
      <p class="text-gray-600">
        Web Developer | Photographer | Music Enthusiast
      </p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

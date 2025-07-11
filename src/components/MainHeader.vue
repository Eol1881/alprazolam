<script setup lang="ts">
defineProps<{
  content: string
}>()
</script>

<template>
  <div class="text-center">
    <h1 class="text-[#00bd7e] p-1 font-medium text-5xl">{{ content }}</h1>
  </div>
</template>

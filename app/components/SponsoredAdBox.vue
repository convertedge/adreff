<script setup lang="ts">
  defineProps({
    loading: {
      type: Boolean,
      default: true,
    },
    showAd: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <UCard :ui="{ header: '!p-2', body: '!p-2', footer: '!p-0' }">
    <template #header>
      <h3 class="text-xs font-medium text-gray-600">AdReff Sponsored Links</h3>
    </template>

    <img id="adref_image_id" src="/image1.png" />

    <template #footer>
      <div class="p-3 space-y-2">
        <div class="h-3 bg-gray-200 rounded w-full"></div>
        <div class="h-3 bg-gray-200 rounded w-4/5"></div>
      </div>
    </template>
  </UCard>
</template>

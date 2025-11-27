<script setup lang="ts">
  const mockComments = [
    { id: 1, likes: 0, replies: 0 },
    { id: 2, likes: 0, replies: 0 },
    { id: 3, likes: 0, replies: 0 },
    { id: 4, likes: 0, replies: 0 },
    { id: 5, likes: 0, replies: 0 },
  ];
</script>

<template>
  <div class="space-y-6">
    <div v-for="comment of mockComments" key="{comment.id}" class="flex gap-4">
      <UAvatar icon="i-heroicons-user" size="lg" />

      <div class="flex-1 space-y-2">
        <div class="flex items-center gap-2">
          <div class="h-4 bg-gray-200 rounded w-32" />
          <span class="text-gray-400">|</span>
          <div class="h-3 bg-gray-200 rounded w-20" />
        </div>

        <div class="space-y-2">
          <div class="h-3 bg-gray-200 rounded w-full" />
          <div class="h-3 bg-gray-200 rounded w-11/12" />
        </div>

        <div class="flex items-center gap-4 pt-2">
          <button class="flex items-center gap-1 text-gray-500 hover:text-gray-700">
            <UIcon name="i-heroicons-hand-thumb-up" />
            <span class="text-sm">{{ comment.likes }}</span>
          </button>
          <button class="flex items-center gap-1 text-gray-500 hover:text-gray-700">
            <UIcon name="i-heroicons-chat-bubble-oval-left" />
            <span class="text-sm">{{ comment.replies }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

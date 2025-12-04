<template>
  <header class="fixed top-0 left-0 right-0 border-b bg-white z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-3">
          <!-- <Menu class="w-5 h-5 text-gray-600 lg:hidden" /> -->
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gray-300 rounded" />
            <div class="w-20 h-6 bg-gray-300 rounded" />
          </div>
        </div>

        <nav class="hidden lg:flex items-center gap-6">
          <span
            v-for="item of ['Home', 'Tech', 'Business', 'Sports', 'Entertainment', 'Health', 'Science', 'Travel', 'Food', 'Style']"
            :key="item"
            class="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            {{ item }}
          </span>
        </nav>

        <div class="flex items-center gap-4">
          <div class="w-32 h-8 bg-gray-300 rounded hidden md:block" />
          <div class="w-10 h-10 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  </header>
</template>

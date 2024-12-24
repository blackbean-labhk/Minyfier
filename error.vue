<script setup>
import errorImage from './assets/images/404.svg?raw'
</script>

<template>
  <NuxtLayout name="default">
    <div class="w-full h-full max-w-[600px] mx-auto flex flex-col items-center justify-center text-center">
      <!-- Error Image -->
      <img
        src="/icon.png"
        alt="Minyfier Icon"
        class="w-56 h-56 mb-6"
      />

      <!-- Message -->
      <p class="text-lg font-semibold mb-4 text-gray-800">
        Oops! Looks like you took a wrong turn.
      </p>

      <!-- Buttons -->
      <div class="flex gap-4">
        <a
          href="https://minyfy.minyvinyl.com/makeaminy"
          class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Create a Mixtape
        </a>
        <a
          href="https://rapidconnect.minyvinyl.com/"
          class="px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-colors"
        >
          Create an EPK
        </a>
      </div>
    </div>
  </NuxtLayout>
</template>

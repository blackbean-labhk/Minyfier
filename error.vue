<script setup>
import errorImage from './assets/images/404.svg?raw'
</script>

<template>
  <NuxtLayout name="default">
    <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Icon Container */}
      <div className="mb-8">
        <img 
          src="/icon.png" 
          alt="404 Icon" 
          className="w-48 h-48 object-contain"
        />
      </div>
      
      {/* Message */}
      <h1 className="text-3xl font-bold mb-2 text-gray-900">
        Page Not Found
      </h1>
      <p className="text-xl font-medium mb-8 text-gray-700">
        Oops! Looks like you took a wrong turn.
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://minyfy.minyvinyl.com/makeaminy"
          className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          Create a Mixtape
        </a>
        <a
          href="https://rapidconnect.minyvinyl.com/"
          className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
        >
          Create an EPK
        </a>
      </div>
    </div>
  </NuxtLayout>
</template>

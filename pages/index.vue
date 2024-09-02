<template>
  <main class="flex flex-col justify-center items-center min-h-[85vh]">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">MinyVinyl</h1>
      <p class="text-lg mb-8">
        Modern mixtapes for collectors and superfans.
        <br />
        We deliver true ownership with digital playlists, and superior IRL listening experiences.
      </p>
      <div class="flex flex-col space-y-4">
        <button
          class="bg-blue-500 font-bold text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
          @click="goToMinyfy"
        >
          MINYFY YOUR PLAYLIST
        </button>
        <button
          class="bg-green-500 font-bold text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
          @click="goToCreateEPK"
        >
          CREATE AN EPK
        </button>
      </div>
      <p class="text-sm text-gray-600 mt-8 max-w-md mx-auto">
        An electronic press kit, or EPK for short, is a compilation of material to promote a film or TV project, a new album by a band, or an artist's work.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    goToMinyfy() {
      window.location.href = 'https://minyfy.subwaymusician.xyz';
    },
    goToCreateEPK() {
      // Replace with the appropriate URL for creating an EPK
      window.location.href = 'https://miny.subwaymusician.xyz';
    },
  },
};
</script>

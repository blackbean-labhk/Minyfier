<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon, XIcon } from 'vue3-simple-icons'

const email = ref(null)
onMounted(() => {
  email.value.href = email.value.href.replace('$', '@')
})
</script>

<template>
  <section class="md:pt-4">
    <div class="container flex items-center py-4 justify-between mx-auto flex-row">
      <a
        href="/"
        class="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
        title="Minyfier"
      >Minyfier</a>
      <img
        src="/icon.png"
        alt="Minyfier Icon"
        class="w-10 h-10"
      />
    </div>
  </section>
</template>

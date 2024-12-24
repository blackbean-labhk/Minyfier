<script setup>
import { BloggerIcon, GitHubIcon, GmailIcon, MastodonIcon, TelegramIcon, XIcon } from 'vue3-simple-icons'

const email = ref(null)
onMounted(() => {
  email.value.href = email.value.href.replace('$', '@')
})
</script>

<template>
  <section className="md:pt-6">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="text-xl font-black leading-none text-gray-900 select-none dark:text-gray-100 logo"
            title="Minyfier"
          >
            Minyfier
          </a>
          
          <img
            src="/icon.png"
            alt="Minyfier Icon"
            className="w-8 h-8"
          />
        </div>
      </div>
    </section>
</template>

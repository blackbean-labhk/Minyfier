<script setup>
const { title, image } = useAppConfig()
useSeoMeta({
  title: `${title}`,
  ogType: 'website',
  ogTitle: title,
  ogImage: image,
  twitterTitle: title,
  twitterImage: image,
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon-192.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#000" />
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>

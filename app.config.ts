export default defineAppConfig({
  title: 'Minyfier',
  image: 'https://go.minyvinyl.com/icon.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})

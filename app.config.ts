export default defineAppConfig({
  title: 'Miny Vinyl',
  image: 'Miny Vinyl',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})

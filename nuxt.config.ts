// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  ssr: false,
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  googleFonts: {
    display: 'swap',
    preload: true,
    families: {
      // Example: Playfair Display for headings, Inter for body
      'Playfair+Display': [400, 500, 700],
      Inter: [400, 500, 600],
    },
  },
})
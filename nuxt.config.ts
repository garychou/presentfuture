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
  content: {
    renderer: {
      anchorLinks: false // Disable automatic anchor links
    },
  },
  vite: {
    server: {
      allowedHosts: [
        '.ngrok-free.app',
        '.ngrok.io'
      ]
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport',  content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }

      ]
    }
  },
  googleFonts: {
    display: 'swap',
    preload: true,
    families: {
      // Example: Playfair Display for headings, Inter for body
      'DM+Serif+Text': [400, 500, 700],
      'Schibsted+Grotesk': [400, 500, 600],
    },
  },
})
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
      title: 'Present/Future',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport',  content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'Advisory for forward-thinking funders exploring new economic models, audience engagement, and shared experiential learning.' },

        { property: 'og:title', content: 'Present/Future' },
        { property: 'og:description', content: 'An advisory for public, philanthropic, and private funders seeking to shift incentives and unlock progress in independent media and beyond.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://presentfuture.org' }, 


        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Present/Future' },
        { name: 'twitter:description', content: 'Helping funders focus, leverage their strengths, and accelerate what works.' },

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
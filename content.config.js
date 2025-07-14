import { defineCollection } from '@nuxt/content'

export default defineCollection({
  content: {
    source: {
      include: '**/*.md'
    },
    markdown: {
      anchorLinks: false // Disable automatic anchor links
    }
  }
})
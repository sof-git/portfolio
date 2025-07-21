// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Sofiane Turki - Resume & Portfolio',
      titleTemplate: '%s | Sofiane Turki',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My personal portfolio showcasing my previous experiences and skills.' },
        { name: 'keywords', content: 'portfolio, web developer, projects, skills, resume' },
        { name: 'author', content: 'Sofiane TURKI' },
        { name: 'theme-color', content: '#003366' }, // Primary color for the theme
        { property: 'og:title', content: 'Sofiane Turki - Resume & Portfolio' },
        { property: 'og:description', content: 'My personal portfolio showcasing my previous experiences and skills.' },
        { property: 'og:url', content: 'https://votre-site.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://votre-site.com/image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Sofiane Turki - Resume & Portfolio' },
        { name: 'twitter:description', content: 'My personal portfolio showcasing my previous experiences and skills.' },
        { name: 'twitter:image', content: 'https://votre-site.com/image.jpg' }        
      ],
    },
    baseURL: '/portfolio/', // Set the base URL for the application
  },
  css: ['@/assets/css/globals.scss',
    '@/assets/css/components.scss'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@formkit/auto-animate'],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts' // options file for Vuetify
  },
  build: {
    transpile: ['vuetify-nuxt-module', '@formkit/auto-animate'],
  },
})
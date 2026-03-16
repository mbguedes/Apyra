// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [300, 400, 500, 600, 700, 800, 900] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Apyra Digital — Consultoria de Mídia Programática e Performance',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Consultoria de Mídia Programática e Performance. Gestão estratégica, auditoria técnica e performance baseada em dados para escalar seu lucro.' },
        { name: 'theme-color', content: '#0B0E14' },
        { property: 'og:title', content: 'Apyra Digital — Consultoria de Mídia Programática e Performance' },
        { property: 'og:description', content: 'Expertise de grande agência para escalar seu lucro. Gestão de tráfego, consultoria de marketing e auditoria de campanhas.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/logo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})

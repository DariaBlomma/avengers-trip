// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/styles/global.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles" as *;'
        }
      }
    }
  },
  app: {
    head: {
      title: 'Avengers Trip',
    }
  }
})

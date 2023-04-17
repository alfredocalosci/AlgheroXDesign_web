// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    // css:['@/assets/_colors.scss'],
 
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/_colors.scss" as *;'
            }
          }
        }
      }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: true,
   
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    /*
   css: ['@/assets/css/main.css'],
   */
   
   app:{
    head: {
      meta: [
        { name: 'content-language', content: 'it' },
        { name: 'author', content: 'AlgheroXDesign' },
      ]
    },
    
    //  baseURL:"/axd/"
    
   },

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

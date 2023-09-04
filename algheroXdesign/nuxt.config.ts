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
      ls: [
        { name: 'content-language', content: 'it' },
        { name: 'author', content: 'AlgheroXDesign' },
        { name: 'icon', content: 'favicon.ico' },
        { name: 'apple-touch-icon', content: 'apple-icon-76x76.png' },
        { name: 'og:url', content: 'http://algheroxdesign.it/' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'AlgheroXDesign' },
        { name: 'og:image', content: 'http://algheroxdesign.it/img/og-graph.png' },
        { name: 'og:image:type', content: 'image/png' },
        { name: 'og:image:width', content: '1200' },
        { name: 'og:image:height', content: '630' },
        { name: 'twitter:image', content: 'http://algheroxdesign.it/img/og-graph.png' },
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

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './assets/**/*.{vue,js,css}',
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    theme: {
        fontFamily: {
            'sans': ['basier_circle', 'sans-serif']
          },
      extend:{},
    },
    plugins: [],
  }
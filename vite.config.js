// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pizza: resolve(__dirname, 'recipes/pizza.html'),
        doughnut: resolve(__dirname, 'recipes/doughnut.html'),
        spaghetti: resolve(__dirname, 'recipes/spaghetti.html'),
      },
    },
  },
})

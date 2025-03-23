import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.tsx'],
    }),
  ],
  // Ajouter ces configurations supplémentaires
  server: {
    hmr: {
      // Essayez ces options pour résoudre les problèmes de connexion HMR
      protocol: 'ws',
      host: 'localhost',
      timeout: 5000,
      overlay: true,
    },
    watch: {
      usePolling: true, // Utile sur certains systèmes Linux
      interval: 1000,
    },
  },
  optimizeDeps: {
    include: ['@kitajs/html'],
  },
})

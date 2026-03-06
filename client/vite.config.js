import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // autoUpdate will cause the service worker to check for updates
      // and apply them automatically.
      registerType: 'autoUpdate',

      // include static assets in the service worker precache (adjust as needed)
      includeAssets: ['**/*', 'assets/**/*'],

      // Workbox options — force new SW to activate immediately
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        // optional: don't cache navigation responses, fallback handled by index.html
        navigateFallback: '/',
      },

      // Optional dev option to avoid SW in local dev environment:
      devOptions: {
        enabled: false
      },

      // standard web app manifest
      manifest: {
        name: 'BridgeCRM',
        short_name: 'BridgeCRM',
        description: 'A PWA CRM made with MERN stack',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],

  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
})
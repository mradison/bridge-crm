import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({  
      registerType: 'prompt',  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
      manifest: {  
  name: 'BridgeCRM',  
        short_name: 'BridgeCRM',  
        description: 'A PWS CRM made with MERN stack',  
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
        ServiceWorker: {
          events: true,
          updateViaCache: 'none',
          src: 'service-worker.js'
        },
      },  
    }),
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target:'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }
})

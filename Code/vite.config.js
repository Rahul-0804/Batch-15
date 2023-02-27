import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   https: true,
  // },
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    strategies: 'generateSW',
    includeAssets: ['logo.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
          manifest: {
            name: 'MyFolio',
            short_name: 'MyFolio',
            start_url: '/',
            display: 'standalone',
            background_color: '#ffffff',
            lang: 'en',
            scope: '/',
            icons: [
              {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable',
              },
              {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
              },
           ],
            theme_color: '#ffffff',
          },
        }
        ),]
})

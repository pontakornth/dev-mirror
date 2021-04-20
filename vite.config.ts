import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteFont from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    ViteFont({
      google: {
        families: [{
          name: 'Barlow',
          styles: 'ital,wght@0,400;0,700;1,400;1,700'
        }]
      }
    })
  ]
})

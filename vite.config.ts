import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    rollupOptions: {
      external: [/\.s?css$/]
    }
  },
  server: {
    port: 8000
  },
  
})

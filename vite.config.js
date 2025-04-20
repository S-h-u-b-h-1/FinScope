import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/FinScope',
  plugins: [
    tailwindcss(),
  ]
})
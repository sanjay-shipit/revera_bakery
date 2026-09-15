import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative base so the build works when served from a project subpath
  // (e.g. GitHub Pages at /revera_bakery/) as well as at a domain root.
  base: './',
  plugins: [react(), tailwindcss()],
})

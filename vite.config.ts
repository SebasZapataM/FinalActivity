import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FinalActivity/',   // 👈 Agrega esta línea
  plugins: [react()],
})

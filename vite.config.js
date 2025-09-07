import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    watch: {
      usePolling: true, // ← active le polling pour /mnt/* sous WSL
      interval: 100,    // optionnel : vérifie toutes les 100ms
    },
  },
})

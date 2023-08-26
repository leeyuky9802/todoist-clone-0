/** @type {import('vite').UserConfig} */
import react from '@vitejs/plugin-react'
export default {
  server: {
      port: 8080
  },
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
}
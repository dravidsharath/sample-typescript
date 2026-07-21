import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'health-check',
      configureServer(server) {
        server.middlewares.use('/health', (req, res) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ status: 'healthy' }))
        })
      }
    }
  ],
  server: {
    port: 6713,
    host: '0.0.0.0'
  }
})

import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cardapioAlacarte: resolve(__dirname, 'cardapio-alacarte.html'),
        cardapioDegustacao: resolve(__dirname, 'cardapio-degustacao.html'),
        reservas: resolve(__dirname, 'reservas.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
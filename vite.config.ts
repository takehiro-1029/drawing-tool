import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 1234,
    open: true,
  },
  resolve: {
    alias: {
      // https://qiita.com/koichi0909/items/648d1cfb415d16638509
      "~/": `${__dirname}/src/`,
    },
  },
  plugins: [react()]
})

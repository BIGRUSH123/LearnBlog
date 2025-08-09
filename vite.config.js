import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/LeranBlog/', // GitHub Pages 部署时需要这个路径
  build: {
    outDir: 'dist', 
    sourcemap: false
  }
})

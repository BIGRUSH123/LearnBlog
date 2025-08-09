import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/LeranBlog/', // GitHub Pages 部署时需要这个路径
  build: {
    outDir: 'docs', // 改为 docs 目录，可以直接从 main 分支部署
    sourcemap: false
  }
})

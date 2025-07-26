import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@platform/shared-utils', '@platform/shared-types']
  },
  build: {
    commonjsOptions: {
      include: [/shared-utils/, /shared-types/, /node_modules/]
    },
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@platform/shared-utils': '../../packages/shared-utils/dist/index.js',
      '@platform/shared-types': '../../packages/shared-types/dist/index.d.ts'
    }
  }
})
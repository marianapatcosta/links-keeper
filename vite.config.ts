import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import libCss from 'vite-plugin-libcss'
// @ts-ignore
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/links-keeper/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [dts({}), react(), libCss()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/_index.scss";`,
      },
    },
  },
  esbuild: {
    drop: ['debugger'],
    pure: [
      'console.log',
      'console.error',
      'console.warn',
      'console.debug',
      'console.trace',
    ],
  },
  build: {
    target: 'esnext',
    manifest: true,
    minify: undefined,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LinksKeeper',
      fileName: (format) => `links-keeper.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})

import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/static\/js\/.*\.js$/) || id.includes('node_modules')) return null;
        return transformWithEsbuild(code, id.replace(/\.js$/, '.jsx'), {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    react(),
  ],
  root: '.',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    force: true,
    entries: ['index.html'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  publicDir: './public',
  srcDir: './source',
  outDir: './build',
  server: {
    port: 3000,
    host: true,
  },
  devToolbar: {
    enabled: false
  },
});
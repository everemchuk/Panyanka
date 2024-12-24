import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

export default defineConfig({
  publicDir: './public',
  srcDir: './source',
  outDir: './build',
  server: {
    port: 3000,
    host: true,
  },
  integrations: [react()],
  devToolbar: {
    enabled: false
  },
});
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: '/solidjs-js-tsdk-template',
  plugins: [
    // Uncomment the following line to enable solid-devtools.
    // For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    // devtools(),
    solidPlugin(),
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
    // basicSsl(),
  ],
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  server: {
    // Uncomment this line if you want to expose your dev server and access it from the devices
    // in the same network.
    // host: true,
  },
  resolve: {
    alias: {
      '@': resolve(dirname(fileURLToPath(import.meta.url)), './src'),
    }
  },
});

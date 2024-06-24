import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

let BASE = 'branik-servis';
let SITE = 'https://knlju.github.io/';

if (import.meta.env.DEV) {
  BASE = '/';
  SITE = 'http://localhost:3000/';
}

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: SITE,
  base: BASE,
});

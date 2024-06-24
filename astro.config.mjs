import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import relativeLinks from "astro-relative-links";
let BASE = '/branik-servis';
let SITE = 'https://knlju.github.io';
if (import.meta.env.DEV) {
  BASE = '/branik-servis';
  SITE = 'http://localhost:3000';
}


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), relativeLinks()],
  site: SITE,
  base: BASE,
  output: "static"
});
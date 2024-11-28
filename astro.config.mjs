// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://kolostring.github.io',
  base: 'tai-fund-fiscal-initiative',
  integrations: [react(), tailwind() ]
});
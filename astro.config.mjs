import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ config: './tailwind.config.mjs' }), mdx()],
  site: 'https://ann2ppmg.github.io', // Твоето име в GitHub
  base: '/portfolio', // Името на проекта (repo-то) в GitHub
});
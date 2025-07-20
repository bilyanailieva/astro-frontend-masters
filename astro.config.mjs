import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  experimental: {
    hybridOutput: true
  },
  site: 'https://astro-frontend-masters-bilyanailieva.netlify.app',
  integrations: [react({
    include: ['**/*.react.tsx', '**/*.react.jsx']
  }), solid({
    include: ['**/*.solid.tsx', '**/*.solid.jsx']
  })],
  adapter: netlify()
});
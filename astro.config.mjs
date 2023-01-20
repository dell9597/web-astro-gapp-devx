import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: 'https://geeesy.github.io',
  base: '/web-astro-gapp-devx',
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), lit()]
});
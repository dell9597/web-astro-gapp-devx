import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import lit from "@astrojs/lit";

// https://astro.build/config
// import image from "@astrojs/image";

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
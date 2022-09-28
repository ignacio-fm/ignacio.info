import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://ignacio.info',
  experimental: {
    integrations: true
  },
  output: "server",
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    image()
  ],
});
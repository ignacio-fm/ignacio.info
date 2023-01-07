import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import remarkGfm from "remark-gfm";

// https://astro.build/config
import rehypePrism from "@mapbox/rehype-prism";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://ignacio.info",
  output: "server",
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [
    react(),
    image(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    }),
    sitemap(),
  ],
});

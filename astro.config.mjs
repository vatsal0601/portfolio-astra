import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

export default defineConfig({
  integrations: [
    tailwind(),
    preact(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "one-dark-pro" },
      remarkPlugins: [remarkReadingTime],
    }),
  ],
});

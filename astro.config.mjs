// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  site: "https://kelsiesmurphy.com",
  integrations: [mdx(), sitemap(), tailwind(), react(), lenis()],
});
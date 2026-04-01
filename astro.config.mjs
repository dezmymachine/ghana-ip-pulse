import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [
    tailwind(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],
  vite: {
    optimizeDeps: {
      include: [
        "react/compiler-runtime",
        "lodash/isObject.js",
        "lodash/groupBy.js",
        "lodash/keyBy.js",
        "lodash/partition.js",
        "lodash/sortedIndex.js",
      ],
    },
  },
});

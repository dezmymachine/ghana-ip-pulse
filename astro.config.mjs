import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sanity from "@sanity/astro";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  ""
);

const siteUrl = "https://ghanaippulse.com";

// Blog posts are server-rendered, so Astro can't discover them; list them from Sanity.
async function getBlogUrls() {
  if (!siteUrl || !PUBLIC_SANITY_PROJECT_ID) return [];
  try {
    const query = encodeURIComponent('*[_type == "post" && defined(slug.current)].slug.current');
    const res = await fetch(
      `https://${PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2025-01-28/data/query/${PUBLIC_SANITY_DATASET}?query=${query}`
    );
    const { result = [] } = await res.json();
    return result.map((slug) => new URL(`/blog/${slug}/`, siteUrl).href);
  } catch (err) {
    console.warn("[sitemap] could not fetch blog slugs from Sanity:", err.message);
    return [];
  }
}

export default defineConfig({
  site: siteUrl,
  output: "server",
  adapter: netlify({
    edgeFunctions: false,
  }),
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/studio"),
      customPages: await getBlogUrls(),
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    }),
  ],
});

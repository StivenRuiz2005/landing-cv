import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://stiven-ruiz-dev.vercel.app",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-CO", en: "en-US" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});

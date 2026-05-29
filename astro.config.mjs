import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://150receitascopao.netlify.app',
  output: 'static',
  adapter: vercel({
    imageService: false,
    webAnalytics: { enabled: false },
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    cssMinify: 'esbuild',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    compress({
      CSS: false,
      Image: false,
      HTML: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
});

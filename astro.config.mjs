import { defineConfig, passthroughImageService } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { rehypeBaseLinks } from './src/lib/rehype-base-links.mjs';
import { remarkDisplayMath } from './src/lib/remark-display-math.mjs';

// GitHub Pages serves a project from /repo-name/, so the deploy workflow sets
// BASE_PATH and SITE_URL. Vercel and local development need neither.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.org',
  base,
  // The site only uses SVG images, so the heavy image optimizer isn't needed.
  image: { service: passthroughImageService() },
  devToolbar: { enabled: false },
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      remarkPlugins: [remarkMath, remarkDisplayMath],
      rehypePlugins: [rehypeKatex, [rehypeBaseLinks, { base }]],
    }),
  },
});

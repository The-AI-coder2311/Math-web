import { defineConfig, passthroughImageService } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { rehypeBaseLinks } from './src/lib/rehype-base-links.mjs';
import { rehypeGlossaryLinks } from './src/lib/rehype-glossary-links.mjs';
import { rehypeTables } from './src/lib/rehype-tables.mjs';
import { remarkDisplayMath } from './src/lib/remark-display-math.mjs';
import { writeLessonData } from './scripts/build-lesson-data.mjs';

// GitHub Pages serves a project from /repo-name/, so the deploy workflow sets
// BASE_PATH and SITE_URL. Vercel and local development need neither.
const base = process.env.BASE_PATH || '/';

// Keeps src/data/lessons.json up to date, including while the dev server is running.
const lessonData = {
  name: 'lesson-data',
  hooks: {
    'astro:config:setup': () => writeLessonData(),
    'astro:server:setup': ({ server }) => {
      const refresh = (file) => {
        if (/content[\\/].*(lessons|problems|pathway)/.test(file)) writeLessonData();
      };
      ['add', 'change', 'unlink'].forEach((event) => server.watcher.on(event, refresh));
    },
  },
};

export default defineConfig({
  // The real web address goes here (or in SITE_URL). Canonical links, sitemap.xml,
  // and robots.txt all get their addresses from it.
  site: process.env.SITE_URL || 'https://example.org',
  base,
  integrations: [lessonData],
  // The site only uses SVG images, so the heavy image optimizer isn't needed.
  image: { service: passthroughImageService() },
  devToolbar: { enabled: false },
  markdown: {
    syntaxHighlight: false,
    processor: unified({
      remarkPlugins: [remarkMath, remarkDisplayMath],
      rehypePlugins: [rehypeKatex, [rehypeBaseLinks, { base }], [rehypeGlossaryLinks, { base }], rehypeTables],
    }),
  },
});

// Links glossary words in lessons. For each term in src/content/<lang>/glossary.yaml,
// the first time the word (or one of its `forms`) appears in the text of the lesson
// named by its `lesson` setting, it becomes a link to that term on the Glossary page.
// Words inside headings, links, math, summaries, and code are left alone.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

/** The id used for a term on the Glossary page, such as "perfect-square". */
export const glossaryId = (term) =>
  term
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const termsFor = new Map();
function lessonTerms(lang, lesson) {
  if (!termsFor.has(lang)) {
    const file = join('src/content', lang, 'glossary.yaml');
    const terms = existsSync(file) ? parse(readFileSync(file, 'utf8')).terms ?? [] : [];
    termsFor.set(lang, terms);
  }
  return termsFor.get(lang).filter((term) => term.lesson === lesson);
}

const SKIP = new Set(['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'summary', 'code', 'pre', 'script', 'style', 'svg']);
const escape = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function rehypeGlossaryLinks({ base = '/', defaultLang = 'en' } = {}) {
  const prefix = base.replace(/\/$/, '');
  return (tree, file) => {
    const path = String(file.path || file.history?.[0] || '').replace(/\\/g, '/');
    const match = path.match(/content\/([^/]+)\/units\/([^/]+)\/lessons\/([^/]+)\.md$/);
    if (!match) return;
    const [, lang, unit, lesson] = match;
    const pending = lessonTerms(lang, `${unit}/${lesson}`);
    if (!pending.length) return;
    const page = `${prefix}${lang === defaultLang ? '' : `/${lang}`}/glossary/`;

    const linkFirst = (term) => {
      const words = [term.term, ...(term.forms ?? [])].sort((a, b) => b.length - a.length).map(escape);
      const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])(${words.join('|')})(?![\\p{L}\\p{N}])`, 'iu');
      const visit = (node) => {
        if (node.type === 'element') {
          const classes = [].concat(node.properties?.className ?? []);
          if (SKIP.has(node.tagName) || classes.some((name) => String(name).startsWith('katex'))) return false;
        }
        const children = node.children ?? [];
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          // A bold or italic word that is exactly the term: link the whole word, so the
          // link sits inside the sentence rather than alone inside the bold text.
          const only = child.type === 'element' && ['strong', 'em', 'b'].includes(child.tagName) && child.children?.length === 1 && child.children[0].type === 'text' ? child.children[0].value : null;
          const whole = only?.match(pattern);
          if (whole && whole.index === 0 && whole[1] === '' && whole[2].length === only.trim().length) {
            children[i] = {
              type: 'element',
              tagName: 'a',
              properties: { href: `${page}#${glossaryId(term.term)}`, className: ['glossary-link'] },
              children: [child],
            };
            return true;
          }
          if (child.type === 'text') {
            const found = child.value.match(pattern);
            if (!found) continue;
            const start = found.index + found[1].length;
            const end = start + found[2].length;
            const link = {
              type: 'element',
              tagName: 'a',
              properties: { href: `${page}#${glossaryId(term.term)}`, className: ['glossary-link'] },
              children: [{ type: 'text', value: child.value.slice(start, end) }],
            };
            children.splice(i, 1, { type: 'text', value: child.value.slice(0, start) }, link, {
              type: 'text',
              value: child.value.slice(end),
            });
            return true;
          }
          if (visit(child)) return true;
        }
        return false;
      };
      visit(tree);
    };
    pending.forEach(linkFirst);
  };
}

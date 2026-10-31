import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';

const processor = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify);

/** Renders Markdown and math stored in YAML fields, such as answer choices. */
export const renderMarkdown = (source: string) => String(processor.processSync(source));

/** Same as renderMarkdown, without the wrapping paragraph, for short text. */
export const renderInline = (source: string) =>
  renderMarkdown(source).replace(/^<p>/, '').replace(/<\/p>\s*$/, '');

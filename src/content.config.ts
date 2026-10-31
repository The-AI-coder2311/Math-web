import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const base = './src/content';

// Numbers in YAML (like `choices: [7, 9, 12]`) are read as text so they display as written.
const text = z.coerce.string();

const pathway = defineCollection({
  loader: glob({ pattern: '*/pathway.yaml', base }),
  schema: z.object({
    levels: z.array(
      z.object({
        title: z.string(),
        blurb: z.string(),
        contest: z.enum(['AMC 8', 'AMC 10', 'AMC 12']),
        units: z.array(z.object({ slug: z.string(), title: z.string(), blurb: z.string() })),
      }),
    ),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '*/units/*/lesson.md', base }),
  schema: z.object({ title: z.string(), summary: z.string(), minutes: z.number() }),
});

const problems = defineCollection({
  loader: glob({ pattern: '*/units/*/problems/*.md', base }),
  schema: z.object({
    order: z.number(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    choices: z.array(text).min(2).max(6),
    answer: z.enum(['A', 'B', 'C', 'D', 'E', 'F']),
    verify: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*/pages/*.md', base }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

const problemSets = defineCollection({
  loader: glob({ pattern: '*/problem-sets/*.yaml', base }),
  schema: z.object({
    week: z.number(),
    title: z.string(),
    summary: z.string(),
    teacherNote: z.string(),
    problems: z.array(
      z.object({
        question: z.string(),
        answer: text,
        verify: z.string().optional(),
        explanation: z.string(),
      }),
    ),
  }),
});

export const collections = { pathway, lessons, problems, pages, problemSets };

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
        contest: z.enum(['AMC 8', 'AMC 10', 'AMC 12', 'AIME']),
        difficulty: z.string(),
        competitions: z.array(z.enum(['MATHCOUNTS', 'AMC 8', 'AMC 10', 'AMC 12', 'AIME'])),
        units: z.array(
          z.object({
            slug: z.string(),
            title: z.string(),
            blurb: z.string(),
            // A review unit has practice problems but no lessons.
            review: z.boolean().optional(),
          }),
        ),
      }),
    ),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '*/units/*/lessons/*.md', base }),
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
    // The lesson file this problem practices, such as 02-when-order-matters.
    lesson: z.string().optional(),
    // In a review unit: the unit and lesson a problem comes from, such as counting/03-overcount-then-divide.
    from: z.string().optional(),
    // For each wrong choice, what a student who picked it probably did.
    mistakes: z.record(z.string(), z.string()).optional(),
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

const contests = defineCollection({
  loader: glob({ pattern: '*/contests/*/contest.yaml', base }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    style: z.enum(['AMC 8', 'AMC 10']),
    // The pathway level whose ideas the contest uses, so the pathway page can link to it.
    level: z.number().int().min(1),
    order: z.number(),
    minutes: z.number(),
  }),
});

const contestProblems = defineCollection({
  loader: glob({ pattern: '*/contests/*/problems/*.md', base }),
  schema: z.object({
    order: z.number(),
    topic: z.string(),
    from: z.string(),
    choices: z.array(text).length(5),
    answer: z.enum(['A', 'B', 'C', 'D', 'E']),
    verify: z.string(),
  }),
});

const teacherPlans = defineCollection({
  loader: glob({ pattern: '*/teacher-plans.yaml', base }),
  schema: z.object({
    plans: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        competition: z.string(),
        summary: z.string(),
        weeks: z.array(z.object({ unit: z.string(), tip: z.string() })),
        finish: z.object({ review: z.string(), contest: z.string() }),
      }),
    ),
  }),
});

const formulas = defineCollection({
  loader: glob({ pattern: '*/formulas.yaml', base }),
  schema: z.object({
    sections: z.array(
      z.object({
        slug: z.string(),
        title: z.string(),
        intro: z.string(),
        groups: z.array(
          z.object({
            title: z.string(),
            // The lesson that teaches this group, such as counting/03-overcount-then-divide.
            lesson: z.string().optional(),
            stretch: z.boolean().optional(),
            table: z
              .object({ caption: z.string(), headers: z.array(z.string()), rows: z.array(z.array(text)) })
              .optional(),
            items: z
              .array(
                z.object({
                  name: z.string(),
                  math: z.string().optional(),
                  text: z.string().optional(),
                  note: z.string().optional(),
                  stretch: z.boolean().optional(),
                  // The lesson that teaches this one entry, if its group has no lesson or a different one.
                  lesson: z.string().optional(),
                }),
              )
              .optional(),
          }),
        ),
        examples: z.array(
          z.object({ question: z.string(), solution: z.string(), verify: z.string(), answer: text }),
        ),
      }),
    ),
    tips: z.array(z.string()),
    traps: z.array(z.string()),
  }),
});

// The placement quiz at /pathway/start/.
const placement = defineCollection({
  loader: glob({ pattern: '*/placement.yaml', base }),
  schema: z.object({
    questions: z.array(
      z.object({
        level: z.number().int().min(1),
        question: z.string(),
        choices: z.array(text).min(2).max(5),
        answer: z.enum(['A', 'B', 'C', 'D', 'E']),
        verify: z.string(),
        explanation: z.string(),
      }),
    ),
  }),
});

// Practice questions for the contest strategy lesson.
const strategy = defineCollection({
  loader: glob({ pattern: '*/strategy.yaml', base }),
  schema: z.object({
    questions: z.array(
      z.object({
        slug: z.string(),
        question: z.string(),
        choices: z.array(text).min(2).max(5),
        answer: z.enum(['A', 'B', 'C', 'D', 'E']),
        verify: z.string(),
        hint: z.string(),
        solution: z.string(),
        mistakes: z.record(z.string(), z.string()).optional(),
      }),
    ),
  }),
});

// Words students might not know yet, linked from the lesson where each first appears.
const glossary = defineCollection({
  loader: glob({ pattern: '*/glossary.yaml', base }),
  schema: z.object({
    terms: z.array(
      z.object({
        term: z.string(),
        // Other spellings to link in lessons, such as "factors" for "factor".
        forms: z.array(z.string()).optional(),
        definition: z.string(),
        example: z.string().optional(),
        // The lesson where the word first appears, such as number-sense/04-factors-primes-leftovers.
        lesson: z.string(),
      }),
    ),
  }),
});

export const collections = {
  pathway,
  lessons,
  problems,
  pages,
  problemSets,
  contests,
  contestProblems,
  teacherPlans,
  formulas,
  placement,
  strategy,
  glossary,
};

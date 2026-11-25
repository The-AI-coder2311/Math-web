import { parse, stringify } from 'yaml';
import pathwayYaml from '../../../content/en/pathway.yaml?raw';
import { contentEditor } from '../../../competitions.config';

// Builds the content editor's settings from the content folders, so a new unit or practice
// contest shows up in the editor by itself. It covers the English content. Spanish files
// can still be edited on GitHub.

const root = 'src/content/en';
const files = Object.keys(import.meta.glob('/src/content/en/{units,contests}/*/**/*.{md,yaml}'));
/** The folder names directly inside units/ or contests/, like "counting". */
const dirs = (section: 'units' | 'contests') =>
  [...new Set(files.map((file) => file.split('/')).filter((parts) => parts[4] === section).map((parts) => parts[5]))].sort();
const hasFolder = (path: string) => files.some((file) => file.startsWith(`/${path}/`));

type Level = { title: string; units: { slug: string; title: string }[] };
const levels = (parse(pathwayYaml) as { levels: Level[] }).levels;
const unitTitle = new Map(levels.flatMap((level) => level.units.map((unit) => [unit.slug, unit.title] as const)));

// Markdown is edited as plain text so math like $\frac{1}{2}$ is saved exactly as typed.
const body = { name: 'body', label: 'Text', widget: 'markdown', modes: ['raw'] };
const choices = {
  name: 'choices',
  label: 'Answer choices',
  widget: 'list',
  hint: 'In order: A, B, C, and so on. Numbers go from smallest to largest.',
  min: 2,
  max: 6,
};
const letters = (n: number) => 'ABCDEF'.slice(0, n).split('');

const lessonFields = [
  { name: 'title', label: 'Title', widget: 'string' },
  { name: 'summary', label: 'Summary', widget: 'string', hint: 'One sentence for search results.' },
  { name: 'minutes', label: 'Minutes to read', widget: 'number', value_type: 'int' },
  body,
];

const problemFields = [
  { name: 'order', label: 'Order', widget: 'number', value_type: 'int' },
  { name: 'difficulty', label: 'Difficulty', widget: 'select', options: ['easy', 'medium', 'hard'] },
  { name: 'lesson', label: 'Lesson file it practices', widget: 'string', required: false, hint: 'Like 01-multiply-choices.' },
  { name: 'from', label: 'Comes from (review units)', widget: 'string', required: false, hint: 'Like counting/03-overcount-then-divide.' },
  choices,
  { name: 'answer', label: 'Correct answer', widget: 'select', options: letters(6) },
  {
    name: 'mistakes',
    label: 'Mistake notes',
    widget: 'object',
    required: false,
    hint: 'For each wrong choice, what a student who picked it probably did. Leave the correct letter empty.',
    fields: letters(6).map((l) => ({ name: l, label: l, widget: 'string', required: false })),
  },
  { name: 'verify', label: 'Verify code', widget: 'string', required: false, hint: 'One line of JavaScript that works out the answer. See the README.' },
  body,
];

const contestProblemFields = [
  { name: 'order', label: 'Order', widget: 'number', value_type: 'int' },
  { name: 'topic', label: 'Topic', widget: 'string' },
  { name: 'from', label: 'Lesson it comes from', widget: 'string', hint: 'Like number-sense/02-mental-math.' },
  { ...choices, min: 5, max: 5 },
  { name: 'answer', label: 'Correct answer', widget: 'select', options: letters(5) },
  { name: 'verify', label: 'Verify code', widget: 'string' },
  body,
];

const collections = [
  {
    name: 'pages',
    label: 'Site pages',
    label_singular: 'Page',
    folder: `${root}/pages`,
    extension: 'md',
    format: 'frontmatter',
    create: false,
    delete: false,
    fields: [
      { name: 'title', label: 'Title', widget: 'string' },
      { name: 'description', label: 'Description', widget: 'string', hint: 'One sentence for search results.' },
      body,
    ],
  },
  ...dirs('units').flatMap((unit) => {
    const label = unitTitle.get(unit) ?? unit;
    const sets = [];
    if (hasFolder(`${root}/units/${unit}/lessons`)) {
      sets.push({
        name: `lessons-${unit}`,
        label: `${label}: lessons`,
        label_singular: 'Lesson',
        folder: `${root}/units/${unit}/lessons`,
        extension: 'md',
        format: 'frontmatter',
        create: true,
        slug: { editable: true },
        identifier_field: 'title',
        sortable_fields: ['slug', 'title'],
        hint: 'The number at the start of the file name sets the order, like 02-when-order-matters. Never rename a file once it is live.',
        fields: lessonFields,
      });
    }
    sets.push({
      name: `problems-${unit}`,
      label: `${label}: problems`,
      label_singular: 'Problem',
      folder: `${root}/units/${unit}/problems`,
      extension: 'md',
      format: 'frontmatter',
      create: true,
      slug: { editable: true },
      identifier_field: 'order',
      summary: '{{order}}. {{slug}} ({{difficulty}})',
      sortable_fields: ['order', 'difficulty'],
      hint: 'Never rename a problem file once it is live: students’ saved progress uses the name.',
      fields: problemFields,
    });
    return sets;
  }),
  {
    name: 'contest-settings',
    label: 'Practice contests: settings',
    files: dirs('contests').map((contest) => ({
      name: contest,
      label: contest,
      file: `${root}/contests/${contest}/contest.yaml`,
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'summary', label: 'Summary', widget: 'string' },
        { name: 'style', label: 'Style', widget: 'select', options: ['AMC 8', 'AMC 10'] },
        { name: 'level', label: 'Pathway level it uses', widget: 'number', value_type: 'int', min: 1 },
        { name: 'order', label: 'Order', widget: 'number', value_type: 'int' },
        { name: 'minutes', label: 'Minutes', widget: 'number', value_type: 'int' },
      ],
    })),
  },
  ...dirs('contests').map((contest) => ({
    name: `contest-${contest}`,
    label: `Practice contest: ${contest}`,
    label_singular: 'Question',
    folder: `${root}/contests/${contest}/problems`,
    extension: 'md',
    format: 'frontmatter',
    create: true,
    slug: { editable: true },
    identifier_field: 'order',
    summary: '{{order}}. {{topic}}',
    sortable_fields: ['order'],
    fields: contestProblemFields,
  })),
  {
    name: 'problem-sets',
    label: 'Printable problem sets',
    label_singular: 'Problem set',
    folder: `${root}/problem-sets`,
    extension: 'yaml',
    format: 'yaml',
    create: true,
    slug: { editable: true },
    identifier_field: 'title',
    summary: 'Week {{week}}: {{title}}',
    sortable_fields: ['week'],
    fields: [
      { name: 'week', label: 'Week', widget: 'number', value_type: 'int' },
      { name: 'title', label: 'Title', widget: 'string' },
      { name: 'summary', label: 'Summary', widget: 'string' },
      { name: 'teacherNote', label: 'Note for teachers', widget: 'text' },
      {
        name: 'problems',
        label: 'Problems',
        widget: 'list',
        summary: '{{fields.question}}',
        fields: [
          { name: 'question', label: 'Question', widget: 'text' },
          { name: 'answer', label: 'Answer', widget: 'string' },
          { name: 'verify', label: 'Verify code', widget: 'string', required: false },
          { name: 'explanation', label: 'Explanation', widget: 'text' },
        ],
      },
    ],
  },
];

export function GET() {
  const config = {
    backend: {
      name: 'github',
      repo: contentEditor.repo,
      branch: contentEditor.branch,
      // Sign in with a GitHub personal access token. Nothing secret is stored in the site,
      // and GitHub only lets people with write access to the repository save changes.
      auth_methods: ['token'],
      commit_messages: {
        create: 'Add {{collection}} "{{slug}}" from the content editor',
        update: 'Update {{collection}} "{{slug}}" from the content editor',
        delete: 'Delete {{collection}} "{{slug}}" from the content editor',
        uploadMedia: 'Upload "{{path}}" from the content editor',
        deleteMedia: 'Delete "{{path}}" from the content editor',
      },
    },
    site_url: new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href,
    media_folder: 'public/images',
    public_folder: '/images',
    output: { omit_empty_optional_fields: true },
    collections,
  };
  return new Response(
    `# Made by src/pages/admin/content/config.yml.ts when the site builds. Don't edit the built copy.\n${stringify(config, { lineWidth: 0, aliasDuplicateObjects: false })}`,
    { headers: { 'Content-Type': 'application/yaml; charset=utf-8' } },
  );
}

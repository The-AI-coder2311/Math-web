// Writes src/data/lessons.json, the one file that lists every lesson with its topic,
// difficulty, time, and competition. Don't edit that file by hand. It's rebuilt from
// pathway.yaml and the lesson files whenever the site runs or builds, so a new
// lesson reaches the teacher index, the weekly plans, and the sitemap page by itself.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

const CONTENT = 'src/content';
const OUTPUT = 'src/data/lessons.json';

const markdownIn = (dir) => (existsSync(dir) ? readdirSync(dir).filter((name) => name.endsWith('.md')).sort() : []);
const settingsOf = (file) => parse(readFileSync(file, 'utf8').replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n/)[1]);

function languageData(lang) {
  const { levels } = parse(readFileSync(join(CONTENT, lang, 'pathway.yaml'), 'utf8'));
  const units = [];
  const lessons = [];
  levels.forEach((level, index) => {
    for (const unit of level.units) {
      const folder = join(CONTENT, lang, 'units', unit.slug);
      const lessonFiles = markdownIn(join(folder, 'lessons'));
      const problems = markdownIn(join(folder, 'problems')).length;
      const shared = {
        level: index + 1,
        levelTitle: level.title,
        difficulty: level.difficulty,
        competitions: level.competitions,
      };
      units.push({ ...shared, slug: unit.slug, title: unit.title, review: Boolean(unit.review), lessons: lessonFiles.length, problems });
      for (const file of lessonFiles) {
        const { title, summary, minutes } = settingsOf(join(folder, 'lessons', file));
        const slug = file.replace(/\.md$/, '');
        lessons.push({ ...shared, unit: unit.slug, topic: unit.title, slug, title, summary, minutes, path: `pathway/${unit.slug}/${slug}/` });
      }
    }
  });
  return { units, lessons };
}

export function writeLessonData() {
  const languages = readdirSync(CONTENT).filter((name) => existsSync(join(CONTENT, name, 'pathway.yaml')));
  const json = `${JSON.stringify(Object.fromEntries(languages.map((lang) => [lang, languageData(lang)])), null, 2)}\n`;
  // Only write a real change, so the dev server doesn't reload for nothing.
  if (existsSync(OUTPUT) && readFileSync(OUTPUT, 'utf8') === json) return;
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, json);
}

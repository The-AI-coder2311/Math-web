// Interface text for the Machine Learning path at /ml/. The path is English only for
// now (see `untranslated` in config.ts), so this file has no Spanish twin yet.
export const mlText = {
  title: 'Machine Learning Path',
  description:
    'A free path from the math behind machine learning to neural networks, transformers, and generative models, with concept and math questions for every topic.',
  intro:
    'This path teaches how machine learning works, one topic at a time. Every topic has a short lesson and two sets of practice questions:',
  setsIntro: [
    { name: 'Concepts', text: 'what the ideas mean, when to use them, and what goes wrong.' },
    { name: 'Math', text: 'the calculations behind them, worked out by hand with small numbers.' },
  ],
  prereq:
    'The math questions use algebra, a little probability, and some derivatives. Level 1 teaches the pieces you need, so start there if those words are new.',
  sources:
    'The topic order follows the Machine Learning Terms & Concepts glossary and the chapters of Understanding Deep Learning by Simon J. D. Prince, which is free to read at udlbook.com. Every lesson and question here is original.',
  listLabel: (level: string) => `Topics in ${level}, in order`,
  start: 'Start this topic',
  comingSoon: 'Coming soon',
  levelStatus: (solved: string, total: string) => `${solved} of ${total} questions solved`,
  setName: { concepts: 'Concept', math: 'Math' },
  setTitle: (set: string, unit: string) => `${unit}: ${set} questions`,
  setDescription: (set: 'concepts' | 'math', unit: string) =>
    set === 'concepts'
      ? `Practice questions about what the ideas in ${unit} mean and when to use them, with hints and full explanations.`
      : `Practice questions on the math behind ${unit}, worked out by hand, with hints and full solutions.`,
  setBlurb: {
    concepts: 'Check that you understand what each idea means and when to use it.',
    math: 'Work out the numbers by hand. Scratch paper helps.',
  },
  practiceTitle: 'Practice',
  toSet: (set: string) => `${set} questions`,
  reading: 'Read more:',
  backToPath: 'Back to the Machine Learning Path',
  backToTopic: (unit: string) => `Back to the lesson: ${unit}`,
  otherSet: (set: string) => `Try the ${set} questions`,
  nextTopic: (unit: string) => `Next topic: ${unit}`,
  finishedTitle: 'Set finished!',
  finishedText: 'You solved every question in this set.',
  eyebrow: (level: string) => `Machine Learning Path · ${level}`,
  intoTheSet: 'Answer each question, then check it. Wrong answers explain what probably went wrong, and every question has hints and a full explanation.',
  sitemapHeading: 'Machine Learning Path',
};

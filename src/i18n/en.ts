// All button labels and short interface text. Longer writing lives in src/content/en/.
export const en = {
  skipLink: 'Skip to main content',
  nav: { learn: 'Start learning', teachers: 'For teachers', about: 'About us', label: 'Main' },
  theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
  footer: {
    free: 'Free to use. No login, no ads, no tracking.',
    disclaimer:
      'Not affiliated with or endorsed by the MAA, MATHCOUNTS, or Art of Problem Solving. All practice problems here are original.',
  },
  home: {
    title: 'Math competitions, starting from zero',
    description:
      'Free, beginner-friendly lessons for students new to math competitions, and a kit for teachers starting a math team.',
    mission:
      'We help students who have never competed get ready for their first math competition, and help their teachers start a team.',
    reassure: 'No experience needed. Really.',
    cards: [
      {
        title: 'Made for first-timers',
        text: 'Every lesson starts from the beginning and explains each step. Getting stuck is a normal part of it.',
      },
      {
        title: 'Free for everyone',
        text: 'No account and nothing to pay. Your progress saves on your own device.',
      },
      {
        title: 'Works on any device',
        text: 'Pages are small and load fast on school Chromebooks, phones, and slow internet.',
      },
    ],
  },
  pathway: {
    title: 'Learning Pathway',
    description: 'Lessons that start from zero and get harder one level at a time, from your first math competition toward the AMC 10 and beyond.',
    intro:
      'Start at Level 1 and work through the units in order, at your own pace. Each one has a lesson and practice problems with hints and full solutions. Each level is harder than the one before it, so there is always a next step.',
    comingSoon: 'Coming soon',
    start: 'Start this unit',
    listLabel: (level: string) => `Units in ${level}, in order`,
  },
  lesson: {
    eyebrow: 'Lesson',
    readTime: (minutes: number) => `About ${minutes} minutes to read`,
    toPractice: 'Go to practice problems',
    back: 'Back to the pathway',
  },
  practice: {
    title: (unit: string) => `${unit}: Practice`,
    description: (unit: string) => `Practice problems for the ${unit} unit, with hints and step-by-step solutions.`,
    intro:
      'Pick an answer and check it. You can try as many times as you like, and looking at a hint is not cheating. It is how people learn.',
    backToLesson: 'Reread the lesson',
    problem: 'Problem',
    chooseAnswer: (n: number) => `Choose an answer for problem ${n}`,
    check: 'Check answer',
    showHint: 'Show hint',
    hideHint: 'Hide hint',
    showSolution: 'Show solution',
    hideSolution: 'Hide solution',
    solved: 'Solved',
    pickFirst: 'Pick an answer first, then check it.',
    correct: 'Yes, that is right! Nice work.',
    wrong: (letter: string) => `${letter} isn't it, but you're not done yet. Try again, or open the hint.`,
    alreadySolved: 'You already solved this one.',
    noScript: 'Answer checking needs JavaScript, but hints and solutions still work. Open a solution to check your answer.',
    storageBlocked:
      'This browser is blocking saved data, so your progress will disappear when you leave this page. Everything else still works.',
    reset: 'Reset my progress',
    resetConfirm: 'Clear your saved progress for this unit?',
    finishedTitle: 'You finished the unit!',
    finishedText: 'That is real competition math. Want to see how the actual contest asks these kinds of questions?',
    finishedLink: (contest: string) => `Browse past ${contest} problems on the AoPS wiki`,
    nextUnit: (unit: string) => `Next unit: ${unit}`,
    difficulty: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
  },
  progress: {
    label: (unit: string) => `Progress in ${unit}`,
    status: (solved: number | string, total: number) => `${solved} of ${total} problems solved`,
  },
  sets: {
    title: 'Printable Problem Sets',
    description: 'Original, printable math club problem sets with answer keys, one for each week of the club plan.',
    intro:
      'One set for each week of the club plan. Each prints on its own, with the answer key on a separate page so you can hand out the problems and keep the key.',
    problems: (n: number) => `${n} problems`,
    week: (n: number) => `Week ${n}`,
    allSets: 'All problem sets',
    printStudent: 'Print student copy',
    printKey: 'Print with answer key',
    name: 'Name',
    date: 'Date',
    keyTitle: 'Answer key',
    teacherNote: 'Teacher note',
    answer: 'Answer',
    onScreenNote: 'Teacher view: the answer key is further down this page. It is left off the student copy when printed.',
  },
  teachers: {
    planCta: 'See the 8-week club plan',
    setsCta: 'Get the printable problem sets',
  },
  plan: { print: 'Print this plan', back: 'Back to the teacher kit' },
  about: {
    contactTitle: 'Get in touch',
    contactText: 'Are you a teacher, a student, or someone who wants to volunteer? We would love to hear from you.',
    contactCta: 'Email us',
  },
  notFound: {
    title: 'Page not found',
    text: 'That page is not here. Let us get you back on track.',
    home: 'Go to the home page',
  },
};

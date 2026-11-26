// Change the site name and contact email here. They update everywhere.
export const site = {
  name: 'Count Me In',
  contactEmail: 'hello@example.org', // PLACEHOLDER: replace before launch
};

// Cookieless visitor counts, OFF by default. Analytics stays off until you fill in siteId.
// - GoatCounter: siteId is your code, as in https://YOURCODE.goatcounter.com
// - Plausible: siteId is your domain, as in example.org
// Both count page views without cookies or personal data. Turning this on also
// changes the privacy wording on the About page and in the footer by itself.
export const analytics: { provider: 'goatcounter' | 'plausible'; siteId: string } = {
  provider: 'goatcounter',
  siteId: '',
};
export const analyticsOn = analytics.siteId.trim() !== '';

// Official sites used in page templates. Pages link here instead of stating
// dates or fees, because those change every year.
// How practice contests are scored. Check these against the official rules once a
// year, because the contests can change them.
export const contestRules = {
  'AMC 8': { minutes: 40, questions: 25, correct: 1, blank: 0, wrong: 0, rulesUrl: 'https://maa.org/student-programs/amc/' },
  'AMC 10': { minutes: 75, questions: 25, correct: 6, blank: 1.5, wrong: 0, rulesUrl: 'https://maa.org/student-programs/amc/' },
};

export const links = {
  pastProblems: {
    'AMC 8': 'https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions',
    'AMC 10': 'https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions',
    'AMC 12': 'https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions',
    AIME: 'https://artofproblemsolving.com/wiki/index.php/AIME_Problems_and_Solutions',
  },
};

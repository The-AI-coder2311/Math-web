import {
  LETTERS,
  competitionParam,
  deadlineOf,
  ensureStudentSession,
  errorText,
  escapeHtml,
  formatClock,
  formatPoints,
  formatUntil,
  formatWhen,
  getClient,
  phaseOf,
  renderInline,
  renderRich,
  say,
  scoringText,
  sitePath,
  type AnswerKey,
  type Competition,
  type Entry,
  type LeaderRow,
  type Problem,
} from './shared';

// Runs the "Take a Competition" page: join, answer against the clock, hand in, see results.
const page = document.querySelector<HTMLElement>('[data-compete]');
const client = getClient('player');

if (page && client) {
  const $ = <T extends HTMLElement = HTMLElement>(selector: string) => page.querySelector<T>(selector)!;
  const status = $('[data-status]');
  const sections = ['[data-missing]', '[data-about]', '[data-upcoming]', '[data-join]', '[data-paper]', '[data-handed-in]', '[data-results]', '[data-clock-bar]'];
  const show = (...visible: string[]) => sections.forEach((s) => ($(s).hidden = !visible.includes(s)));

  let competition: Competition;
  let entry: Entry | null = null;
  let problems: Problem[] = [];
  let ticker: number | undefined;
  let waiter: number | undefined;

  const boardHref = () => sitePath(`competitions/leaderboard/?c=${encodeURIComponent(competition.slug)}`);

  async function loadProblems() {
    const { data, error } = await client!
      .from('competition_problems')
      .select('id, competition_id, position, body, choices')
      .eq('competition_id', competition.id)
      .order('position');
    if (error) throw error;
    problems = (data ?? []) as Problem[];
  }

  function renderAbout() {
    const c = competition;
    $('[data-title]').textContent = c.title;
    document.title = document.title.replace(/^[^|]+/, `${c.title} `);
    $('[data-eyebrow-extra]').textContent = ` · ${c.style} style`;
    $('[data-summary]').textContent = c.summary;
    $('[data-summary]').hidden = !c.summary;
    $('[data-fact-window]').textContent = `Open from ${formatWhen(c.starts_at)} to ${formatWhen(c.ends_at)}.`;
    $('[data-fact-time]').textContent = `You get ${c.duration_minutes} minutes from the moment you join, or until the competition closes, whichever comes first.`;
    $('[data-fact-scoring]').textContent = `Scoring: ${scoringText(c)}`;
    $('[data-rules]').innerHTML = c.rules ? renderRich(c.rules) : '';
  }

  async function start() {
    const slug = competitionParam();
    if (!slug) {
      say(status, '');
      show('[data-missing]');
      return;
    }
    const { data, error } = await client!.from('competitions').select('*').eq('slug', slug).maybeSingle();
    if (error) throw error;
    if (!data) {
      say(status, '');
      show('[data-missing]');
      return;
    }
    competition = data as Competition;
    renderAbout();
    const { data: session } = await client!.auth.getSession();
    if (session.session) {
      const { data: mine, error: entryError } = await client!
        .from('competition_entries')
        .select('*')
        .eq('competition_id', competition.id)
        .maybeSingle();
      if (entryError) throw entryError;
      entry = (mine as Entry) ?? null;
    }
    say(status, '');
    await route();
  }

  async function route() {
    window.clearInterval(waiter);
    const phase = phaseOf(competition);
    if (phase === 'ended') return showResults();
    if (entry) {
      if (entry.submitted_at) return showHandedIn();
      if (Date.now() >= deadlineOf(competition, entry)) return handIn(true);
      return showPaper();
    }
    if (phase === 'upcoming') return showUpcoming();
    return showJoin();
  }

  function showUpcoming() {
    show('[data-about]', '[data-upcoming]');
    const opens = $('[data-opens]');
    const update = () => {
      const left = Date.parse(competition.starts_at) - Date.now();
      if (left <= 0) {
        window.clearInterval(waiter);
        void route();
        return;
      }
      opens.textContent = `${formatWhen(competition.starts_at)} (${left < 3600000 ? `in ${formatClock(left / 1000)}` : formatUntil(left)})`;
    };
    update();
    waiter = window.setInterval(update, 1000);
  }

  function showJoin() {
    show('[data-about]', '[data-join]');
    // Close the form when the competition closes, in case the page stays open.
    waiter = window.setInterval(() => {
      if (phaseOf(competition) !== 'live') void route();
    }, 5000);
  }

  $('[data-join]').addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $<HTMLButtonElement>('[data-join-button]');
    const name = $<HTMLInputElement>('[data-name]').value.trim();
    if (!name) return;
    button.disabled = true;
    say(status, 'Joining…');
    try {
      await ensureStudentSession(client!);
      const { data, error } = await client!.rpc('join_competition', { p_competition: competition.id, p_name: name });
      if (error) throw error;
      entry = data as Entry;
      say(status, '');
      await route();
    } catch (error) {
      say(status, errorText(error), 'error');
    } finally {
      button.disabled = false;
    }
  });

  // ---- Answering ----

  const paper = $<HTMLFormElement>('[data-paper]');
  const saveState = $('[data-save-state]');

  const collectAnswers = () => {
    const answers: Record<string, string> = {};
    for (const problem of problems) {
      const picked = paper.querySelector<HTMLInputElement>(`input[name="q-${problem.id}"]:checked`);
      if (picked?.value) answers[problem.id] = picked.value;
    }
    return answers;
  };

  let saveTimer: number | undefined;
  let saving: Promise<void> = Promise.resolve();
  let retryDelay = 2000;

  async function saveNow() {
    if (!entry || entry.submitted_at) return;
    saveState.textContent = 'Saving…';
    const { data, error } = await client!.rpc('save_answers', { p_entry: entry.id, p_answers: collectAnswers(), p_submit: false });
    if (error) {
      if (/time is up/i.test(error.message)) {
        await handIn(true);
        return;
      }
      saveState.textContent = 'Not saved yet. Trying again…';
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(queueSave, retryDelay);
      retryDelay = Math.min(retryDelay * 2, 30000);
      return;
    }
    retryDelay = 2000;
    entry = data as Entry;
    saveState.textContent = 'All answers saved';
  }

  function queueSave() {
    window.clearTimeout(saveTimer);
    saveState.textContent = 'Saving…';
    saveTimer = window.setTimeout(() => {
      saving = saving.then(saveNow, saveNow);
    }, 500);
  }

  paper.addEventListener('change', queueSave);

  function renderPaper() {
    const answers = entry?.answers ?? {};
    $('[data-questions]').innerHTML = problems
      .map((problem, i) => {
        const name = `q-${problem.id}`;
        const choices = problem.choices
          .map(
            (choice, c) => `<label class="choice">
              <input type="radio" name="${name}" value="${LETTERS[c]}" ${answers[problem.id] === LETTERS[c] ? 'checked' : ''} />
              <span class="choice-letter">${LETTERS[c]}.</span>
              <span>${renderInline(choice)}</span>
            </label>`,
          )
          .join('');
        return `<article class="card problem" id="q-${i + 1}">
          <div class="problem-head"><h2>Question ${i + 1}</h2></div>
          <div class="prose">${renderRich(problem.body)}</div>
          <fieldset>
            <legend class="sr-only">Choose an answer for question ${i + 1}</legend>
            ${choices}
            <label class="choice choice-blank">
              <input type="radio" name="${name}" value="" ${answers[problem.id] ? '' : 'checked'} />
              <span>Leave blank</span>
            </label>
          </fieldset>
        </article>`;
      })
      .join('');
    $('[data-no-questions]').hidden = problems.length > 0;
    $('[data-paper-intro]').textContent = problems.length
      ? `${problems.length} question${problems.length === 1 ? '' : 's'}. Your answers save as you go. Hand them in when you're done, or they're handed in for you when time runs out.`
      : '';
  }

  async function showPaper() {
    await loadProblems();
    renderPaper();
    show('[data-paper]', '[data-clock-bar]');
    saveState.textContent = '';
    startClock();
  }

  function startClock() {
    window.clearInterval(ticker);
    const clock = $('[data-clock]');
    const timerStatus = $('[data-timer-status]');
    const deadline = deadlineOf(competition, entry!);
    let warned = false;
    const tick = () => {
      const left = (deadline - Date.now()) / 1000;
      clock.textContent = formatClock(left);
      if (!warned && left <= 300 && competition.duration_minutes > 5) {
        warned = true;
        timerStatus.textContent = '5 minutes left.';
      }
      if (left <= 0) {
        window.clearInterval(ticker);
        timerStatus.textContent = 'Time is up. Handing in your answers.';
        void handIn(true);
      }
    };
    tick();
    ticker = window.setInterval(tick, 1000);
  }

  let handingIn = false;
  async function handIn(automatic: boolean) {
    if (!entry || handingIn) return;
    if (!automatic) {
      const blank = problems.length - Object.keys(collectAnswers()).length;
      const note = blank > 0 ? ` You have ${blank} blank question${blank === 1 ? '' : 's'}.` : '';
      if (!window.confirm(`Hand in your answers now? You can't change them after this.${note}`)) return;
    }
    handingIn = true;
    window.clearTimeout(saveTimer);
    await saving;
    const button = $<HTMLButtonElement>('[data-hand-in]');
    button.disabled = true;
    say(status, 'Handing in…');
    try {
      const answers = paper.hidden ? entry.answers : collectAnswers();
      const { data, error } = await client!.rpc('save_answers', { p_entry: entry.id, p_answers: answers, p_submit: true });
      if (error) throw error;
      entry = data as Entry;
      window.clearInterval(ticker);
      say(status, '');
      await route();
    } catch (error) {
      say(status, `Your answers weren't handed in yet. ${errorText(error)} Press the button to try again.`, 'error');
    } finally {
      handingIn = false;
      button.disabled = false;
    }
  }

  paper.addEventListener('submit', (event) => {
    event.preventDefault();
    void handIn(false);
  });

  // ---- After handing in ----

  function showHandedIn() {
    window.clearInterval(ticker);
    show('[data-about]', '[data-handed-in]');
    const answered = Object.keys(entry?.answers ?? {}).length;
    $('[data-handed-in-text]').textContent =
      `Thanks, ${entry!.display_name}! You answered ${answered} question${answered === 1 ? '' : 's'}. ` +
      `Your score and the answer key appear on this page when the competition ends, ${formatWhen(competition.ends_at)}.`;
    const link = $<HTMLAnchorElement>('[data-board-link]');
    link.hidden = !competition.live_leaderboard;
    link.href = boardHref();
    $('[data-handed-in]').focus();
    // Show results by itself when the competition ends, if the page is still open.
    const wait = Date.parse(competition.ends_at) - Date.now() + 2000;
    if (wait < 2 ** 31 - 1) window.setTimeout(() => void route(), Math.max(wait, 1000));
  }

  async function showResults() {
    window.clearInterval(ticker);
    await loadProblems();
    let keyRows: AnswerKey[] = [];
    if (problems.length) {
      const { data, error } = await client!
        .from('competition_answers')
        .select('problem_id, answer, solution')
        .in('problem_id', problems.map((p) => p.id));
      if (error) throw error;
      keyRows = (data ?? []) as AnswerKey[];
    }
    const key = new Map(keyRows.map((row) => [row.problem_id, row]));
    const mine = entry?.answers ?? {};

    let correct = 0;
    let wrong = 0;
    const review = problems.map((problem, i) => {
      const right = key.get(problem.id)?.answer ?? '';
      const yours = mine[problem.id] ?? '';
      if (yours && yours === right) correct++;
      else if (yours) wrong++;
      const verdict = !entry
        ? `The answer is (${right}).`
        : !yours
          ? `You left this blank. The answer is (${right}).`
          : yours === right
            ? `Correct: (${right}).`
            : `You chose (${yours}). The answer is (${right}).`;
      const choices = problem.choices
        .map((choice, c) => {
          const letter = LETTERS[c];
          const marks = [letter === right ? 'is-right' : '', letter === yours && yours !== right ? 'is-wrong' : ''].join(' ');
          return `<li class="${marks}"><span class="choice-letter">${letter}.</span> ${renderInline(choice)}</li>`;
        })
        .join('');
      const solution = key.get(problem.id)?.solution;
      return `<article class="card problem">
        <div class="problem-head"><h3>Question ${i + 1}</h3></div>
        <div class="prose">${renderRich(problem.body)}</div>
        <ul class="comp-choices">${choices}</ul>
        <p class="${entry ? (yours === right ? 'comp-good' : 'comp-bad') : ''}"><strong>${verdict}</strong></p>
        ${solution ? `<div class="prose">${renderRich(solution)}</div>` : ''}
      </article>`;
    });

    const blank = problems.length - correct - wrong;
    if (entry) {
      const c = competition;
      const score = correct * c.points_correct + blank * c.points_blank + wrong * c.points_wrong;
      const max = problems.length * c.points_correct;
      $('[data-result-score]').textContent = `${entry.display_name}: ${formatPoints(score)} out of ${formatPoints(max)}`;
      $('[data-result-counts]').textContent = `${correct} correct, ${wrong} wrong, ${blank} blank.`;
      const { data: rows } = await client!.rpc('leaderboard', { p_competition: c.id });
      const me = ((rows ?? []) as LeaderRow[]).find((row) => row.is_me);
      if (me) $('[data-result-counts]').textContent += ` You placed #${me.place} of ${(rows as LeaderRow[]).length}.`;
    } else {
      $('[data-result-score]').textContent = 'This competition has ended.';
      $('[data-result-counts]').textContent = "You didn't take part, but you can still try the questions below and check the answers.";
    }
    $<HTMLAnchorElement>('[data-results-board]').href = boardHref();
    $('[data-review]').innerHTML = review.join('') || '<p class="card">This competition had no questions.</p>';
    show('[data-about]', '[data-results]');
  }

  start().catch((error) => say(status, `Something went wrong. ${errorText(error)}`, 'error'));
}

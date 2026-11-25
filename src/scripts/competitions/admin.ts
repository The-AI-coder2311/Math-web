import {
  LETTERS,
  errorText,
  escapeHtml,
  formatWhen,
  getClient,
  phaseOf,
  renderInline,
  renderRich,
  say,
  sitePath,
  type AnswerKey,
  type Competition,
  type Entry,
  type LeaderRow,
  type Problem,
} from './shared';

// The admin dashboard: sign in, then create and edit competitions, their questions, and entries.
// Every change here is checked again by the database (supabase/schema.sql), so this page
// can't do anything a signed-in admin couldn't do anyway.
const root = document.querySelector<HTMLElement>('[data-admin]');
const client = getClient('admin');

type Preset = { pointsCorrect: number; pointsBlank: number; pointsWrong: number; minutes: number };
type EditableProblem = { id: string | null; body: string; choices: string[]; answer: string; solution: string };

if (root && client) {
  const $ = <T extends HTMLElement = HTMLElement>(selector: string) => root.querySelector<T>(selector)!;
  const msg = $('[data-msg]');
  const presets = JSON.parse(root.dataset.presets!) as Record<string, Preset>;
  const defaults = JSON.parse(root.dataset.defaults!) as {
    style: string;
    minutes: number;
    pointsCorrect: number;
    pointsBlank: number;
    pointsWrong: number;
    liveLeaderboard: boolean;
  };
  const form = $<HTMLFormElement>('[data-comp-form]');
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement;

  let current: Competition | null = null;
  let questions: EditableProblem[] = [];
  let slugTouched = false;

  const flash = (text: string, tone: 'info' | 'error' | 'good' = 'good') => {
    say(msg, text, tone);
    if (tone !== 'error') window.setTimeout(() => msg.textContent === text && say(msg, ''), 5000);
  };
  const fail = (error: unknown) => {
    say(msg, errorText(error), 'error');
    msg.scrollIntoView({ block: 'nearest' });
  };

  // ---- Signing in ----

  async function checkSession() {
    const { data } = await client!.auth.getSession();
    if (!data.session) {
      $('[data-signin]').hidden = false;
      $('[data-dash]').hidden = true;
      return;
    }
    const { data: isAdmin, error } = await client!.rpc('am_i_admin');
    if (error) throw error;
    if (!isAdmin) {
      await client!.auth.signOut();
      say(msg, "That account isn't an admin. The site owner can add it in Supabase.", 'error');
      $('[data-signin]').hidden = false;
      return;
    }
    $('[data-who]').textContent = data.session.user.email ?? 'admin';
    $('[data-signin]').hidden = true;
    $('[data-dash]').hidden = false;
    await showList();
  }

  $('[data-signin]').addEventListener('submit', async (event) => {
    event.preventDefault();
    say(msg, 'Signing in…', 'info');
    const email = $<HTMLInputElement>('[data-email]').value.trim();
    const password = $<HTMLInputElement>('[data-password]');
    const { error } = await client!.auth.signInWithPassword({ email, password: password.value });
    password.value = '';
    if (error) {
      say(msg, /invalid/i.test(error.message) ? 'That email and password don’t match an account.' : error.message, 'error');
      return;
    }
    say(msg, '');
    await checkSession().catch(fail);
  });

  $('[data-signout]').addEventListener('click', async () => {
    await client!.auth.signOut();
    location.reload();
  });

  // ---- Competition list ----

  async function showList() {
    current = null;
    $('[data-list-view]').hidden = false;
    $('[data-edit-view]').hidden = true;
    const { data, error } = await client!
      .from('competitions')
      .select('*, competition_problems(count), competition_entries(count)')
      .order('starts_at', { ascending: false });
    if (error) throw error;
    const rows = (data ?? []) as (Competition & {
      competition_problems: { count: number }[];
      competition_entries: { count: number }[];
    })[];
    $('[data-comp-rows]').innerHTML = rows.length
      ? rows
          .map((c) => {
            const phase = phaseOf(c);
            const tag = !c.published
              ? '<span class="admin-tag is-draft">Draft</span>'
              : phase === 'live'
                ? '<span class="admin-tag is-live">Live</span>'
                : `<span class="admin-tag">${phase === 'upcoming' ? 'Scheduled' : 'Ended'}</span>`;
            return `<tr>
              <td><strong>${escapeHtml(c.title)}</strong><br /><code>${escapeHtml(c.slug)}</code></td>
              <td>${tag}</td>
              <td>${formatWhen(c.starts_at)}</td>
              <td>${formatWhen(c.ends_at)}</td>
              <td>${c.competition_problems[0]?.count ?? 0}</td>
              <td>${c.competition_entries[0]?.count ?? 0}</td>
              <td><button class="btn btn-small" type="button" data-edit="${c.id}">Edit<span class="sr-only">: ${escapeHtml(c.title)}</span></button></td>
            </tr>`;
          })
          .join('')
      : '<tr><td colspan="7">No competitions yet. Press "New competition" to make one.</td></tr>';
  }

  $('[data-comp-rows]').addEventListener('click', (event) => {
    const id = (event.target as HTMLElement).closest<HTMLElement>('[data-edit]')?.dataset.edit;
    if (id) openEditor(id).catch(fail);
  });
  $('[data-new]').addEventListener('click', () => openEditor(null).catch(fail));
  $('[data-back]').addEventListener('click', () => showList().catch(fail));

  // ---- Editing a competition ----

  // datetime-local inputs use the browser's own time zone.
  const toLocalInput = (iso: string) => {
    const d = new Date(iso);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  $('[data-tz]').textContent = `Times are in your time zone (${Intl.DateTimeFormat().resolvedOptions().timeZone}). Students see them in theirs.`;

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);

  field('title').addEventListener('input', () => {
    if (!current && !slugTouched) field('slug').value = slugify(field('title').value);
  });
  field('slug').addEventListener('input', () => (slugTouched = true));
  field('style').addEventListener('change', () => {
    const preset = presets[field('style').value];
    if (!preset) return;
    field('points_correct').value = String(preset.pointsCorrect);
    field('points_blank').value = String(preset.pointsBlank);
    field('points_wrong').value = String(preset.pointsWrong);
    field('duration_minutes').value = String(preset.minutes);
  });

  async function openEditor(id: string | null) {
    say(msg, '');
    slugTouched = false;
    if (id) {
      const { data, error } = await client!.from('competitions').select('*').eq('id', id).single();
      if (error) throw error;
      current = data as Competition;
    } else {
      current = null;
    }
    const c = current;
    const start = new Date(Date.now() + 7 * 86400000);
    start.setHours(16, 0, 0, 0);
    field('title').value = c?.title ?? '';
    field('slug').value = c?.slug ?? '';
    field('summary').value = c?.summary ?? '';
    (form.elements.namedItem('rules') as HTMLTextAreaElement).value = c?.rules ?? '';
    const style = c?.style ?? defaults.style;
    const select = field('style') as unknown as HTMLSelectElement;
    if (![...select.options].some((o) => o.value === style)) select.add(new Option(style, style));
    select.value = style;
    field('starts_at').value = toLocalInput(c?.starts_at ?? start.toISOString());
    field('ends_at').value = toLocalInput(c?.ends_at ?? new Date(start.getTime() + 2 * 3600000).toISOString());
    field('duration_minutes').value = String(c?.duration_minutes ?? defaults.minutes);
    field('points_correct').value = String(c?.points_correct ?? defaults.pointsCorrect);
    field('points_blank').value = String(c?.points_blank ?? defaults.pointsBlank);
    field('points_wrong').value = String(c?.points_wrong ?? defaults.pointsWrong);
    field('published').checked = c?.published ?? false;
    field('live_leaderboard').checked = c?.live_leaderboard ?? defaults.liveLeaderboard;
    $('[data-form-title]').textContent = c ? `Edit: ${c.title}` : 'New competition';
    for (const sel of ['[data-delete]', '[data-open-page]', '[data-open-board]', '[data-questions-view]', '[data-entries-view]']) $(sel).hidden = !c;
    if (c) {
      $<HTMLAnchorElement>('[data-open-page]').href = sitePath(`competitions/compete/?c=${encodeURIComponent(c.slug)}`);
      $<HTMLAnchorElement>('[data-open-board]').href = sitePath(`competitions/leaderboard/?c=${encodeURIComponent(c.slug)}`);
    }
    $('[data-list-view]').hidden = true;
    $('[data-edit-view]').hidden = false;
    if (c) await Promise.all([loadQuestions(), loadEntries()]);
    field('title').focus();
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const starts = new Date(field('starts_at').value);
    const ends = new Date(field('ends_at').value);
    if (!(ends > starts)) {
      say(msg, 'The closing time has to be after the opening time.', 'error');
      return;
    }
    const row = {
      title: field('title').value.trim(),
      slug: field('slug').value.trim(),
      summary: field('summary').value.trim(),
      rules: (form.elements.namedItem('rules') as HTMLTextAreaElement).value.trim(),
      style: field('style').value,
      starts_at: starts.toISOString(),
      ends_at: ends.toISOString(),
      duration_minutes: Number(field('duration_minutes').value),
      points_correct: Number(field('points_correct').value),
      points_blank: Number(field('points_blank').value),
      points_wrong: Number(field('points_wrong').value),
      published: field('published').checked,
      live_leaderboard: field('live_leaderboard').checked,
    };
    if (row.published && current && questions.some((q) => !q.id)) {
      if (!window.confirm('Some questions below aren’t saved yet. Publish anyway?')) return;
    }
    const query = current
      ? client!.from('competitions').update(row).eq('id', current.id).select().single()
      : client!.from('competitions').insert(row).select().single();
    const { data, error } = await query;
    if (error) {
      fail(/duplicate|unique/i.test(error.message) ? new Error('Another competition already uses that web address name.') : error);
      return;
    }
    const wasNew = !current;
    flash(wasNew ? 'Competition created. Now add its questions.' : 'Saved.');
    await openEditor((data as Competition).id).catch(fail);
    if (wasNew) $('[data-questions-view]').scrollIntoView({ behavior: 'smooth' });
  });

  $('[data-delete]').addEventListener('click', async () => {
    if (!current) return;
    const typed = window.prompt(`This deletes "${current.title}" with all its questions and entries, and can't be undone. Type its web address name (${current.slug}) to confirm.`);
    if (typed?.trim() !== current.slug) return;
    const { error } = await client!.from('competitions').delete().eq('id', current.id);
    if (error) return fail(error);
    flash('Competition deleted.');
    await showList().catch(fail);
  });

  // ---- Questions ----

  async function loadQuestions() {
    const { data, error } = await client!
      .from('competition_problems')
      .select('id, competition_id, position, body, choices')
      .eq('competition_id', current!.id)
      .order('position');
    if (error) throw error;
    const problems = (data ?? []) as Problem[];
    const keys = new Map<string, AnswerKey>();
    if (problems.length) {
      const { data: rows, error: keyError } = await client!
        .from('competition_answers')
        .select('problem_id, answer, solution')
        .in('problem_id', problems.map((p) => p.id));
      if (keyError) throw keyError;
      ((rows ?? []) as AnswerKey[]).forEach((row) => keys.set(row.problem_id, row));
    }
    questions = problems.map((p) => ({
      id: p.id,
      body: p.body,
      choices: p.choices,
      answer: keys.get(p.id)?.answer ?? '',
      solution: keys.get(p.id)?.solution ?? '',
    }));
    drawQuestions();
  }

  function questionHtml(q: EditableProblem, i: number) {
    const count = q.choices.length;
    const choiceInputs = q.choices
      .map(
        (choice, c) => `<div class="admin-choice">
          <label for="q${i}-c${c}"><strong>${LETTERS[c]}.</strong></label>
          <input class="text-input" id="q${i}-c${c}" data-choice="${c}" value="${escapeHtml(choice)}" required />
        </div>`,
      )
      .join('');
    return `<fieldset class="card admin-question" data-q="${i}">
      <legend>Question ${i + 1}${q.id ? '' : ' (not saved yet)'}</legend>
      <div class="admin-field">
        <label class="field-label" for="q${i}-body">Question</label>
        <textarea id="q${i}-body" data-body rows="4" maxlength="10000" required>${escapeHtml(q.body)}</textarea>
      </div>
      <div class="admin-grid">
        <div class="admin-field">
          <label class="field-label" for="q${i}-count">Number of choices</label>
          <select id="q${i}-count" data-count>${[2, 3, 4, 5, 6].map((n) => `<option ${n === count ? 'selected' : ''}>${n}</option>`).join('')}</select>
        </div>
        <div class="admin-field">
          <label class="field-label" for="q${i}-answer">Correct answer</label>
          <select id="q${i}-answer" data-answer required>
            <option value="">Pick one</option>
            ${LETTERS.slice(0, count).split('').map((l) => `<option ${l === q.answer ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="admin-choices">${choiceInputs}</div>
      <div class="admin-field">
        <label class="field-label" for="q${i}-solution">Solution (shown after the competition closes)</label>
        <textarea id="q${i}-solution" data-solution rows="3" maxlength="10000">${escapeHtml(q.solution)}</textarea>
      </div>
      <details class="admin-preview" data-preview-box>
        <summary>Preview</summary>
        <div data-preview></div>
      </details>
      <p class="btn-row">
        <button class="btn btn-primary btn-small" type="button" data-save-q>Save question ${i + 1}</button>
        <button class="btn btn-small" type="button" data-move="-1" ${i === 0 ? 'disabled' : ''}>Move up</button>
        <button class="btn btn-small" type="button" data-move="1" ${i === questions.length - 1 ? 'disabled' : ''}>Move down</button>
        <button class="btn btn-small btn-danger" type="button" data-delete-q>Delete</button>
      </p>
    </fieldset>`;
  }

  function drawQuestions() {
    $('[data-question-list]').innerHTML = questions.length
      ? questions.map(questionHtml).join('')
      : '<p class="card">No questions yet. A competition with no questions still works, like the demo, but students will only be able to hand it in.</p>';
  }

  // Copies what's typed in a question's form back into `questions`.
  function readQuestion(box: HTMLElement) {
    const q = questions[Number(box.dataset.q)];
    q.body = box.querySelector<HTMLTextAreaElement>('[data-body]')!.value;
    q.solution = box.querySelector<HTMLTextAreaElement>('[data-solution]')!.value;
    q.answer = box.querySelector<HTMLSelectElement>('[data-answer]')!.value;
    q.choices = [...box.querySelectorAll<HTMLInputElement>('[data-choice]')].map((input) => input.value);
    return q;
  }

  function preview(box: HTMLElement) {
    const q = readQuestion(box);
    box.querySelector('[data-preview]')!.innerHTML = `${renderRich(q.body || '(no question yet)')}
      <ol type="A">${q.choices.map((c, i) => `<li${LETTERS[i] === q.answer ? ' class="comp-good"' : ''}>${renderInline(c)}</li>`).join('')}</ol>
      ${q.solution ? `<hr />${renderRich(q.solution)}` : ''}`;
  }

  const list = $('[data-question-list]');
  list.addEventListener('input', (event) => {
    const box = (event.target as HTMLElement).closest<HTMLElement>('[data-q]');
    if (box?.querySelector<HTMLDetailsElement>('[data-preview-box]')!.open) preview(box);
  });
  list.addEventListener('toggle', (event) => {
    const details = event.target as HTMLDetailsElement;
    if (details.open) preview(details.closest<HTMLElement>('[data-q]')!);
  }, true);
  list.addEventListener('change', (event) => {
    const target = event.target as HTMLElement;
    if (!target.matches('[data-count]')) return;
    const box = target.closest<HTMLElement>('[data-q]')!;
    const q = readQuestion(box);
    const n = Number((target as HTMLSelectElement).value);
    q.choices = Array.from({ length: n }, (_, i) => q.choices[i] ?? '');
    if (q.answer && LETTERS.indexOf(q.answer) >= n) q.answer = '';
    box.outerHTML = questionHtml(q, Number(box.dataset.q));
  });

  list.addEventListener('click', async (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button');
    const box = button?.closest<HTMLElement>('[data-q]');
    if (!button || !box) return;
    const index = Number(box.dataset.q);
    const q = readQuestion(box);
    try {
      if (button.matches('[data-save-q]')) await saveQuestion(q, index, box);
      else if (button.matches('[data-delete-q]')) await deleteQuestion(q, index);
      else if (button.matches('[data-move]')) await moveQuestion(index, Number(button.dataset.move));
    } catch (error) {
      fail(error);
    }
  });

  $('[data-add-question]').addEventListener('click', () => {
    document.querySelectorAll<HTMLElement>('[data-q]').forEach(readQuestion);
    questions.push({ id: null, body: '', choices: ['', '', '', '', ''], answer: '', solution: '' });
    drawQuestions();
    const last = list.querySelector<HTMLElement>(`[data-q="${questions.length - 1}"]`)!;
    last.scrollIntoView({ behavior: 'smooth', block: 'start' });
    last.querySelector<HTMLTextAreaElement>('[data-body]')!.focus();
  });

  async function saveQuestion(q: EditableProblem, index: number, box: HTMLElement) {
    if (!q.body.trim()) throw new Error(`Question ${index + 1} needs some text.`);
    if (q.choices.some((c) => !c.trim())) throw new Error(`Fill in every choice for question ${index + 1}.`);
    if (new Set(q.choices.map((c) => c.trim())).size !== q.choices.length) throw new Error(`Two choices in question ${index + 1} are the same.`);
    if (!q.answer) throw new Error(`Pick the correct answer for question ${index + 1}.`);
    const row = { competition_id: current!.id, position: index + 1, body: q.body.trim(), choices: q.choices.map((c) => c.trim()) };
    const { data, error } = q.id
      ? await client!.from('competition_problems').update(row).eq('id', q.id).select().single()
      : await client!.from('competition_problems').insert(row).select().single();
    if (error) throw error;
    q.id = (data as Problem).id;
    const { error: keyError } = await client!
      .from('competition_answers')
      .upsert({ problem_id: q.id, answer: q.answer, solution: q.solution.trim() });
    if (keyError) throw keyError;
    box.outerHTML = questionHtml(q, index);
    flash(`Question ${index + 1} saved.`);
    if (current && phaseOf(current) === 'live') {
      flash(`Question ${index + 1} saved. This competition is live, so students who already loaded it won't see the change until they reload.`, 'info');
    }
  }

  async function deleteQuestion(q: EditableProblem, index: number) {
    if (!window.confirm(`Delete question ${index + 1}? Its answer key goes too.`)) return;
    if (q.id) {
      const { error } = await client!.from('competition_problems').delete().eq('id', q.id);
      if (error) throw error;
    }
    questions.splice(index, 1);
    await renumber();
    flash('Question deleted.');
  }

  async function moveQuestion(index: number, step: number) {
    const other = index + step;
    if (other < 0 || other >= questions.length) return;
    document.querySelectorAll<HTMLElement>('[data-q]').forEach(readQuestion);
    [questions[index], questions[other]] = [questions[other], questions[index]];
    await renumber();
  }

  // Writes every saved question's position in one request, so two can swap places.
  async function renumber() {
    const saved = questions
      .map((q, i) => ({ q, position: i + 1 }))
      .filter(({ q }) => q.id);
    if (saved.length) {
      const { data: rows, error: readError } = await client!
        .from('competition_problems')
        .select('id, competition_id, body, choices')
        .in('id', saved.map(({ q }) => q.id!));
      if (readError) throw readError;
      const byId = new Map(((rows ?? []) as Problem[]).map((r) => [r.id, r]));
      const { error } = await client!.from('competition_problems').upsert(
        saved.map(({ q, position }) => ({ ...byId.get(q.id!)!, position })),
      );
      if (error) throw error;
    }
    drawQuestions();
  }

  // ---- Entries ----

  let entries: Entry[] = [];

  async function loadEntries() {
    const { data, error } = await client!
      .from('competition_entries')
      .select('*')
      .eq('competition_id', current!.id)
      .order('started_at');
    if (error) throw error;
    entries = (data ?? []) as Entry[];
    $('[data-entry-rows]').innerHTML = entries.length
      ? entries
          .map(
            (e) => `<tr>
              <td>${escapeHtml(e.display_name)}</td>
              <td>${formatWhen(e.started_at)}</td>
              <td>${e.submitted_at ? formatWhen(e.submitted_at) : 'Not yet'}</td>
              <td>${Object.keys(e.answers).length}</td>
              <td><input type="checkbox" data-hide="${e.id}" ${e.hidden ? 'checked' : ''} aria-label="Hide ${escapeHtml(e.display_name)} from the leaderboard" /></td>
              <td><button class="btn btn-small btn-danger" type="button" data-remove="${e.id}">Delete<span class="sr-only">: ${escapeHtml(e.display_name)}</span></button></td>
            </tr>`,
          )
          .join('')
      : '<tr><td colspan="6">Nobody has joined yet.</td></tr>';
  }

  $('[data-refresh-entries]').addEventListener('click', () => loadEntries().then(() => flash('Entries refreshed.')).catch(fail));

  $('[data-entry-rows]').addEventListener('change', async (event) => {
    const box = event.target as HTMLInputElement;
    if (!box.dataset.hide) return;
    const { error } = await client!.from('competition_entries').update({ hidden: box.checked }).eq('id', box.dataset.hide);
    if (error) {
      box.checked = !box.checked;
      return fail(error);
    }
    flash(box.checked ? 'Hidden from the leaderboard.' : 'Back on the leaderboard.');
  });

  $('[data-entry-rows]').addEventListener('click', async (event) => {
    const id = (event.target as HTMLElement).closest<HTMLElement>('[data-remove]')?.dataset.remove;
    if (!id) return;
    const entry = entries.find((e) => e.id === id);
    if (!window.confirm(`Delete ${entry?.display_name ?? 'this entry'}'s entry? Their answers are lost, and they can join again.`)) return;
    const { error } = await client!.from('competition_entries').delete().eq('id', id);
    if (error) return fail(error);
    await loadEntries().catch(fail);
    flash('Entry deleted.');
  });

  $('[data-export]').addEventListener('click', async () => {
    if (!current) return;
    const { data, error } = await client!.rpc('leaderboard', { p_competition: current.id });
    if (error) return fail(error);
    const cell = (value: unknown) => {
      let text = String(value ?? '');
      // Stop spreadsheet apps from running a name like =HYPERLINK(...) as a formula.
      if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
      return `"${text.replace(/"/g, '""')}"`;
    };
    const lines = [
      ['Place', 'Name', 'Score', 'Correct', 'Wrong', 'Blank', 'Seconds'],
      ...((data ?? []) as LeaderRow[]).map((r) => [r.place, r.display_name, r.score, r.correct, r.wrong, r.blank, r.seconds]),
    ].map((row) => row.map(cell).join(','));
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([`${lines.join('\r\n')}\r\n`], { type: 'text/csv' }));
    link.download = `${current.slug}-results.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  });

  // ---- Student accounts ----

  async function findStudents() {
    const query = $<HTMLInputElement>('[data-student-query]').value;
    const { data, error } = await client!.rpc('admin_find_students', { p_query: query });
    if (error) throw error;
    const rows = (data ?? []) as { username: string; created_at: string; entries: number }[];
    $('[data-student-results]').hidden = false;
    $('[data-student-rows]').innerHTML = rows.length
      ? rows
          .map(
            (r) => `<tr>
              <td><strong>${escapeHtml(r.username)}</strong></td>
              <td>${formatWhen(r.created_at)}</td>
              <td>${r.entries}</td>
              <td class="btn-row">
                <button class="btn btn-small" type="button" data-reset="${escapeHtml(r.username)}">Reset password<span class="sr-only">: ${escapeHtml(r.username)}</span></button>
                <button class="btn btn-small btn-danger" type="button" data-remove-student="${escapeHtml(r.username)}">Delete<span class="sr-only">: ${escapeHtml(r.username)}</span></button>
              </td>
            </tr>`,
          )
          .join('')
      : '<tr><td colspan="4">No usernames match. Showing at most 50.</td></tr>';
  }

  $('[data-student-search]').addEventListener('submit', (event) => {
    event.preventDefault();
    findStudents().catch(fail);
  });

  $('[data-student-rows]').addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    const reset = target.closest<HTMLElement>('[data-reset]')?.dataset.reset;
    const remove = target.closest<HTMLElement>('[data-remove-student]')?.dataset.removeStudent;
    try {
      if (reset) {
        const password = window.prompt(`New password for ${reset} (at least 8 characters). Tell them what it is. This signs them out everywhere.`);
        if (!password) return;
        const { error } = await client!.rpc('admin_reset_student_password', { p_username: reset, p_password: password });
        if (error) throw error;
        flash(`Password reset for ${reset}.`);
      } else if (remove) {
        if (window.prompt(`This deletes ${remove}'s account and every competition entry they have. Type the username to confirm.`)?.trim().toLowerCase() !== remove) return;
        const { error } = await client!.rpc('admin_delete_student', { p_username: remove });
        if (error) throw error;
        flash(`Deleted ${remove}.`);
        await findStudents();
      }
    } catch (error) {
      fail(error);
    }
  });

  checkSession().catch(fail);
}

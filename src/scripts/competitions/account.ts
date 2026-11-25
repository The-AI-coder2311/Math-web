import type { SupabaseClient } from '@supabase/supabase-js';
import { ensureStudentSession, errorText, say } from './shared';

// Student accounts: a username and password, no email. Each browser has its own anonymous
// session, and signing in links it to the account (see student_sign_in in supabase/schema.sql).

/** The username this browser is signed in as, or null. */
export async function whoAmI(client: SupabaseClient): Promise<string | null> {
  const { data: session } = await client.auth.getSession();
  if (!session.session) return null;
  const { data, error } = await client.rpc('student_whoami');
  if (error) throw error;
  return (data as string | null) ?? null;
}

export async function signOut(client: SupabaseClient) {
  await client.rpc('student_sign_out');
  // Drops this browser's anonymous session too, so nothing is left behind on a shared computer.
  await client.auth.signOut();
}

/**
 * Runs one account box from StudentAccount.astro. `onChange` gets the username after
 * signing in or making an account, and null after signing out.
 */
export async function mountAccount(box: HTMLElement, client: SupabaseClient, onChange: (username: string | null) => void) {
  const $ = <T extends HTMLElement = HTMLElement>(selector: string) => box.querySelector<T>(selector)!;
  const form = $<HTMLFormElement>('[data-account-form]');
  const signedIn = $('[data-account-signed-in]');
  const msg = $('[data-account-msg]');
  const username = $<HTMLInputElement>('[data-account-username]');
  const password = $<HTMLInputElement>('[data-account-password]');
  const submit = $<HTMLButtonElement>('[data-account-submit]');
  const mode = () => box.querySelector<HTMLInputElement>('[data-account-mode]:checked')!.value as 'sign-in' | 'sign-up';

  const show = (name: string | null) => {
    signedIn.hidden = !name;
    form.hidden = Boolean(name);
    $('[data-account-name]').textContent = name ?? '';
    onChange(name);
  };

  const setMode = () => {
    const signingUp = mode() === 'sign-up';
    submit.textContent = signingUp ? 'Make my account' : 'Sign in';
    password.autocomplete = signingUp ? 'new-password' : 'current-password';
    $('[data-account-password-hint]').textContent = signingUp
      ? 'At least 8 characters. Write it down somewhere safe: there is no email reset, so only your teacher or the person running the competition can reset it.'
      : 'Forgot it? Ask your teacher or the person running the competition to reset it.';
    say(msg, '');
  };
  box.querySelectorAll('[data-account-mode]').forEach((radio) => radio.addEventListener('change', setMode));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submit.disabled = true;
    say(msg, mode() === 'sign-up' ? 'Making your account…' : 'Signing in…', 'info');
    try {
      await ensureStudentSession(client);
      const name = username.value.trim().toLowerCase();
      if (mode() === 'sign-up') {
        const { data, error } = await client.rpc('student_sign_up', { p_username: name, p_password: password.value });
        if (error) throw error;
        password.value = '';
        say(msg, '');
        show(data as string);
      } else {
        const { data, error } = await client.rpc('student_sign_in', { p_username: name, p_password: password.value });
        if (error) throw error;
        if (data === 'ok') {
          password.value = '';
          say(msg, '');
          show(name);
        } else if (data === 'slow down') {
          say(msg, 'Too many wrong tries. Wait 15 minutes, then try again.', 'error');
        } else {
          say(msg, "That username and password don't match. Check them and try again.", 'error');
        }
      }
    } catch (error) {
      say(msg, errorText(error), 'error');
    } finally {
      submit.disabled = false;
    }
  });

  $('[data-account-sign-out]').addEventListener('click', async () => {
    await signOut(client).catch(() => undefined);
    show(null);
  });

  setMode();
  show(await whoAmI(client));
}

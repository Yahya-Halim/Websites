/**
 * spam-guard.ts — MARKUP-LAYER field-shape module (cro-gates Task 5).
 *
 * This is NOT a runtime rejecter. v1 ships NO first-party form handler — the
 * lead form POSTs to an EXTERNAL provider endpoint — so nothing here is invoked
 * at build, serve, or request time. It exists so the field NAMES are declared
 * once (canonical constants) and the field SHAPES have a pure, deterministic
 * classifier that a future first-party handler (or a test) can reuse.
 *
 * The two field names below are the SAME names Task 4's LeadForm markup emits
 * inline (a honeypot input + a render-time timestamp hidden field). They are
 * duplicated there by intent — this module owns the canonical values; the
 * markup mirrors them. (The cross-file "LeadForm uses these exact names" check
 * is Task 14's, not asserted against LeadForm here.)
 *
 * CLOCK-FREE: the classifier takes the "now" timestamp as an ARGUMENT. It never
 * reads Date.now() itself, so its output is a pure function of its inputs and
 * the exported contract carries no clock.
 */

/**
 * Honeypot input name. A real user never sees or fills this field (it is hidden
 * / off-screen in the markup); a bot that auto-fills every input will populate
 * it. A NON-EMPTY value is therefore spam-shaped.
 */
export const HONEYPOT_FIELD_NAME = 'company_website';

/**
 * Timestamp hidden-field name. The markup stamps this with the render time (ms
 * since epoch, as a string) when the form is served. On submit, a real human
 * has taken at least a few seconds to fill the form; a bot round-trips almost
 * instantly. A MISSING or TOO-FRESH timestamp is therefore spam-shaped.
 */
export const TIMESTAMP_FIELD_NAME = 'form_rendered_at';

/**
 * Minimum elapsed time (ms) between form RENDER and SUBMIT for the submission
 * to be considered human-paced. Submissions faster than this are spam-shaped.
 * 3 seconds is comfortably longer than a bot round-trip yet far shorter than a
 * human filling even a one-field form.
 */
export const MIN_FILL_MS = 3000;

/**
 * The field VALUES a classifier inspects, named by their canonical constants.
 * `honeypot` is the submitted honeypot value; `renderedAt` is the submitted
 * timestamp value (the raw string from the hidden field, or undefined if the
 * field was stripped).
 */
export interface SpamFieldValues {
  /** Submitted value of the {@link HONEYPOT_FIELD_NAME} field. */
  honeypot: string | undefined | null;
  /** Submitted value of the {@link TIMESTAMP_FIELD_NAME} field (ms-epoch string). */
  renderedAt: string | undefined | null;
}

/**
 * Pure, deterministic, CLOCK-FREE classifier over the field VALUES.
 *
 * Returns true when the values are SPAM-SHAPED:
 *   - the honeypot is non-empty (a bot filled a field humans never see), OR
 *   - the timestamp is missing / unparseable / in the future, OR
 *   - the submission is too fresh: `nowMs - renderedAt < MIN_FILL_MS`.
 *
 * Returns false (NOT spam-shaped) only when the honeypot is empty AND the
 * timestamp is present, parseable, not in the future, and old enough.
 *
 * `nowMs` is supplied by the caller — the helper never reads the clock — so the
 * result is a pure function of (values, nowMs) and fully testable.
 *
 * @param values  the submitted honeypot + timestamp values
 * @param nowMs   the caller's "now" in ms since epoch
 * @param minFillMs  minimum human fill time in ms (defaults to {@link MIN_FILL_MS})
 */
export function isSpamShaped(
  values: SpamFieldValues,
  nowMs: number,
  minFillMs: number = MIN_FILL_MS,
): boolean {
  // Honeypot: any non-empty (post-trim) value is spam-shaped.
  const honeypot = values.honeypot;
  if (typeof honeypot === 'string' && honeypot.trim().length > 0) {
    return true;
  }

  // Timestamp: missing/empty → spam-shaped.
  const renderedAtRaw = values.renderedAt;
  if (typeof renderedAtRaw !== 'string' || renderedAtRaw.trim().length === 0) {
    return true;
  }

  // Unparseable / non-finite → spam-shaped.
  const renderedAt = Number(renderedAtRaw);
  if (!Number.isFinite(renderedAt)) {
    return true;
  }

  // In the future (clock skew / forged) → spam-shaped.
  const elapsed = nowMs - renderedAt;
  if (elapsed < 0) {
    return true;
  }

  // Too fresh (faster than a human could fill) → spam-shaped.
  if (elapsed < minFillMs) {
    return true;
  }

  // Empty honeypot + present, old-enough timestamp → NOT spam-shaped.
  return false;
}

/**
 * Slice boundaries that never split a character.
 *
 * `String.prototype.slice` cuts on UTF-16 code units, so a boundary landing
 * between the two halves of an astral character (emoji, most CJK extensions,
 * musical and mathematical symbols) leaves a lone surrogate behind. The result
 * is an ill-formed string: `isWellFormed()` reports false, and the UTF-8
 * encoder in `fetch` silently substitutes U+FFFD on the way out rather than
 * raising, so the corruption reaches the wire or the transcript unreported.
 */

/**
 * Pulls an end boundary back off a split pair, so the slice before it never
 * ends on a lone high surrogate. Returns `end` unchanged when it already falls
 * on a character boundary.
 */
export function wellFormedEnd(text: string, end: number): number {
  if (end <= 0 || end >= text.length) return end;
  const unit = text.charCodeAt(end - 1);
  return unit >= 0xd800 && unit <= 0xdbff ? end - 1 : end;
}

/**
 * Pushes a start boundary forward off a split pair, so the slice from it never
 * begins on a lone low surrogate. Returns `start` unchanged when it already
 * falls on a character boundary.
 */
export function wellFormedStart(text: string, start: number): number {
  if (start <= 0 || start >= text.length) return start;
  const unit = text.charCodeAt(start);
  return unit >= 0xdc00 && unit <= 0xdfff ? start + 1 : start;
}

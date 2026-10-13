import { globSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * `Jev` is a model name, not the wire protocol. The model may only be named
 * where it genuinely is the model: the default value, and the note recording
 * what the token estimator was calibrated against. Anything describing the
 * request or response shape is `SystemOne`.
 *
 * Matching is on substrings rather than line numbers so an edit above a site
 * does not break the check. To add a site, add the substring that makes it a
 * model reference, not the bare word.
 */
const ALLOWED = [
  "'jev-latest'", // DEFAULT_MODEL, and the client's documented default
  '`jev-latest`', // doc comment pointing at that default
  '"model":"jev-latest"', // the envelope-size example in compact.ts
  'the usage Jev reports', // estimateTokens calibration note
];

/**
 * Limit worth knowing: this scans `src/` and `hooks/` TypeScript only. Drift
 * in the READMEs, the plugin manifests or the demo is not covered, so a clean
 * run here says the code is consistent, not that the whole repo is.
 */
const SOURCES = ['src/**/*.ts', 'hooks/**/*.ts'];

describe('protocol naming', () => {
  it('names the model only where it means the model', () => {
    const offenders: string[] = [];

    for (const file of globSync(SOURCES)) {
      const lines = readFileSync(file, 'utf8').split('\n');
      lines.forEach((line, index) => {
        if (!/jev/i.test(line)) return;
        if (ALLOWED.some((allowed) => line.includes(allowed))) return;
        offenders.push(`${file}:${index + 1}: ${line.trim()}`);
      });
    }

    expect(offenders).toEqual([]);
  });

  it('still covers the model sites it allows', () => {
    const source = globSync(SOURCES)
      .map((file) => readFileSync(file, 'utf8'))
      .join('\n');

    for (const allowed of ALLOWED) {
      expect(source).toContain(allowed);
    }
  });
});

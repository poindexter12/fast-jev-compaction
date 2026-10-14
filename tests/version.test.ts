import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

/**
 * The repo ships two artifacts from one commit stream, the npm package and the
 * Claude Code plugin, and their versions drifted for a month because nothing
 * compared them. One version covers both, so every site below must agree.
 *
 * This checks the four files that carry a version. It does not check that their
 * `name` fields agree, and `tests/naming.test.ts` does not scan manifests
 * either, so a rename that misses one of these files is still uncaught.
 */
const SITES: ReadonlyArray<readonly [string, (json: any) => unknown]> = [
  ['package.json', (json) => json.version],
  ['.claude-plugin/plugin.json', (json) => json.version],
  ['.claude-plugin/marketplace.json', (json) => json.plugins[0].version],
  ['package-lock.json', (json) => json.version],
  ['package-lock.json (packages[""])', (json) => json.packages[''].version],
];

const read = (file: string): any =>
  JSON.parse(readFileSync(file.replace(/ \(.*\)$/, ''), 'utf8'));

describe('artifact version', () => {
  it('is the same at every site that carries one', () => {
    const found = SITES.map(([file, pick]) => `${file}: ${pick(read(file))}`);
    const expected = SITES.map(([file]) => `${file}: ${read('package.json').version}`);
    expect(found).toEqual(expected);
  });

  it('is a plain semver triple', () => {
    expect(read('package.json').version).toMatch(/^\d+\.\d+\.\d+$/);
  });
});

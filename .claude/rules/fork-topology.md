---
description: This is a divergent fork, and one version covers both its artifacts
priority: 50
---
- `origin` is `poindexter12/fast-systemone-compaction` and `upstream` is
  `tamaratran/fast-jev-compaction`. This fork is deliberately divergent: upstream's conventions
  inform but do not bind it, and there is no obligation to keep changes mergeable upstream.
- Branch from `origin/main` and run `git fetch origin` first. Never branch from a stale local
  `main`. Fetch `upstream` only when deliberately pulling its changes in, and say what you are
  taking.
- One version covers both artifacts, the npm package and the plugin, and it is 0.4.0. It lives at
  five sites across four files: `package.json`, `.claude-plugin/plugin.json`,
  `.claude-plugin/marketplace.json` under `plugins[0]`, and `package-lock.json`, which mirrors it
  twice. `tests/version.test.ts` fails if they disagree, so bump all of them together. The split
  that used to be here, 0.2.0 against 0.3.0, came from upstream at `75ddfe5` and was retired
  rather than inherited: the plugin is a thin adapter over `src/`, so no library change leaves
  plugin behavior alone and separate numbers bought nothing.
- Bring the lockfile along with `npm install --package-lock-only` rather than editing it. Expect
  it to carry more than the version, because it also mirrors `engines` and the dependency set and
  may be stale in those: unifying at 0.4.0 also pulled `engines` from `>=18` to `>=24`, three
  commits after `package.json` changed. Read the diff rather than assuming its shape.
- The fork no longer shares upstream's name. It publishes as `fast-systemone-compaction`, named
  for the wire protocol rather than the `jev-latest` model, and the marketplace owner and both
  README install specs say `poindexter12`. Upstream holds `fast-jev-compaction` on npm at 0.4.1,
  so the old name is not available to this fork; do not rename back toward it.
- `Jev` survives in the code only where it means the model, at four sites: `DEFAULT_MODEL`, the
  `jev-latest` doc default on `SystemOneClientOptions`, the envelope-size example in
  `src/compact.ts`, and the note recording that `estimateTokens` was calibrated against the usage
  Jev reports. Everything describing the request or response shape is `SystemOne`. Keep that line
  when adding code; `tests/naming.test.ts` enforces it over `src/` and `hooks/`, and its `ALLOWED`
  list is the list of those four sites. The 32k request limit is Jev's too, but it is mentioned
  only in `README.md`, which the guard does not scan.

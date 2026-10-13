---
description: This is a divergent fork, and three files carry the version
priority: 50
---
- `origin` is `poindexter12/fast-systemone-compaction` and `upstream` is
  `tamaratran/fast-jev-compaction`. This fork is deliberately divergent: upstream's conventions
  inform but do not bind it, and there is no obligation to keep changes mergeable upstream.
- Branch from `origin/main` and run `git fetch origin` first. Never branch from a stale local
  `main`. Fetch `upstream` only when deliberately pulling its changes in, and say what you are
  taking.
- Three files carry a version and they drift: `package.json` (the npm package),
  `.claude-plugin/plugin.json`, and `.claude-plugin/marketplace.json` (both the plugin). The
  manifests currently say 0.3.0 while `package.json` says 0.2.0. When bumping any of them, state
  which of the two artifacts is being released and whether the others should follow.
- The fork no longer shares upstream's name. It publishes as `fast-systemone-compaction`, named
  for the wire protocol rather than the `jev-latest` model, and the marketplace owner and both
  README install specs say `poindexter12`. Upstream holds `fast-jev-compaction` on npm at 0.4.1,
  so the old name is not available to this fork; do not rename back toward it.
- `Jev` survives in the code only where it means the model: `DEFAULT_MODEL`, the `jev-latest`
  defaults, Jev's 32k request limit, and the notes recording that `estimateTokens` was calibrated
  against the usage Jev reports. Everything describing the request or response shape is
  `SystemOne`. Keep that line when adding code.

---
description: This is a divergent fork, and three files carry the version
priority: 50
---
- `origin` is `poindexter12/fast-jev-compaction` and `upstream` is
  `tamaratran/fast-jev-compaction`. This fork is deliberately divergent: upstream's conventions
  inform but do not bind it, and there is no obligation to keep changes mergeable upstream.
- Branch from `origin/main` and run `git fetch origin` first. Never branch from a stale local
  `main`. Fetch `upstream` only when deliberately pulling its changes in, and say what you are
  taking.
- Three files carry a version and they drift: `package.json` (the npm package),
  `.claude-plugin/plugin.json`, and `.claude-plugin/marketplace.json` (both the plugin). The
  manifests currently say 0.3.0 while `package.json` says 0.2.0. When bumping any of them, state
  which of the two artifacts is being released and whether the others should follow.
- `.claude-plugin/marketplace.json` still names `tamaratran` as the marketplace owner, and the
  README still points installers at `claude plugin marketplace add tamaratran/fast-jev-compaction`.
  Both describe upstream, not this fork. Fix them when the fork is ready to be installed from
  `poindexter12`, and do not treat the stale owner as a convention to preserve.

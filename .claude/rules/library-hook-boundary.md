---
description: Compaction logic lives in src/, the hook stays an adapter
paths: ["src/**/*.ts", "hooks/**/*.ts"]
priority: 60
---
This repository is two things at once: the `fast-jev-compaction` npm package in `src/`, and a
Claude Code function-hook plugin in `hooks/` plus `.claude-plugin/`. The plugin folder is the
repository root, so `hooks/fast-jev.ts` imports `../src/*.js` directly. Keep that direction of
dependency and keep the split:

- Every compaction decision belongs in `src/`: pairing calls to results, fitting the state,
  batching questions, scoring against `keepThreshold`, rebuilding the message list. If a change
  touches what gets kept, dropped, or truncated, it belongs in `src/compact.ts`, `src/state.ts`,
  or `src/request.ts`, never in the hook.
- `hooks/fast-jev.ts` is an adapter and nothing more: read `userConfig` through `PluginOptions`,
  resolve the TypeSafe key, map Claude Code's `SessionMessage` to and from the library's
  `Message`, call `compact`, and decide the fallback. It owns the `compactAtPercent` and
  `minReductionRatio` host policy because those are host concerns; it owns no scoring logic.
- Commit `75ddfe5` already had to port the tool-call model out of the hook and into the library.
  Do not grow it back. When a new behavior seems to need hook-side logic, add it to `src/` with a
  unit test and have the hook call it.
- `src/` must stay free of any `claude-code` type import. Those types belong to `hooks/` and
  `types/claude-code.d.ts`. The library has to stay usable by a caller that brings its own
  transport through `SystemOneAsker`.
- Never let a tool result survive without its tool call, in either layer. That invariant is the
  whole reason the output stays valid.

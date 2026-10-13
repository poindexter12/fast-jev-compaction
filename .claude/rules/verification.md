---
description: The verification gates, and keeping tests off the network
priority: 85
---
Working solo here means no one else runs the gates, so run all three before calling a change done
and report what each one said:

- `npm run typecheck` covers both halves. It runs `tsc --noEmit` for the library and then
  `npm run typecheck:hooks` for `tsconfig.hooks.json`. A library-only check passes while the hook
  is broken, so never substitute a bare `tsc --noEmit` for it.
- `npm test` runs vitest over `tests/`. Both suites drive a fake Jev and must never contact
  TypeSafe. If a test needs a response, inject it through the `fetch` option or a `JevAsker`
  stub; a test that reads `TYPESAFE_API_KEY` or opens a socket is a defect in the test.
- `npm run validate:plugin` checks `.claude-plugin/plugin.json`. Run it after any change to
  `userConfig`, since the hook reads those keys by name and a rename breaks the install prompt
  silently.

`npm run demo` is the only path that reaches the network, and it needs `TYPESAFE_API_KEY` in the
environment. Treat it as a manual live check, not part of the gate set.

Never write the TypeSafe key into a source file, a test fixture, a committed settings file, or a
plugin manifest default. It comes from the environment or from the plugin's `apiKey` option.

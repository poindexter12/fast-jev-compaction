---
description: Atomic commits and one hat per commit
priority: 95
---
- One logical, self-contained change per commit. A library change, a hook change, and a README
  update are three commits unless they are genuinely one change that spans the layers. Split by
  dependency order so each commit stands alone.
- One hat per commit: a commit either adds behavior and ships with its test, or it preserves
  behavior and restructures. Never both.
- Stage per path or per hunk. Do not blind-add the whole tree; `package-lock.json` and
  `demo/SystemOneDemo/build` noise should never ride along with a source change.
- Commit at each finished, green step, where green means the three gates in the verification rule.
- Commit only when asked, and push only when asked. `main` tracks `origin`, so branch before
  working on it. Never amend a published commit and never skip hooks.
- Keep every technical claim in a commit message to something you observed. "Cause not yet
  confirmed" beats an invented root cause.

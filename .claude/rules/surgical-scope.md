---
description: Do the requested work, and confirm the work is required
priority: 90
---
- Before starting, establish that the work is actually required. Read the current behavior through
  its callers and tests and say what you found. If the thing is already handled, say so and stop;
  an honest "this already works, here is where" is a better answer than a change.
- Every changed line traces back to the request. Do not improve adjacent code, rename things you
  passed on the way, or refactor what is not broken. Match the surrounding idiom, including the
  doc-comment-on-exports style this codebase already uses.
- Reach for what is here before adding anything: the exported building blocks in `src/`
  (`collectToolCalls`, `fitState`, `batchCalls`, `decideCall`, `applyDecisions`), then Node's
  standard library, then the four devDependencies. A new dependency needs a gap you can name.
- Make the smallest change the evidence supports. No speculative options, no configuration knob
  without a caller, no abstraction for a second case that does not exist yet.
- State assumptions before implementing. When a request reads two ways, present both instead of
  silently picking one, and stop to name what is unclear rather than guessing.
- Separate a behavior change from a tidy-up. If a cleanup is genuinely needed first, do it as its
  own step and say so, rather than folding it into the feature.

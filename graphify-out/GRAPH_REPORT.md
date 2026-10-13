# Graph Report - fast-jev-compaction  (2026-10-13)

## Corpus Check
- 30 files · ~75,798 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .toml 1, .plist 1)

## Summary
- 780 nodes · 1025 edges · 29 communities (17 shown, 12 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dc495867`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- claude-code.d.ts
- fast-systemone.ts
- package.json
- main.swift
- fast-systemone-compaction.test.ts
- compact.ts
- types.ts
- state.ts
- Chunk
- Library TypeScript Config
- Hook TypeScript Config
- fast-systemone-compaction
- Demo
- messages.ts
- ChunkView
- demo.ts
- URL Query Parameters
- Phase
- build.sh
- Abort Signal Handling
- URL Serialization
- Abort Controller
- Engine Interfaces
- Text Decoding
- Text Encoding
- Test Suite Grouping
- Test Declaration

## God Nodes (most connected - your core abstractions)
1. `Demo` - 20 edges
2. `Chunk` - 16 edges
3. `compact()` - 16 edges
4. `fitState()` - 15 edges
5. `ChunkView` - 14 edges
6. `compilerOptions` - 12 edges
7. `compilerOptions` - 12 edges
8. `TerminalView` - 11 edges
9. `Message` - 10 edges
10. `SystemOneAsker` - 10 edges

## Surprising Connections (you probably didn't know these)
- `Install and usage` --references--> `buildSystemOneRequest()`  [INFERRED]
  README.md → src/request.ts
- `Install and usage` --references--> `parseSystemOneResponse()`  [INFERRED]
  README.md → src/request.ts
- `Install and usage` --references--> `fitState()`  [INFERRED]
  README.md → src/state.ts
- `Install and usage` --references--> `Message`  [INFERRED]
  README.md → src/types.ts
- `Install and usage` --references--> `SystemOneAsker`  [INFERRED]
  README.md → src/types.ts

## Import Cycles
- None detected.

## Communities (29 total, 12 thin omitted)

### Community 0 - "claude-code.d.ts"
Cohesion: 0.00
Nodes (443): AgentCallRecord, AgentInfo, AgentLoop, AgentOfferInput, AgentOfferResult, AgentSpawnArgs, AgentSpawnInput, AgentSpawnResult (+435 more)

### Community 1 - "fast-systemone.ts"
Cohesion: 0.09
Nodes (31): compactSession(), decisionLog(), decisionLogLines(), getApiKey(), HOOK_DEFAULTS, HookConfig, HookFetch, HookFetchInit (+23 more)

### Community 2 - "package.json"
Cohesion: 0.07
Nodes (27): description, devDependencies, tsx, @types/node, typescript, vitest, engines, node (+19 more)

### Community 3 - "main.swift"
Cohesion: 0.13
Nodes (17): AppKit, ContextMeter, .body, .color, Palette, RootView, Spinner, .body (+9 more)

### Community 4 - "fast-systemone-compaction.test.ts"
Cohesion: 0.11
Nodes (8): call(), fileA, fileB, fit, message(), result(), Seen, transcript()

### Community 5 - "compact.ts"
Cohesion: 0.16
Nodes (21): Install and usage, applyDecisions(), askBatch(), batchCalls(), compact(), count(), decideCall(), DEFAULT_OPTIONS (+13 more)

### Community 6 - "types.ts"
Cohesion: 0.15
Nodes (18): systemOneAsker(), buildSystemOneRequest(), parseSystemOneResponse(), SystemOneRequest, CallAction, ChoiceAnswer, ChoiceQuestion, HistoryToolCall (+10 more)

### Community 7 - "state.ts"
Cohesion: 0.23
Nodes (15): abridge(), callsByMessage(), compactCall(), estimateTokens(), fitState(), goalFromMessages(), historyEntries(), INPUT_CHARS (+7 more)

### Community 8 - "Chunk"
Cohesion: 0.14
Nodes (16): CallScore, Chunk, .badgeLabel, .isText, .verdict, Role, assistant, toolHeader (+8 more)

### Community 9 - "Library TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, declaration, declarationMap, module, moduleResolution, noEmitOnError, outDir, rootDir (+6 more)

### Community 10 - "Hook TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, baseUrl, lib, module, moduleResolution, noEmit, noUncheckedIndexedAccess, paths (+6 more)

### Community 11 - "fast-systemone-compaction"
Cohesion: 0.15
Nodes (11): Configuration, fast-systemone-compaction Claude Code mod, Scope and caveat, Animated demo (macOS), Claude Code plugin, Development, fast-systemone-compaction, How it works (+3 more)

### Community 12 - "Demo"
Cohesion: 0.16
Nodes (5): Demo, FrameKey, .body, ScrollRequest, .body

### Community 13 - "messages.ts"
Cohesion: 0.28
Nodes (7): Options, SystemOneClient, SystemOneClientOptions, compactMessages(), CompactMessagesOptions, CompactOptions, CompactResult

### Community 14 - "ChunkView"
Cohesion: 0.29
Nodes (7): ChunkView, .badge, .body, .content, .shownText, .tint, .toolTitle

### Community 15 - "demo.ts"
Cohesion: 0.15
Nodes (4): messages, Message, SystemOneAsker, PluginOptions

### Community 17 - "Phase"
Cohesion: 0.29
Nodes (7): Phase, collapsing, done, idle, scanning, typing, waiting

## Knowledge Gaps
- **33 isolated node(s):** `AppKit`, `SwiftUI`, `user`, `assistant`, `toolHeader` (+28 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 616 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `package.json` to `fast-systemone.ts`, `fast-systemone-compaction.test.ts`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `fitState()` (e.g. with `surgical-scope.md` and `Install and usage`) actually correct?**
  _`fitState()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `AppKit`, `SwiftUI`, `user` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `claude-code.d.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.004424778761061947 - nodes in this community are weakly interconnected._
- **Why does `PluginOptions` connect `demo.ts` to `claude-code.d.ts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Should `fast-systemone.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08771929824561403 - nodes in this community are weakly interconnected._
- **Why does `Message` connect `demo.ts` to `fast-systemone.ts`, `fast-systemone-compaction.test.ts`, `compact.ts`, `types.ts`, `state.ts`, `messages.ts`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
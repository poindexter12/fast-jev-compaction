# Graph Report - fast-jev-compaction  (2026-10-15)

## Corpus Check
- 38 files · ~81,853 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 2, .toml 1, .plist 1)

## Summary
- 831 nodes · 1139 edges · 31 communities (19 shown, 12 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 69 edges (avg confidence: 0.94)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a5e35df9`
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
- INDEX.md
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
- compactSession
- request.ts

## God Nodes (most connected - your core abstractions)
1. `Demo` - 20 edges
2. `fitState()` - 19 edges
3. `compact()` - 17 edges
4. `Chunk` - 16 edges
5. `ChunkView` - 14 edges
6. `SystemOneAsker` - 12 edges
7. `compilerOptions` - 12 edges
8. `compilerOptions` - 12 edges
9. `TerminalView` - 11 edges
10. `applyDecisions()` - 11 edges

## Surprising Connections (you probably didn't know these)
- `The two budgets` --references--> `resolveOptions()`  [INFERRED]
  .claude/.codebase-info/architecture.md → src/compact.ts
- `Endpoint routing` --references--> `buildSystemOneRequest()`  [INFERRED]
  .claude/.codebase-info/architecture.md → src/request.ts
- `Style conventions` --references--> `fitState()`  [INFERRED]
  .claude/.codebase-info/patterns.md → src/state.ts
- `Two artifacts, one tree` --references--> `SystemOneAsker`  [INFERRED]
  .claude/.codebase-info/architecture.md → src/types.ts
- `Common tasks` --references--> `resolveHookConfig()`  [INFERRED]
  .claude/.codebase-info/onboarding.md → hooks/fast-systemone.ts

## Import Cycles
- None detected.

## Communities (31 total, 12 thin omitted)

### Community 0 - "claude-code.d.ts"
Cohesion: 0.00
Nodes (443): AgentCallRecord, AgentInfo, AgentLoop, AgentOfferInput, AgentOfferResult, AgentSpawnArgs, AgentSpawnInput, AgentSpawnResult (+435 more)

### Community 1 - "fast-systemone.ts"
Cohesion: 0.06
Nodes (38): Logging and observability, Commands, External services, Secrets, Source of truth, Stack, Tech landscape, Two TypeScript projects, two configs (+30 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (28): description, devDependencies, tsx, @types/node, typescript, vitest, engines, node (+20 more)

### Community 3 - "main.swift"
Cohesion: 0.13
Nodes (17): AppKit, ContextMeter, .body, .color, Palette, RootView, Spinner, .body (+9 more)

### Community 4 - "fast-systemone-compaction.test.ts"
Cohesion: 0.07
Nodes (9): messages, call(), fileA, fileB, fit, message(), result(), Seen (+1 more)

### Community 5 - "compact.ts"
Cohesion: 0.19
Nodes (21): Common tasks, Invariants, Option resolution, Install and usage, applyDecisions(), askBatch(), batchCalls(), compact() (+13 more)

### Community 6 - "types.ts"
Cohesion: 0.14
Nodes (14): ArchiveResult, CallAction, CallAnswer, CallDecision, ChoiceAnswer, ChoiceQuestion, HistoryToolCall, NoulAnswer (+6 more)

### Community 7 - "state.ts"
Cohesion: 0.14
Nodes (23): The state-fitting ladder, The two budgets, Why a hand-rolled token estimate, SystemOneClientOptions, abridge(), callsByMessage(), compactCall(), estimateTokens() (+15 more)

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
Cohesion: 0.19
Nodes (8): Options, SystemOneClient, compactMessages(), CompactMessagesOptions, CompactResult, Message, SystemOneAsker, PluginOptions

### Community 14 - "ChunkView"
Cohesion: 0.29
Nodes (7): ChunkView, .badge, .body, .content, .shownText, .tint, .toolTitle

### Community 15 - "INDEX.md"
Cohesion: 0.15
Nodes (8): Documents, fast-systemone-compaction : codebase map, How to use and maintain this map, Structure, Getting to green, Git, Known state, so you do not re-derive it, Onboarding

### Community 17 - "Phase"
Cohesion: 0.29
Nodes (7): Phase, collapsing, done, idle, scanning, typing, waiting

### Community 29 - "compactSession"
Cohesion: 0.19
Nodes (13): Architecture, Endpoint routing, Pinning, The compaction pipeline, The decision ladder, The hook, and what happens when it fails, Two artifacts, one tree, Error handling: the library throws, the hook decides (+5 more)

### Community 30 - "request.ts"
Cohesion: 0.33
Nodes (8): systemOneAsker(), buildSystemOneRequest(), parseSystemOneResponse(), SystemOneRequest, wellFormedEnd(), SystemOneQuestions, SystemOneResponse, SystemOneState

## Knowledge Gaps
- **33 isolated node(s):** `AppKit`, `SwiftUI`, `user`, `assistant`, `toolHeader` (+28 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 630 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `package.json` to `fast-systemone.ts`, `fast-systemone-compaction.test.ts`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `fitState()` (e.g. with `The state-fitting ladder` and `Common tasks`) actually correct?**
  _`fitState()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `AppKit`, `SwiftUI`, `user` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `claude-code.d.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.004424778761061947 - nodes in this community are weakly interconnected._
- **Why does `PluginOptions` connect `messages.ts` to `claude-code.d.ts`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `compact()` (e.g. with `Testing` and `library-hook-boundary.md`) actually correct?**
  _`compact()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `fast-systemone.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.06475485661424607 - nodes in this community are weakly interconnected._
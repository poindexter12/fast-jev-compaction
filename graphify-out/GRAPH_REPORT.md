# Graph Report - fast-jev-compaction  (2026-10-13)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 753 nodes · 980 edges · 29 communities (17 shown, 12 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 59,597 input · 400 output

## Graph Freshness
- Built from commit: `e3f262a7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Claude Code Type Definitions
- Compaction Hook Entry Point
- NPM Package Manifest
- SwiftUI Demo App Shell
- Public API Index Exports
- Compaction Orchestration Pipeline
- Core Domain Type Definitions
- Tool Call State Fitting
- Chunk Scoring Verdicts
- Library TypeScript Config
- Hook TypeScript Config
- Jev Request Client
- Demo Animation Phases
- Message Compaction Client API
- Scroll Position Tracking
- Demo Message Script
- URL Query Parameters
- Chunk Display View
- Processing Phase States
- Message Role Labels
- Abort Signal Handling
- URL Serialization
- Build Script
- Abort Controller
- Engine Interfaces
- Text Decoding
- Text Encoding
- Test Suite Grouping
- Test Declaration

## God Nodes (most connected - your core abstractions)
1. `Demo` - 20 edges
2. `Chunk` - 16 edges
3. `compact()` - 15 edges
4. `ChunkView` - 14 edges
5. `fitState()` - 13 edges
6. `compilerOptions` - 12 edges
7. `compilerOptions` - 12 edges
8. `TerminalView` - 11 edges
9. `URLSearchParams` - 9 edges
10. `Phase` - 9 edges

## Surprising Connections (you probably didn't know these)
- `compactSession()` --calls--> `compact()`  [EXTRACTED]
  hooks/fast-jev.ts → src/compact.ts
- `register()` --calls--> `reductionRatio()`  [EXTRACTED]
  hooks/fast-jev.ts → src/compact.ts
- `summarize()` --calls--> `reductionRatio()`  [EXTRACTED]
  hooks/fast-jev.ts → src/compact.ts
- `jevAsker()` --calls--> `buildJevRequest()`  [EXTRACTED]
  hooks/fast-jev.ts → src/request.ts
- `jevAsker()` --calls--> `parseJevResponse()`  [EXTRACTED]
  hooks/fast-jev.ts → src/request.ts

## Import Cycles
- None detected.

## Communities (29 total, 12 thin omitted)

### Community 0 - "Claude Code Type Definitions"
Cohesion: 0.00
Nodes (444): AgentCallRecord, AgentInfo, AgentLoop, AgentOfferInput, AgentOfferResult, AgentSpawnArgs, AgentSpawnInput, AgentSpawnResult (+436 more)

### Community 1 - "Compaction Hook Entry Point"
Cohesion: 0.10
Nodes (28): compactSession(), decisionLog(), decisionLogLines(), getApiKey(), HOOK_DEFAULTS, HookConfig, HookFetch, HookFetchInit (+20 more)

### Community 2 - "NPM Package Manifest"
Cohesion: 0.08
Nodes (25): description, devDependencies, tsx, @types/node, typescript, vitest, engines, node (+17 more)

### Community 3 - "SwiftUI Demo App Shell"
Cohesion: 0.13
Nodes (17): AppKit, ContextMeter, .body, .color, JevDemoApp, .body, Palette, RootView (+9 more)

### Community 4 - "Public API Index Exports"
Cohesion: 0.11
Nodes (8): call(), fileA, fileB, fit, message(), result(), Seen, transcript()

### Community 5 - "Compaction Orchestration Pipeline"
Cohesion: 0.21
Nodes (16): applyDecisions(), askBatch(), batchCalls(), compact(), count(), decideCall(), DEFAULT_OPTIONS, finite() (+8 more)

### Community 6 - "Core Domain Type Definitions"
Cohesion: 0.12
Nodes (16): CallAction, CallAnswer, CallDecision, ChoiceAnswer, ChoiceQuestion, FittedState, HistoryEntry, HistoryToolCall (+8 more)

### Community 7 - "Tool Call State Fitting"
Cohesion: 0.27
Nodes (15): abridge(), callsByMessage(), collectToolCalls(), compactCall(), estimateTokens(), fitState(), goalFromMessages(), historyEntries() (+7 more)

### Community 8 - "Chunk Scoring Verdicts"
Cohesion: 0.22
Nodes (11): CallScore, Chunk, .badgeLabel, .isText, .verdict, text(), tool(), Verdict (+3 more)

### Community 9 - "Library TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, declaration, declarationMap, module, moduleResolution, noEmitOnError, outDir, rootDir (+6 more)

### Community 10 - "Hook TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, baseUrl, lib, module, moduleResolution, noEmit, noUncheckedIndexedAccess, paths (+6 more)

### Community 11 - "Jev Request Client"
Cohesion: 0.29
Nodes (9): jevAsker(), buildJevRequest(), DEFAULT_MODEL, JevRequest, parseJevResponse(), SYSTEM_ONE_URL, JevQuestions, JevResponse (+1 more)

### Community 13 - "Message Compaction Client API"
Cohesion: 0.22
Nodes (7): JevClient, JevClientOptions, compactMessages(), CompactMessagesOptions, CompactOptions, CompactResult, JevAsker

### Community 14 - "Scroll Position Tracking"
Cohesion: 0.33
Nodes (3): FrameKey, ScrollRequest, .body

### Community 17 - "Chunk Display View"
Cohesion: 0.29
Nodes (7): ChunkView, .badge, .body, .content, .shownText, .tint, .toolTitle

### Community 18 - "Processing Phase States"
Cohesion: 0.29
Nodes (7): Phase, collapsing, done, idle, scanning, typing, waiting

### Community 19 - "Message Role Labels"
Cohesion: 0.40
Nodes (5): Role, assistant, toolHeader, toolLine, user

## Knowledge Gaps
- **33 isolated node(s):** `.badge`, `.body`, `.content`, `.shownText`, `.tint` (+28 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 601 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `NPM Package Manifest` to `Compaction Hook Entry Point`, `Public API Index Exports`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **What connects `.badge`, `.body`, `.content` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Claude Code Type Definitions` be split into smaller, more focused modules?**
  _Cohesion score 0.004415011037527594 - nodes in this community are weakly interconnected._
- **Why does `compact()` connect `Compaction Orchestration Pipeline` to `Compaction Hook Entry Point`, `Public API Index Exports`, `Message Compaction Client API`, `Tool Call State Fitting`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `Compaction Hook Entry Point` be split into smaller, more focused modules?**
  _Cohesion score 0.10252100840336134 - nodes in this community are weakly interconnected._
- **Why does `URLSearchParams` connect `URL Query Parameters` to `Claude Code Type Definitions`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Should `NPM Package Manifest` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
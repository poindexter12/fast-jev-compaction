# Graph Report - fast-jev-compaction  (2026-10-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 831 nodes · 1139 edges · 31 communities (19 shown, 12 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 69 edges (avg confidence: 0.94)
- Token cost: 63,081 input · 402 output

## Graph Freshness
- Built from commit: `a5e35df9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Claude Code Agent SDK Types
- Project Tooling and Conventions
- NPM Package Manifest
- Swift Demo App Shell
- Demo and Library Entry Points
- Compaction Decision Pipeline
- Shared Type Definitions
- State Fitting and Token Budgets
- Demo Chunk Rendering Model
- Library TypeScript Config
- Hooks TypeScript Config
- Project README Docs
- Demo Animation and Scrolling
- System One Client Boundary
- Chunk View Component
- Codebase Map Index
- URL Query Parameters
- Demo Phase States
- Demo Build Script
- Abort Signal Handling
- URL Object
- Abort Controller
- Engine Interfaces
- Text Decoding
- Text Encoding
- Test Suite Describe
- Test Case Helper
- Architecture and Patterns Docs
- System One API Client

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
- `Two artifacts, one tree` --references--> `SystemOneAsker`  [INFERRED]
  .claude/.codebase-info/architecture.md → src/types.ts
- `Endpoint routing` --references--> `buildSystemOneRequest()`  [INFERRED]
  .claude/.codebase-info/architecture.md → src/request.ts
- `The two budgets` --references--> `resolveOptions()`  [INFERRED]
  .claude/.codebase-info/architecture.md → src/compact.ts
- `Style conventions` --references--> `fitState()`  [INFERRED]
  .claude/.codebase-info/patterns.md → src/state.ts
- `Error handling: the library throws, the hook decides` --references--> `SystemOneClient`  [INFERRED]
  .claude/.codebase-info/patterns.md → src/client.ts

## Import Cycles
- None detected.

## Communities (31 total, 12 thin omitted)

### Community 0 - "Claude Code Agent SDK Types"
Cohesion: 0.00
Nodes (443): AgentCallRecord, AgentInfo, AgentLoop, AgentOfferInput, AgentOfferResult, AgentSpawnArgs, AgentSpawnInput, AgentSpawnResult (+435 more)

### Community 1 - "Project Tooling and Conventions"
Cohesion: 0.06
Nodes (38): Logging and observability, Commands, External services, Secrets, Source of truth, Stack, Tech landscape, Two TypeScript projects, two configs (+30 more)

### Community 2 - "NPM Package Manifest"
Cohesion: 0.06
Nodes (28): description, devDependencies, tsx, @types/node, typescript, vitest, engines, node (+20 more)

### Community 3 - "Swift Demo App Shell"
Cohesion: 0.13
Nodes (17): AppKit, ContextMeter, .body, .color, Palette, RootView, Spinner, .body (+9 more)

### Community 4 - "Demo and Library Entry Points"
Cohesion: 0.07
Nodes (9): messages, call(), fileA, fileB, fit, message(), result(), Seen (+1 more)

### Community 5 - "Compaction Decision Pipeline"
Cohesion: 0.19
Nodes (21): Common tasks, Invariants, Option resolution, Install and usage, applyDecisions(), askBatch(), batchCalls(), compact() (+13 more)

### Community 6 - "Shared Type Definitions"
Cohesion: 0.14
Nodes (14): ArchiveResult, CallAction, CallAnswer, CallDecision, ChoiceAnswer, ChoiceQuestion, HistoryToolCall, NoulAnswer (+6 more)

### Community 7 - "State Fitting and Token Budgets"
Cohesion: 0.14
Nodes (23): The state-fitting ladder, The two budgets, Why a hand-rolled token estimate, SystemOneClientOptions, abridge(), callsByMessage(), compactCall(), estimateTokens() (+15 more)

### Community 8 - "Demo Chunk Rendering Model"
Cohesion: 0.14
Nodes (16): CallScore, Chunk, .badgeLabel, .isText, .verdict, Role, assistant, toolHeader (+8 more)

### Community 9 - "Library TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, declaration, declarationMap, module, moduleResolution, noEmitOnError, outDir, rootDir (+6 more)

### Community 10 - "Hooks TypeScript Config"
Cohesion: 0.13
Nodes (14): compilerOptions, baseUrl, lib, module, moduleResolution, noEmit, noUncheckedIndexedAccess, paths (+6 more)

### Community 11 - "Project README Docs"
Cohesion: 0.15
Nodes (11): Configuration, fast-systemone-compaction Claude Code mod, Scope and caveat, Animated demo (macOS), Claude Code plugin, Development, fast-systemone-compaction, How it works (+3 more)

### Community 12 - "Demo Animation and Scrolling"
Cohesion: 0.16
Nodes (5): Demo, FrameKey, .body, ScrollRequest, .body

### Community 13 - "System One Client Boundary"
Cohesion: 0.19
Nodes (8): Options, SystemOneClient, compactMessages(), CompactMessagesOptions, CompactResult, Message, SystemOneAsker, PluginOptions

### Community 14 - "Chunk View Component"
Cohesion: 0.29
Nodes (7): ChunkView, .badge, .body, .content, .shownText, .tint, .toolTitle

### Community 15 - "Codebase Map Index"
Cohesion: 0.15
Nodes (8): Documents, fast-systemone-compaction : codebase map, How to use and maintain this map, Structure, Getting to green, Git, Known state, so you do not re-derive it, Onboarding

### Community 17 - "Demo Phase States"
Cohesion: 0.29
Nodes (7): Phase, collapsing, done, idle, scanning, typing, waiting

### Community 29 - "Architecture and Patterns Docs"
Cohesion: 0.19
Nodes (13): Architecture, Endpoint routing, Pinning, The compaction pipeline, The decision ladder, The hook, and what happens when it fails, Two artifacts, one tree, Error handling: the library throws, the hook decides (+5 more)

### Community 30 - "System One API Client"
Cohesion: 0.33
Nodes (8): systemOneAsker(), buildSystemOneRequest(), parseSystemOneResponse(), SystemOneRequest, wellFormedEnd(), SystemOneQuestions, SystemOneResponse, SystemOneState

## Knowledge Gaps
- **33 isolated node(s):** `.badge`, `.body`, `.content`, `.shownText`, `.tint` (+28 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 630 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vitest` connect `NPM Package Manifest` to `Project Tooling and Conventions`, `Demo and Library Entry Points`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `fitState()` (e.g. with `The state-fitting ladder` and `Common tasks`) actually correct?**
  _`fitState()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `.badge`, `.body`, `.content` to the rest of the system?**
  _33 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Claude Code Agent SDK Types` be split into smaller, more focused modules?**
  _Cohesion score 0.004424778761061947 - nodes in this community are weakly interconnected._
- **Why does `PluginOptions` connect `System One Client Boundary` to `Claude Code Agent SDK Types`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `compact()` (e.g. with `Testing` and `library-hook-boundary.md`) actually correct?**
  _`compact()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `Project Tooling and Conventions` be split into smaller, more focused modules?**
  _Cohesion score 0.06475485661424607 - nodes in this community are weakly interconnected._
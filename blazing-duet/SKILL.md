---
name: design-context-generator
description: >-
  Interactively co-design and generate a high-density, semantic Tailwind-powered DESIGN_CONTEXT.md and zero-dependency live visual preview (design-preview.html). Supercharged with the OpenCode Data (opencode.ai/data) Technical Monospace telemetry engine, 6 distinct archetypes, strict 60-30-10 distribution, mathematical WCAG 2.1 AA/AAA verification, and native Tailwind CSS v4 Browser CDN (@tailwindcss/browser@4) architecture.
---

# Design Context Generator & OpenCode Data Engine

A next-generation system skill to interactively architect, visually test, and generate token-efficient frontend design systems (`DESIGN_CONTEXT.md`) alongside a zero-dependency live HTML preview (`design-preview.html`).

Directly incorporates the **OpenCode Data** (`opencode.ai/data`) technical monospace telemetry design system extracted via browser devtools MCP analysis, featuring **IBM Plex Mono** typography, obsidian charcoal canvas (`#161616`), hairline 0.5px precision borders, live status tickers, leaderboard ranking cards, and high-density data tables.

Strictly enforces:
1. **The 60-30-10 Color Rule** + functional feedback states.
2. **Mathematical WCAG 2.1 AA/AAA Accessibility** (minimum 4.5:1 for body copy, 3.0:1 for borders/controls, 7.0:1 for enhanced text).
3. **Tailwind CSS v4 Browser CDN Architecture** (`@tailwindcss/browser@4`) with `@theme` and `@custom-variant dark`.
4. **Token-Efficient Semantic Utility Recipes** (compact classes without custom CSS bloat).
5. **No Emojis** (crisp SVG iconography with 1.5px/2px stroke or clean text badges).

---

## When to Use

- When initializing, upgrading, or generating a `DESIGN_CONTEXT.md` for any web application or dashboard.
- When creating telemetry dashboards, AI leaderboards, developer tools, or data-dense platforms inspired by OpenCode Data (`opencode.ai/data`).
- When establishing design tokens, UI guidelines, or styling standards for Tailwind CSS v4 (CDN or Vite/CLI) or Tailwind v3.
- When providing downstream AI coding agents with concise, unambiguous component blueprints to prevent arbitrary hex code drift.

---

## Core Directives & Constraints

1. **NO ONE-SHOT DUMPS**: Never output a final `DESIGN_CONTEXT.md` on the first turn. Follow the 5-phase interactive workflow to intake preferences, harmonize tokens, mathematically verify contrast, generate a live visual preview, and confirm with the user.
2. **TOKEN-EFFICIENT SEMANTIC RECIPES**: Blueprints must be written in compact semantic Tailwind utility classes (e.g. `px-4 py-2 rounded-input bg-primary text-primary-foreground`) rather than custom CSS blocks or one-off hex values (`bg-[#1a2b3c]`).
3. **NO EMOJIS**: Never use emojis in generated design contexts, code files, or user communications. Use clean SVG icon specs or concise text badges.
4. **WCAG 2.1 AA/AAA COMPLIANCE**: All color combinations must pass mathematical contrast testing:
   - Body text against canvas/surfaces: **≥ 4.5:1** (AAA standard targets **≥ 7.0:1**).
   - Essential icons, borders, and input controls: **≥ 3.0:1**.
   - Primary CTA button text: **≥ 4.5:1**.
5. **TAILWIND CSS V4 CDN ARCHITECTURE**:
   - For standalone zero-build HTML/JS, use `<script src="https://unpkg.com/@tailwindcss/browser@4"></script>`.
   - Configure via `<style type="text/tailwindcss">` using `@theme` and `@custom-variant dark (&:where(.dark, .dark *));`.
   - Dynamic dark mode is controlled via `.dark` class on `<html>` with CSS variable token swapping between `:root` and `.dark`.

---

## Modular References & Templates

This skill contains deep-dive modular references and production templates:
- [opencode-data-spec.md](./references/opencode-data-spec.md): Complete specification of the OpenCode Data design system (IBM Plex Mono, obsidian canvas, hairline borders, telemetry ticker, leaderboard cards, data tables, sparklines).
- [archetypes.md](./references/archetypes.md): Curated presets:
  1. **OpenCode Data** (Technical Monospace Engine from `opencode.ai/data`)
  2. **Linear / SaaS Dark** (Obsidian pitch, electric violet/cyan, translucent borders)
  3. **Ultra-Minimalist** (Stark monochrome, architectural whitespace, zero gradients)
  4. **Modern Clean Enterprise** (Plus Jakarta Sans, enterprise blues, crisp card grids)
  5. **Fintech Terminal** (Tabular numbers, order book ladders, profit/loss accents)
  6. **Editorial Minimal** (Display typography, warm paper tones, literary elegance)
- [semantic-tokens.md](./references/semantic-tokens.md): Universal 60-30-10 token contract, functional tokens, and CSS variable mapping.
- [typography-scales.md](./references/typography-scales.md): Font pairings, Tailwind typography scales, and tabular data rules.
- [wcag-contrast-rules.md](./references/wcag-contrast-rules.md): Mathematical relative luminance formulas and verified contrast matrix.
- [preview.template.html](./templates/preview.template.html): Zero-dependency Tailwind v4 CDN live interactive HTML preview with archetype switcher and theme toggle.
- [DESIGN_CONTEXT.template.md](./templates/DESIGN_CONTEXT.template.md): Complete markdown blueprint template for downstream agents.
- [tailwind.config.template.js](./templates/tailwind.config.template.js): Exportable configuration for Tailwind v4 CDN, v4 CSS build, and v3.
- [validate-contrast.js](./scripts/validate-contrast.js): Node/browser script to calculate contrast ratios.

---

## Procedural Workflow (5 Phases)

### Phase 1: Intake & Discovery
1. Check if the user specified:
   - Target archetype (Default: **OpenCode Data** or **Linear / SaaS Dark**).
   - Desired brand/accent color (or offer curated seed accents: OpenCode Indigo `#8190ff`, Cobalt `#3b5cf6`, Electric Violet `#8b5cf6`, Emerald `#10b981`).
   - Target theme preference (Dual-mode default, Dark-first, or Light-first).
   - Target stack (Default: Tailwind CSS v4 Browser CDN for zero-build HTML/JS, or Vite/CLI).
2. If unspecified, use `ask_question` to clarify preferences interactively.

### Phase 2: Semantic Harmonization & OpenCode Data Mapping
1. Map selected colors to the strict **60-30-10 distribution** + functional states:
   - **60% Dominant**: `bg-background`, `bg-surface`, `text-foreground`.
   - **30% Secondary**: `bg-surface-elevated`, `bg-muted`, `text-muted-foreground`, `border-border`, `border-border-subtle`.
   - **10% Accent**: `bg-primary`, `text-primary-foreground`, `hover:bg-primary-hover`, `ring-ring`.
   - **Functional**: `bg-success`, `bg-warning`, `bg-destructive`, `bg-info` and their respective foregrounds.
2. Determine appropriate typography stack:
   - If **OpenCode Data**: Apply `IBM Plex Mono` globally.
   - If **Linear / SaaS Dark**: Apply `Inter` or `Geist Sans` with `JetBrains Mono` for tabular metrics.

### Phase 3: Mathematical WCAG Contrast Validation
1. Calculate contrast ratios for every foreground/background pair using the relative luminance formula in [wcag-contrast-rules.md](./references/wcag-contrast-rules.md).
2. Ensure:
   - Dark mode body text on `#161616` achieves **> 15:1** (AAA).
   - Secondary text achieves **> 4.5:1** (AA).
   - If accent is dark, foreground text must be `#ffffff`.
   - If accent is bright neon, foreground text must be `#09090b` or `#161616`.
3. Present the proposed palette table to the user with exact hex codes and contrast ratios.

### Phase 4: Standalone Live Visual Preview (`design-preview.html`)
1. Generate `design-preview.html` in the project root by populating [preview.template.html](./templates/preview.template.html) with resolved tokens.
2. Inform the user that `design-preview.html` is ready to open in their browser to test:
   - Live OpenCode Data leaderboard cards, telemetry status ticker, and high-density data tables.
   - Live theme toggle (Dark / Light) with `localStorage` persistence.
   - Dynamic archetype switcher (morphing between OpenCode Data, Linear, Ultra-Minimal, etc. in real-time).
   - Button states, inputs, search bar with `⌘K`, badges, and interactive modals.
3. Solicit user feedback or approval.

### Phase 5: Production `DESIGN_CONTEXT.md` & Config Export
Upon user approval:
1. Write the finalized `DESIGN_CONTEXT.md` in the project root using [DESIGN_CONTEXT.template.md](./templates/DESIGN_CONTEXT.template.md).
2. Provide exportable configuration snippet for the user's stack (Tailwind v4 CDN `<head>` or `tailwind.config.js`).
3. Keep `design-preview.html` as the living visual test bench for future iterations.

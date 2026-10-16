# Universal Semantic Design Tokens (Tailwind CSS v4 & v3)

This reference defines the standardized semantic token architecture for frontend systems. AI coding agents use these tokens rather than hardcoded hex codes, ensuring 100% consistent visual hierarchy, seamless dark mode, and minimal token overhead.

---

## 1. The 60-30-10 Rule + Functional Distribution

| Role | Semantic Token | Tailwind Utility | OpenCode Data Equivalent | Linear / SaaS Dark Equivalent | Purpose |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Dominant (60%)** | `background` | `bg-background` | `#161616` (Dark) / `#ffffff` (Light) | `#08090a` (Dark) / `#ffffff` (Light) | Base canvas / page root |
| | `foreground` | `text-foreground` | `#ffffff` (Dark) / `#161616` (Light) | `#ffffff` (Dark) / `#09090b` (Light) | High-contrast body text & titles |
| | `surface` | `bg-surface` | `#242424` (Dark) / `#fafafa` (Light) | `#121316` (Dark) / `#fafafa` (Light) | Cards, panels, main containers |
| **Secondary (30%)** | `surface-elevated` | `bg-surface-elevated` | `#303030` (Dark) / `#eeeeee` (Light) | `#1a1c20` (Dark) / `#f4f4f5` (Light) | Popovers, modals, dropdown menus |
| | `muted` | `bg-muted` | `#3a3a3a` (Dark) / `#eeeeee` (Light) | `#222429` (Dark) / `#f4f4f5` (Light) | Inactive tabs, disabled chips |
| | `muted-foreground` | `text-muted-foreground` | `#a3a3a3` (Dark) / `#707070` (Light) | `#a1a1aa` (Dark) / `#71717a` (Light) | Secondary captions, timestamps, meta |
| | `border` | `border-border` | `rgba(255,255,255,0.1)` / `0.1a` | `rgba(255,255,255,0.08)` | Hairline structural boundaries |
| | `border-subtle` | `border-border-subtle` | `rgba(255,255,255,0.06)` | `rgba(255,255,255,0.04)` | Nested table dividers, separators |
| **Accent (10%)** | `primary` | `bg-primary`, `text-primary` | `#8190ff` (Dark) / `#3b5cf6` (Light) | `#8b5cf6` (Electric Violet) | Primary CTAs, active toggles, focus |
| | `primary-foreground` | `text-primary-foreground` | `#ffffff` (or `#09090b` if bright) | `#ffffff` | High-contrast label on primary CTA |
| | `primary-hover` | `hover:bg-primary-hover` | Lightened/darkened accent state | Hover feedback |
| | `ring` | `ring-ring` | `#8190ff` / `#3b5cf6` | Accessible keyboard focus outline |
| **Functional** | `success` | `bg-success`, `text-success` | `#10b981` (Emerald) | `#10b981` (Emerald) | Online states, positive gains, checks |
| | `warning` | `bg-warning`, `text-warning` | `#f59e0b` (Amber) | `#f59e0b` (Amber) | Pending reviews, system notices |
| | `destructive` | `bg-destructive`, `text-destructive`| `#ef4444` (Rose/Red) | `#ef4444` (Rose/Red) | Errors, delete actions, loss |
| | `info` | `bg-info`, `text-info` | `#3b82f6` (Sky/Blue) | `#38bdf8` (Cyan) | Telemetry syncs, informational chips |

---

## 2. Tailwind CSS v4 `@theme` Architecture

In Tailwind CSS v4, tokens are defined as CSS custom properties and registered in `<style type="text/tailwindcss">` using `@theme`:

```html
<style type="text/tailwindcss">
  @import "tailwindcss";

  /* Enables class-based dark mode (<html class="dark">) */
  @custom-variant dark (&:where(.dark, .dark *));

  /* Light mode defaults */
  :root {
    --color-background: #ffffff;
    --color-foreground: #161616;
    --color-surface: #fafafa;
    --color-surface-elevated: #eeeeee;
    --color-muted: #f4f4f5;
    --color-muted-foreground: #707070;
    --color-border: rgba(0, 0, 0, 0.1);
    --color-border-subtle: rgba(0, 0, 0, 0.05);
    
    --color-primary: #3b5cf6;
    --color-primary-foreground: #ffffff;
    --color-primary-hover: #2563eb;
    --color-ring: #3b5cf6;

    --color-success: #10b981;
    --color-success-foreground: #ffffff;
    --color-warning: #f59e0b;
    --color-warning-foreground: #ffffff;
    --color-destructive: #ef4444;
    --color-destructive-foreground: #ffffff;
    --color-info: #0ea5e9;
    --color-info-foreground: #ffffff;

    --radius-card: 8px;
    --radius-input: 6px;
  }

  /* Dark mode overrides (OpenCode Data Engine Style) */
  .dark {
    --color-background: #161616;
    --color-foreground: #ffffff;
    --color-surface: #242424;
    --color-surface-elevated: #303030;
    --color-muted: #3a3a3a;
    --color-muted-foreground: #a3a3a3;
    --color-border: rgba(255, 255, 255, 0.1);
    --color-border-subtle: rgba(255, 255, 255, 0.06);

    --color-primary: #8190ff;
    --color-primary-foreground: #ffffff;
    --color-primary-hover: #6c7dfa;
    --color-ring: #8190ff;

    --color-success: #10b981;
    --color-success-foreground: #ffffff;
    --color-warning: #f59e0b;
    --color-warning-foreground: #ffffff;
    --color-destructive: #ef4444;
    --color-destructive-foreground: #ffffff;
    --color-info: #38bdf8;
    --color-info-foreground: #ffffff;
  }

  /* Map CSS variables to Tailwind v4 utilities */
  @theme {
    --color-background: var(--color-background);
    --color-foreground: var(--color-foreground);
    --color-surface: var(--color-surface);
    --color-surface-elevated: var(--color-surface-elevated);

    --color-muted: var(--color-muted);
    --color-muted-foreground: var(--color-muted-foreground);
    --color-border: var(--color-border);
    --color-border-subtle: var(--color-border-subtle);

    --color-primary: var(--color-primary);
    --color-primary-foreground: var(--color-primary-foreground);
    --color-primary-hover: var(--color-primary-hover);
    --color-ring: var(--color-ring);

    --color-success: var(--color-success);
    --color-success-foreground: var(--color-success-foreground);
    --color-warning: var(--color-warning);
    --color-warning-foreground: var(--color-warning-foreground);
    --color-destructive: var(--color-destructive);
    --color-destructive-foreground: var(--color-destructive-foreground);
    --color-info: var(--color-info);
    --color-info-foreground: var(--color-info-foreground);

    --radius-card: var(--radius-card);
    --radius-input: var(--radius-input);

    --font-mono: 'IBM Plex Mono', 'JetBrains Mono', monospace;
    --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  }
</style>
```

---

## 3. Interactive State Conventions

All components must implement tactile feedback using standard state utility chains:

1. **Hover State**:
   - Buttons: `hover:opacity-90` or `hover:bg-primary-hover`
   - Cards/Rows: `hover:bg-surface-elevated hover:border-border/80 transition-all duration-150`
2. **Tactile Active Press**:
   - `active:scale-[0.98] transition-transform duration-75`
3. **Keyboard Focus Visible**:
   - `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`
4. **Disabled State**:
   - `disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none`
5. **Hairline Precision Shadow**:
   - `shadow-[0_0_0_0.5px_rgba(255,255,255,0.1)]` (Dark)
   - `shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)]` (Light)

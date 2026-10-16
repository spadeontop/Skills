# DESIGN CONTEXT: {{PROJECT_NAME}}

> Archetype: {{ARCHETYPE_NAME}} | Radius: {{INPUT_RADIUS}} / {{CARD_RADIUS}} | Primary Font: {{PRIMARY_FONT}} | Engine: Tailwind CSS v4 Browser CDN (`@tailwindcss/browser@4`)

---

## 1. Core Principles & Constraints
- **Zero-Build CDN Architecture**: Runs natively in browser via `<script src="https://unpkg.com/@tailwindcss/browser@4"></script>` paired with `<style type="text/tailwindcss">` `@theme`. No bundler or package installation required.
- **Color Discipline**: Strict 60-30-10 distribution. Never introduce hardcoded one-off hex codes in HTML markup; always use semantic utility classes (`bg-background`, `bg-surface`, `bg-primary`, `text-foreground`, etc.).
- **Visual Hygiene & Density**: Solid surfaces with hairline structural borders (`border-border`). Shadows are diffused and ambient (`shadow-sm`), never harsh drop-shadows. No emojis in code or UI; use crisp SVG icons with 1.5px or 2px stroke or clean text labels.
- **Corner Radii Hierarchy**: Containers & Modals: `{{CARD_RADIUS}}` | Controls & Standard Buttons: `{{INPUT_RADIUS}}` | Badges & Status Pills: `rounded-full`.
- **WCAG 2.1 AA Compliance**: All contrast ratios meet or exceed 4.5:1 for body copy and 3.0:1 for borders/controls.

---

## 2. Semantic Color System (60-30-10 & Functional Tokens)

| Token Name | Tailwind Utility | Light Mode Hex | Dark Mode Hex | Role / Purpose | WCAG Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `background` | `bg-background` | `{{LIGHT_BG}}` | `{{DARK_BG}}` | 60% Dominant canvas | Base |
| `surface` | `bg-surface` | `{{LIGHT_SURFACE}}` | `{{DARK_SURFACE}}` | 60% Card / container surfaces | Base |
| `surface-elevated`| `bg-surface-elevated`| `{{LIGHT_SURFACE_ELEV}}`| `{{DARK_SURFACE_ELEV}}`| Floating popovers, modals, tooltips | Surface |
| `foreground` | `text-foreground` | `{{LIGHT_FG}}` | `{{DARK_FG}}` | Primary high-contrast text | > 15:1 (AAA) |
| `muted` | `bg-muted` | `{{LIGHT_MUTED}}` | `{{DARK_MUTED}}` | 30% Inactive pills, subtle bg | Base |
| `muted-foreground`| `text-muted-foreground`| `{{LIGHT_MUTED_FG}}`| `{{DARK_MUTED_FG}}`| 30% Secondary text, timestamps | > 4.5:1 (AA) |
| `border` | `border-border` | `{{LIGHT_BORDER}}` | `{{DARK_BORDER}}` | 30% Hairline structural lines | 1px |
| `border-subtle` | `border-border-subtle` | `{{LIGHT_BORDER_SUBTLE}}` | `{{DARK_BORDER_SUBTLE}}` | Inner table dividers / cell borders | Hairline |
| `primary` | `bg-primary` / `text-primary` | `{{LIGHT_PRIMARY}}` | `{{DARK_PRIMARY}}` | 10% Primary CTA / active state | > 4.5:1 (AA) |
| `primary-fg` | `text-primary-foreground`| `{{LIGHT_PRIMARY_FG}}`| `{{DARK_PRIMARY_FG}}`| High-contrast label on primary CTA | > 4.5:1 (AA) |
| `ring` | `ring-ring` | `{{LIGHT_RING}}` | `{{DARK_RING}}` | Accessible keyboard focus outline | > 3:1 (AA) |
| `success` | `text-success` / `bg-success` | `{{LIGHT_SUCCESS}}` | `{{DARK_SUCCESS}}` | Positive gains, online state, check | > 4.5:1 (AA) |
| `success-fg` | `text-success-foreground`| `{{LIGHT_SUCCESS_FG}}`| `{{DARK_SUCCESS_FG}}`| Text on solid success badge | > 4.5:1 (AA) |
| `warning` | `text-warning` / `bg-warning` | `{{LIGHT_WARNING}}` | `{{DARK_WARNING}}` | Caution, pending review | > 4.5:1 (AA) |
| `warning-fg` | `text-warning-foreground`| `{{LIGHT_WARNING_FG}}`| `{{DARK_WARNING_FG}}`| Text on solid warning badge | > 4.5:1 (AA) |
| `destructive` | `text-destructive` / `bg-destructive` | `{{LIGHT_DESTRUCTIVE}}`| `{{DARK_DESTRUCTIVE}}`| Errors, deletions, critical failure | > 4.5:1 (AA) |
| `destructive-fg`| `text-destructive-foreground`| `{{LIGHT_DESTRUCTIVE_FG}}`| `{{DARK_DESTRUCTIVE_FG}}`| Text on solid destructive badge | > 4.5:1 (AA) |
| `info` | `text-info` / `bg-info` | `{{LIGHT_INFO}}` | `{{DARK_INFO}}` | Telemetry notices, sync chips | > 4.5:1 (AA) |
| `info-fg` | `text-info-foreground` | `{{LIGHT_INFO_FG}}` | `{{DARK_INFO_FG}}` | Text on solid info badge | > 4.5:1 (AA) |

---

## 3. Tailwind CSS v4 CDN HTML Integration

Copy and paste this exact block directly into your `<head>`:

```html
<!-- Google Fonts: IBM Plex Mono & Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- Tailwind CSS v4 Browser CDN -->
<script src="https://unpkg.com/@tailwindcss/browser@4"></script>

<!-- CSS-First Theme Configuration in <style type="text/tailwindcss"> -->
<style type="text/tailwindcss">
  @import "tailwindcss";

  /* Enables class-based dark mode (<html class="dark">) */
  @custom-variant dark (&:where(.dark, .dark *));

  /* Light mode tokens */
  :root {
    --color-background: {{LIGHT_BG}};
    --color-foreground: {{LIGHT_FG}};
    --color-surface: {{LIGHT_SURFACE}};
    --color-surface-elevated: {{LIGHT_SURFACE_ELEV}};
    --color-muted: {{LIGHT_MUTED}};
    --color-muted-foreground: {{LIGHT_MUTED_FG}};
    --color-border: {{LIGHT_BORDER}};
    --color-border-subtle: {{LIGHT_BORDER_SUBTLE}};
    --color-primary: {{LIGHT_PRIMARY}};
    --color-primary-foreground: {{LIGHT_PRIMARY_FG}};
    --color-primary-hover: {{LIGHT_PRIMARY_HOVER}};
    --color-ring: {{LIGHT_RING}};
    --color-success: {{LIGHT_SUCCESS}};
    --color-success-foreground: {{LIGHT_SUCCESS_FG}};
    --color-warning: {{LIGHT_WARNING}};
    --color-warning-foreground: {{LIGHT_WARNING_FG}};
    --color-destructive: {{LIGHT_DESTRUCTIVE}};
    --color-destructive-foreground: {{LIGHT_DESTRUCTIVE_FG}};
    --color-info: {{LIGHT_INFO}};
    --color-info-foreground: {{LIGHT_INFO_FG}};
    --radius-card: {{CARD_RADIUS_PX}};
    --radius-input: {{INPUT_RADIUS_PX}};
  }

  /* Dark mode tokens */
  .dark {
    --color-background: {{DARK_BG}};
    --color-foreground: {{DARK_FG}};
    --color-surface: {{DARK_SURFACE}};
    --color-surface-elevated: {{DARK_SURFACE_ELEV}};
    --color-muted: {{DARK_MUTED}};
    --color-muted-foreground: {{DARK_MUTED_FG}};
    --color-border: {{DARK_BORDER}};
    --color-border-subtle: {{DARK_BORDER_SUBTLE}};
    --color-primary: {{DARK_PRIMARY}};
    --color-primary-foreground: {{DARK_PRIMARY_FG}};
    --color-primary-hover: {{DARK_PRIMARY_HOVER}};
    --color-ring: {{DARK_RING}};
    --color-success: {{DARK_SUCCESS}};
    --color-success-foreground: {{DARK_SUCCESS_FG}};
    --color-warning: {{DARK_WARNING}};
    --color-warning-foreground: {{DARK_WARNING_FG}};
    --color-destructive: {{DARK_DESTRUCTIVE}};
    --color-destructive-foreground: {{DARK_DESTRUCTIVE_FG}};
    --color-info: {{DARK_INFO}};
    --color-info-foreground: {{DARK_INFO_FG}};
  }

  /* Map CSS variables to Tailwind v4 @theme */
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

## 4. Typography Hierarchy

- **Font Family**: Display & Data: `font-mono` (`{{MONO_FONT}}`) | Body: `{{BODY_FONT_CLASS}}` (`{{PRIMARY_FONT}}`)
- **Display / Big Metric**: `text-4xl md:text-5xl font-medium tracking-tight font-mono text-foreground`
- **H1 / Page Title**: `text-2xl md:text-3xl font-bold tracking-tight text-foreground`
- **H2 / Section Title**: `text-xl font-semibold tracking-tight text-foreground`
- **H3 / Card Title**: `text-base font-semibold text-foreground`
- **Body Copy**: `text-sm font-normal text-foreground leading-relaxed`
- **Muted Meta / Captions**: `text-xs font-normal text-muted-foreground`
- **Table Data Cells**: `text-xs md:text-sm font-mono tabular-nums text-foreground`
- **Micro Overlines**: `text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold`

---

## 5. Production Component Blueprints

Use these exact utility recipes for pixel-perfect, accessible UI components:

### A. OpenCode Data Leaderboard Cards (`data-component="leader-card"`)
```html
<div class="group relative p-5 {{CARD_RADIUS}} bg-surface hover:bg-surface-elevated border border-border hover:border-border/80 transition-all cursor-pointer overflow-hidden shadow-sm">
  <span class="absolute -right-2 -bottom-4 text-7xl font-mono font-bold text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors pointer-events-none select-none">
    #01
  </span>
  <div class="flex items-start justify-between relative z-10">
    <div>
      <div class="flex items-center gap-2">
        <span class="px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded">
          DEEPSEEK
        </span>
        <span class="text-xs font-mono text-muted-foreground">v4.1 Flash</span>
      </div>
      <h3 class="mt-2 text-base font-semibold font-mono text-foreground group-hover:text-primary transition-colors">
        deepseek-v4.1-flash
      </h3>
    </div>
    <span class="text-xs font-mono text-success font-semibold bg-success/10 px-2 py-0.5 rounded border border-success/20">
      +18.4%
    </span>
  </div>
  <div class="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs font-mono relative z-10">
    <div>
      <span class="text-[11px] uppercase tracking-wider text-muted-foreground block">7D Volume</span>
      <span class="text-lg font-bold tabular-nums text-foreground">66T</span>
    </div>
    <div class="text-right">
      <span class="text-[11px] uppercase tracking-wider text-muted-foreground block">Share</span>
      <span class="text-sm font-semibold tabular-nums text-primary">31.2%</span>
    </div>
  </div>
</div>
```

### B. High-Density Lab Model Table (`data-component="lab-model-table"`)
```html
<div class="w-full overflow-x-auto border border-border bg-surface {{CARD_RADIUS}} shadow-sm">
  <table class="w-full text-left font-mono text-xs border-collapse">
    <thead class="bg-background text-muted-foreground uppercase text-[10px] tracking-wider border-b border-border">
      <tr>
        <th class="py-3 px-4 font-semibold">Rank & Model</th>
        <th class="py-3 px-4 font-semibold text-right">Tokens (7D)</th>
        <th class="py-3 px-4 font-semibold text-right">Share</th>
        <th class="py-3 px-4 font-semibold text-right">Avg Cost / 1M</th>
        <th class="py-3 px-4 font-semibold text-right">Cache Ratio</th>
        <th class="py-3 px-4 font-semibold text-center">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border text-foreground">
      <tr class="hover:bg-surface-elevated transition-colors group cursor-pointer">
        <td class="py-3.5 px-4 font-medium flex items-center gap-3">
          <span class="text-muted-foreground w-5 font-mono">01</span>
          <div>
            <span class="group-hover:text-primary transition-colors font-semibold">deepseek-v4.1-flash</span>
            <span class="block text-[10px] text-muted-foreground">DeepSeek AI · 128K ctx</span>
          </div>
        </td>
        <td class="py-3.5 px-4 text-right font-semibold tabular-nums">66.4T</td>
        <td class="py-3.5 px-4 text-right tabular-nums text-primary font-semibold">31.2%</td>
        <td class="py-3.5 px-4 text-right tabular-nums text-muted-foreground">$0.14</td>
        <td class="py-3.5 px-4 text-right tabular-nums">
          <div class="inline-flex items-center gap-2 justify-end">
            <span>78%</span>
            <div class="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full" style="width: 78%"></div>
            </div>
          </div>
        </td>
        <td class="py-3.5 px-4 text-center">
          <span class="inline-block w-2 h-2 rounded-full bg-success"></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### C. Live Real-Time Status Ticker
```html
<div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono text-muted-foreground">
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
  </span>
  <span>Updated live · Oct 17, 01:33 AM GMT+8</span>
</div>
```

### D. Segmented Pill Filter (`data-component="controls"`)
```html
<div class="inline-flex p-1 {{INPUT_RADIUS}} bg-background border border-border gap-1 font-mono text-xs">
  <button class="px-3 py-1.5 {{INPUT_RADIUS}} bg-surface-elevated text-foreground font-medium border border-border shadow-xs transition-all">
    7 Days
  </button>
  <button class="px-3 py-1.5 {{INPUT_RADIUS}} text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
    30 Days
  </button>
  <button class="px-3 py-1.5 {{INPUT_RADIUS}} text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
    90 Days
  </button>
  <button class="px-3 py-1.5 {{INPUT_RADIUS}} text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
    All Time
  </button>
</div>
```

### E. Action Buttons
- **Primary CTA**:
  `inline-flex items-center justify-center gap-2 px-4 py-2.5 {{INPUT_RADIUS}} bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all`
- **Secondary / Surface**:
  `inline-flex items-center justify-center gap-2 px-4 py-2.5 {{INPUT_RADIUS}} bg-surface border border-border text-foreground text-sm font-medium shadow-sm hover:bg-surface-elevated active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all`
- **Ghost / Tertiary**:
  `inline-flex items-center justify-center gap-2 px-3 py-2 {{INPUT_RADIUS}} text-muted-foreground hover:text-foreground hover:bg-muted text-sm font-medium transition-colors`
- **Destructive**:
  `inline-flex items-center justify-center gap-2 px-4 py-2.5 {{INPUT_RADIUS}} bg-destructive text-destructive-foreground text-sm font-medium shadow-sm hover:opacity-90 active:scale-[0.98] transition-all`

### F. Form Controls
- **Standard Input**:
  `w-full px-3.5 py-2.5 {{INPUT_RADIUS}} bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`
- **Search Input (with Shortcut Badge)**:
  `w-full pl-9 pr-14 py-2 {{INPUT_RADIUS}} bg-background border border-border text-foreground text-xs placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring transition-all`

### G. Status Pills & Badges
- **Accent**: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20`
- **Success**: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-success/15 text-success border border-success/30`
- **Warning**: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-warning/15 text-warning border border-warning/30`
- **Destructive**: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-destructive/15 text-destructive border border-destructive/30`
- **Info**: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-info/15 text-info border border-info/30`
- **Muted**: `inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-muted text-muted-foreground border border-border`

---

## 6. Theme Switching JavaScript Script

```javascript
(function() {
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
  }
})();

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
```

---

## 7. Strict Anti-Patterns
1. **NO arbitrary colors**: Never use ad-hoc hex classes (e.g. `bg-[#1a2b3c]`). Use semantic classes (`bg-surface`, `bg-primary`, etc.).
2. **NO `tailwind.config = { ... }` in Tailwind v4**: Configure theme tokens via `@theme` in `<style type="text/tailwindcss">`.
3. **NO mixed radii chaos**: Adhere to `{{INPUT_RADIUS}}` for controls and `{{CARD_RADIUS}}` for containers.
4. **NO raw browser outlines**: Always provide accessible custom focus rings (`focus-visible:ring-2 focus-visible:ring-ring`).
5. **NO emojis**: Use clean SVG icon specs or concise text badges.

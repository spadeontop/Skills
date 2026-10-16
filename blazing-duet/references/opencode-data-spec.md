# OpenCode Data Design Specification (Technical Monospace Engine)

Extracted directly from [https://opencode.ai/data/](https://opencode.ai/data/) via browser devtools analysis. This reference documents the high-density, engineering-centric aesthetic tailored for data analytics, developer tools, AI leaderboards, and telemetry platforms.

---

## 1. Visual Identity & Design Philosophy

- **Vibe**: High-precision engineering dashboard, real-time AI telemetry, developer-first terminal.
- **Monospace Everywhere**: Uses **IBM Plex Mono** for headings, metrics, tables, navigation, and badges to create an authentic engineering terminal aesthetic.
- **Hairline Precision**: 0.5px to 1px ultra-crisp borders using `box-shadow: 0 0 0 0.5px ...` and subtle divider lines.
- **Obsidian Dark Canvas**: Grounded in deep `#161616` charcoal/black with subtle surface lifts (`#242424` and `#303030`), avoiding harsh pure pitch black while maximizing contrast.
- **Electric Accent**: Soft electric indigo/violet (`#8190ff`) in dark mode, electric cobalt blue (`#3b5cf6`) in light mode.

---

## 2. OpenCode Data Semantic Color Palette

### Dark Mode (Primary / Signature)
| Token / Slot | Hex / RGBA | Tailwind Equivalent | Role |
| :--- | :--- | :--- | :--- |
| Canvas Root | `#161616` | `bg-[#161616]` / `bg-background` | Base application canvas |
| Layer 1 Surface | `#242424` | `bg-[#242424]` / `bg-surface` | Table rows, cards, containers |
| Layer 2 Elevated | `#303030` | `bg-[#303030]` / `bg-surface-elevated`| Hover cards, dropdowns, tooltips |
| Surface Active | `#3a3a3a` | `bg-[#3a3a3a]` / `bg-muted` | Active pill, pressed row, idle bar |
| Text Strong | `#ffffff` | `text-white` / `text-foreground` | Display titles, table cell highlights |
| Text Default | `#d4d4d4` | `text-[#d4d4d4]` | Standard data readouts, body copy |
| Text Faint / Muted | `#a3a3a3` | `text-[#a3a3a3]` / `text-muted-foreground` | Axis labels, captions, metadata |
| Border Hairline | `rgba(255,255,255,0.1)` | `border-white/10` / `border-border` | Subtle structural dividers |
| Border Strong | `rgba(255,255,255,0.2)` | `border-white/20` / `border-border-subtle` | Card borders, table headers |
| Accent Indigo | `#8190ff` | `text-[#8190ff]` / `bg-[#8190ff]` | Active trend lines, highlight values |
| Accent Cobalt | `#3b5cf6` | `text-[#3b5cf6]` / `bg-[#3b5cf6]` | Action buttons, active bar fills |
| Sparkline Neutral | `#808080` | `stroke-[#808080]` | Historical trend baseline |

### Light Mode (Adaptive)
| Token / Slot | Hex / RGBA | Tailwind Equivalent | Role |
| :--- | :--- | :--- | :--- |
| Canvas Root | `#ffffff` | `bg-white` / `bg-background` | Base application canvas |
| Layer 1 Surface | `#fafafa` | `bg-[#fafafa]` / `bg-surface` | Cards, table background |
| Layer 2 Elevated | `#eeeeee` | `bg-[#eeeeee]` / `bg-surface-elevated`| Hover state, pills |
| Text Strong | `#161616` | `text-[#161616]` / `text-foreground` | Headers, metrics |
| Text Default | `#5c5c5c` | `text-[#5c5c5c]` | Standard text |
| Text Faint / Muted | `#707070` | `text-[#707070]` / `text-muted-foreground` | Subtitles, labels |
| Border Hairline | `rgba(0,0,0,0.1)` | `border-black/10` / `border-border` | Subtle dividers |
| Border Strong | `rgba(0,0,0,0.2)` | `border-black/20` | Card borders |
| Accent Cobalt | `#3b5cf6` | `text-[#3b5cf6]` / `bg-[#3b5cf6]` | Primary accent |

---

## 3. Typography Stack & Scale

### Font Declaration
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

```css
font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
```

### Type Scale
- **Display / Hero**: `text-5xl md:text-6xl font-medium tracking-tight font-mono` (`64px`)
- **Section Title**: `text-2xl md:text-3xl font-semibold tracking-tight font-mono` (`28px - 32px`)
- **Card Title / Model Header**: `text-base md:text-lg font-semibold font-mono` (`16px - 18px`)
- **Data Table Cells**: `text-xs md:text-sm font-mono tabular-nums` (`13px - 14px`)
- **Table Headers & Meta Labels**: `text-[11px] font-mono uppercase tracking-wider text-muted-foreground` (`11px`)
- **Status Indicator**: `text-xs font-mono font-medium`

---

## 4. Distinctive OpenCode Component Blueprints

### A. Real-Time Status Ticker
```html
<div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#242424] text-xs font-mono text-[#a3a3a3]">
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
  </span>
  <span>Updated Oct 17, 01:33 AM GMT+8</span>
</div>
```

### B. Leaderboard Ranking Card (`data-component="leader-card"`)
```html
<div class="group relative p-5 rounded-none md:rounded-lg bg-[#242424] hover:bg-[#303030] border border-white/10 hover:border-white/20 transition-all cursor-pointer overflow-hidden shadow-sm">
  <!-- Subtle Background Watermark Rank -->
  <span class="absolute -right-2 -bottom-4 text-7xl font-mono font-bold text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none">
    #01
  </span>

  <div class="flex items-start justify-between relative z-10">
    <div>
      <div class="flex items-center gap-2">
        <span class="px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-indigo-500/15 text-[#8190ff] border border-indigo-500/30 rounded">
          DEEPSEEK
        </span>
        <span class="text-xs font-mono text-[#a3a3a3]">v4.1 Flash</span>
      </div>
      <h3 class="mt-2 text-base font-semibold font-mono text-white group-hover:text-[#8190ff] transition-colors">
        deepseek-v4.1-flash
      </h3>
    </div>
    <span class="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
      +18.4%
    </span>
  </div>

  <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono relative z-10">
    <div>
      <span class="text-[11px] uppercase tracking-wider text-[#a3a3a3] block">7D Volume</span>
      <span class="text-lg font-bold tabular-nums text-white">66T</span>
    </div>
    <div class="text-right">
      <span class="text-[11px] uppercase tracking-wider text-[#a3a3a3] block">Share</span>
      <span class="text-sm font-semibold tabular-nums text-[#8190ff]">31.2%</span>
    </div>
  </div>
</div>
```

### C. High-Density Lab Model Table (`data-component="lab-model-table"`)
```html
<div class="w-full overflow-x-auto border border-white/10 bg-[#242424] rounded-lg">
  <table class="w-full text-left font-mono text-xs border-collapse">
    <thead class="bg-[#161616] text-[#a3a3a3] uppercase text-[10px] tracking-wider border-b border-white/10">
      <tr>
        <th class="py-3 px-4 font-semibold">Rank & Model</th>
        <th class="py-3 px-4 font-semibold text-right">Tokens (7D)</th>
        <th class="py-3 px-4 font-semibold text-right">Share</th>
        <th class="py-3 px-4 font-semibold text-right">Avg Cost / 1M</th>
        <th class="py-3 px-4 font-semibold text-right">Cache Ratio</th>
        <th class="py-3 px-4 font-semibold text-center">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-white/10 text-[#d4d4d4]">
      <tr class="hover:bg-[#303030] transition-colors group">
        <td class="py-3.5 px-4 font-medium text-white flex items-center gap-3">
          <span class="text-[#a3a3a3] w-5">01</span>
          <div>
            <span class="group-hover:text-[#8190ff] transition-colors font-semibold">deepseek-v4.1-flash</span>
            <span class="block text-[10px] text-[#a3a3a3]">DeepSeek AI · 128K ctx</span>
          </div>
        </td>
        <td class="py-3.5 px-4 text-right font-semibold text-white tabular-nums">66.4T</td>
        <td class="py-3.5 px-4 text-right tabular-nums text-[#8190ff] font-semibold">31.2%</td>
        <td class="py-3.5 px-4 text-right tabular-nums text-[#d4d4d4]">$0.14</td>
        <td class="py-3.5 px-4 text-right tabular-nums">
          <div class="inline-flex items-center gap-2 justify-end">
            <span>78%</span>
            <div class="w-16 h-1.5 bg-[#303030] rounded-full overflow-hidden">
              <div class="h-full bg-[#8190ff] rounded-full" style="width: 78%"></div>
            </div>
          </div>
        </td>
        <td class="py-3.5 px-4 text-center">
          <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### D. Segmented Pill Filter (`data-component="controls"`)
```html
<div class="inline-flex p-1 rounded-lg bg-[#161616] border border-white/10 gap-1 font-mono text-xs">
  <button class="px-3 py-1.5 rounded bg-[#303030] text-white font-medium border border-white/10 shadow-xs transition-all">
    7 Days
  </button>
  <button class="px-3 py-1.5 rounded text-[#a3a3a3] hover:text-white hover:bg-white/[0.04] transition-all">
    30 Days
  </button>
  <button class="px-3 py-1.5 rounded text-[#a3a3a3] hover:text-white hover:bg-white/[0.04] transition-all">
    90 Days
  </button>
  <button class="px-3 py-1.5 rounded text-[#a3a3a3] hover:text-white hover:bg-white/[0.04] transition-all">
    All Time
  </button>
</div>
```

### E. Micro-Sparkline Usage Bar
```html
<div class="flex items-end gap-1 h-12 w-full pt-2">
  <div class="flex-1 bg-[#3a3a3a] hover:bg-[#8190ff] transition-colors rounded-xs h-[30%]" title="Aug 22: 13T"></div>
  <div class="flex-1 bg-[#3a3a3a] hover:bg-[#8190ff] transition-colors rounded-xs h-[45%]" title="Aug 23: 15T"></div>
  <div class="flex-1 bg-[#3a3a3a] hover:bg-[#8190ff] transition-colors rounded-xs h-[60%]" title="Aug 24: 19T"></div>
  <div class="flex-1 bg-[#3a3a3a] hover:bg-[#8190ff] transition-colors rounded-xs h-[55%]" title="Aug 25: 18T"></div>
  <div class="flex-1 bg-[#3a3a3a] hover:bg-[#8190ff] transition-colors rounded-xs h-[50%]" title="Aug 26: 16T"></div>
  <div class="flex-1 bg-[#3b5cf6] rounded-xs h-[95%]" title="Today: 66T"></div>
</div>
```

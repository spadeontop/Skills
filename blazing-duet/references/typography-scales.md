# Typography Scales & Pairings Reference

Typography establishes visual structure, hierarchy, and personality. In high-density developer tools and telemetry dashboards (like OpenCode Data), typography acts as the primary visual architecture.

---

## 1. Curated Typography Pairings

| Aesthetic / Persona | Primary Typeface | Monospace / Data | Google Font Embed / System Fallback |
| :--- | :--- | :--- | :--- |
| **OpenCode Data (Signature)** | `IBM Plex Mono` (All elements) | `IBM Plex Mono` | `family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400` |
| **Linear / SaaS Dark** | `Inter` or `Geist Sans` | `JetBrains Mono` or `Geist Mono` | `family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600` |
| **Modern Clean** | `Plus Jakarta Sans` | `Roboto Mono` | `family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Roboto+Mono:wght@400;500` |
| **Ultra-Minimalist** | `Inter` (Pure) | `JetBrains Mono` | `family=Inter:wght@400;500;600;700` |
| **Fintech Terminal** | `JetBrains Mono` | `JetBrains Mono` (Tabular) | `family=JetBrains+Mono:wght@400;500;600;700` |
| **Editorial Minimal** | `Outfit` (Headings) + `Inter` | `JetBrains Mono` | `family=Outfit:wght@600;700&family=Inter:wght@400;500` |

---

## 2. Standardized Tailwind Typography Scale

| Scale Level | Tailwind Utility Classes | Rem / Px | Best For |
| :--- | :--- | :--- | :--- |
| **Giant Metric / Display** | `text-5xl md:text-6xl font-medium tracking-tight font-mono` | `48px - 64px` | OpenCode Data hero counters, token volume, model leaderboard |
| **Hero / Headline** | `text-3xl md:text-4xl font-bold tracking-tight` | `30px - 36px` | Product landing hero, marketing section titles |
| **Page Title (H1)** | `text-2xl md:text-3xl font-semibold tracking-tight` | `24px - 30px` | Main dashboard header, analytics view title |
| **Section Header (H2)** | `text-lg md:text-xl font-semibold tracking-tight` | `18px - 20px` | Table groups, chart section titles, panel headers |
| **Card / Item Title (H3)** | `text-sm md:text-base font-semibold font-mono` | `14px - 16px` | Model name, service title, modal title |
| **Body (Default)** | `text-sm font-normal text-foreground leading-relaxed` | `14px` | Explanatory text, forms, status descriptions |
| **Table Data Cells** | `text-xs md:text-sm font-mono tabular-nums text-foreground` | `12px - 14px` | Token counts, latency, price / 1M, percentage share |
| **Captions / Meta** | `text-xs font-normal text-muted-foreground` | `12px` | Timestamps, helper text, breadcrumbs |
| **Micro / Overline** | `text-[10px] md:text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold` | `10px - 11px` | Table headers, stat descriptors, category tags |

---

## 3. Strict Typography Rules for Agents

1. **Always Enable Tabular Numbers**:
   Use `tabular-nums` and `font-mono` on all dynamic counters, percentages, currency values, token metrics, and timestamps to eliminate layout jumping.
2. **Apply `tracking-tight` on Headings**:
   Any heading `text-lg` or larger must include `tracking-tight` or `tracking-tighter` to look sharp and cohesive.
3. **Never Omit Fallbacks**:
   Always declare robust fallback stacks:
   - Monospace: `'IBM Plex Mono', 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
   - Sans: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
4. **Preserve OpenCode Data Monospace Purity**:
   When using the OpenCode Data archetype, apply `font-mono` globally to the page canvas (`<body class="font-mono ...">`) to achieve the signature terminal look.

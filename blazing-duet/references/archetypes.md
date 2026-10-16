# Design Archetypes Reference Matrix

Archetypes provide distinct visual personalities while maintaining strict adherence to semantic tokens, WCAG 2.1 accessibility, and token-efficient Tailwind CSS utility classes.

---

## Matrix Overview

| Archetype | Primary Target | Base Canvas | Accent Tone | Typography Pair | Corner Radius |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. OpenCode Data** | AI Telemetry, Dev Analytics | Obsidian `#161616` / Stark `#FFFFFF` | Soft Indigo `#8190ff` / Cobalt `#3b5cf6` | IBM Plex Mono | Sharp / Compact (4px - 6px) |
| **2. Linear / SaaS Dark** | Dev Tools, Fast SaaS | Pitch Obsidian `#08090A` | Electric Violet `#8B5CF6` / Cyan `#06B6D4` | Geist Sans / Inter + Mono | Ergonomic (8px - 12px) |
| **3. Ultra-Minimalist** | Productivity, Portfolios | Stark White `#FFFFFF` / Dark `#09090B` | Monochrome Neutral / Minimal Slate | Inter + JetBrains Mono | Soft (12px - 16px) |
| **4. Modern Clean** | Cloud Dashboards, CRM | Cool Slate `#F8FAFC` / Pure `#FFFFFF` | Trust Enterprise Blue `#2563EB` | Plus Jakarta Sans | Ergonomic (8px - 12px) |
| **5. Fintech & Crypto** | Trading Desks, DeFi, Exchanges | Deep Charcoal `#0D1117` | Neon Mint `#10B981` / Flame `#F43F5E` | JetBrains Mono (Tabular) | Micro / Square (2px - 4px) |
| **6. Editorial Minimal** | Publishing, Design Systems | Warm Alabaster `#FBFBFA` / `#18181B` | Terracotta `#C2410C` / Sage `#047857` | Outfit (Headings) + Inter | Subtle (6px - 8px) |

---

## 1. OpenCode Data (Technical Monospace Engine)
*Extracted directly from [https://opencode.ai/data/](https://opencode.ai/data/) via DevTools MCP inspection.*

- **Vibe**: High-precision engineering dashboard, real-time AI telemetry, developer-first terminal.
- **Constraints**:
  - **Full Monospace**: Primary font is **IBM Plex Mono** (weights 400, 500, 600, 700).
  - **Surfaces**: Canvas is `#161616`, Layer 1 surface is `#242424`, Layer 2 elevated is `#303030`, interactive hover is `#3a3a3a`.
  - **Borders**: Crisp hairline 0.5px to 1px solid (`rgba(255,255,255,0.1)` in dark mode, `rgba(0,0,0,0.1)` in light).
  - **Accents**: Soft electric indigo (`#8190ff`) for dark mode; electric cobalt (`#3b5cf6`) for light mode.
  - **Hallmarks**: Background watermark numbers (`#01`, `#02`), high-density data tables, progress bars with active pins, live status indicator with ping beacon, zero fluffy decoration.
  - **Corner Radius**: Sharp / Compact (`rounded-xs` / `2px` for bars, `rounded-md` / `6px` for cards/inputs).

---

## 2. Linear / SaaS Dark Precision
*Inspired by Linear, Raycast, and Vercel.*

- **Vibe**: Engineering-first, ultra-sleek dark aesthetic for developer tools and high-performance SaaS.
- **Constraints**:
  - **Base Canvas**: Deep obsidian pitch (`#08090A` or `#0B0D0E`), never flat gray.
  - **Surfaces**: Layered elevation with translucent white borders (`bg-zinc-900/60`, `border-white/10`).
  - **Accents**: Electric single-hue focus (Electric Violet `#8B5CF6`, Cyan `#06B6D4`, or Emerald `#10B981`).
  - **Typography**: Crisp mono-influenced sans (Inter, Geist Sans) paired with monospace numbers (`font-mono` / tabular nums).
  - **Border Radius**: Refined ergonomic medium rounding (`rounded-lg` / `8px` to `rounded-xl` / `12px`).
  - **Micro-interactions**: Subtle hover brightening (`hover:border-white/20`, `hover:bg-white/[0.04]`, `active:scale-[0.98]`).

---

## 3. Ultra-Minimalist Studio
*Distraction-free, stark, architectural restraint.*

- **Vibe**: Architectural portfolios, Notion-like documentation, minimalist writing platforms.
- **Constraints**:
  - **Strict No Gradients**: Solid colors only.
  - **No Emojis**: Crisp SVG icons with 1.5px or 2px stroke.
  - **Surfaces**: Stark white canvas (`#FFFFFF`) with contrasting dark navigation, or stark obsidian dark mode (`#09090B`).
  - **Borders**: Hairline 1px solid (`#E4E4E7` in light, `#27272A` in dark).
  - **Border Radius**: Heavy, soft ergonomic rounding (`rounded-input` / `12px` for controls; `rounded-card` / `16px` for containers; `rounded-full` for badges/pills).
  - **Shadows**: Large, diffused, subtle ambient elevation (`shadow-sm` or `shadow-md` with low alpha). Never harsh drop-shadows.

---

## 4. Modern Clean Enterprise
*Structured, professional, highly legible data density.*

- **Vibe**: Cloud infrastructure consoles, enterprise analytics suites, CRM platforms.
- **Constraints**:
  - **Base Canvas**: Soft cool slate (`#F8FAFC`) with bright white cards (`#FFFFFF`).
  - **Surfaces**: Distinct card grouping with clear 1px borders (`border-slate-200`).
  - **Accents**: Trustworthy deep blues or indigos (e.g., `#2563EB`, `#4F46E5`).
  - **Typography**: Clean corporate sans with strong weight contrasts (Plus Jakarta Sans, Inter).
  - **Border Radius**: Controlled compact rounding (`rounded-lg` / `8px` for inputs/buttons, `rounded-xl` for cards).
  - **Information Density**: Compact padding (`px-3 py-1.5` for table cells, `gap-4` layout grids).

---

## 5. Fintech & Crypto High-Density Terminal
*High-velocity financial markets, multi-asset order books, crypto terminals.*

- **Vibe**: Bloomberg Terminal meets modern DeFi, TradingView analytics.
- **Constraints**:
  - **Base Canvas**: Dark slate/gunmetal (`#0D1117`).
  - **Surfaces**: High-contrast dark panels (`#161B22`) with ultra-fine borders (`#30363D`).
  - **Status Accents**: Neon Mint Green (`#10B981`) for profit / ask; Flame Red (`#F43F5E`) for loss / bid.
  - **Typography**: Strict tabular monospace (JetBrains Mono) for all figures, currency, rates, and timestamps.
  - **Corner Radius**: Micro / Square (`rounded-sm` / `2px` - `4px`) for high data packaging.
  - **Components**: Live order book ladders, candlestick charts, delta badges, execution buttons.

---

## 6. Editorial Minimalist
*Refined typography, magazine-level aesthetics, human-crafted elegance.*

- **Vibe**: High-end newsletters, long-form journals, boutique design agencies.
- **Constraints**:
  - **Base Canvas**: Warm alabaster paper tone (`#FBFBFA`) in light; warm charcoal (`#18181B`) in dark.
  - **Accents**: Organic earth tones (Terracotta `#C2410C`, Deep Forest Sage `#047857`).
  - **Typography**: Display sans (Outfit or Newsreader) paired with balanced sans body (Inter).
  - **Border Radius**: Subtle, natural curvature (`rounded-md` / `6px` to `rounded-lg` / `8px`).
  - **Whitespace**: Extra-wide line-heights (`leading-relaxed`, `leading-loose`), expansive margins.

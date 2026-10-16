/**
 * Exportable Tailwind CSS Configuration Template
 * Supports:
 * 1. Tailwind CSS v4 Browser CDN (@tailwindcss/browser@4) via <style type="text/tailwindcss">
 * 2. Tailwind CSS v4 CSS Build via @theme
 * 3. Tailwind CSS v3 Config via module.exports
 */

// ============================================================================
// 1. TAILWIND CSS V4 BROWSER CDN (<style type="text/tailwindcss">)
// ============================================================================
export const tailwindV4CdnSnippet = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://unpkg.com/@tailwindcss/browser@4"></script>

<style type="text/tailwindcss">
  @import "tailwindcss";

  @custom-variant dark (&:where(.dark, .dark *));

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

    --font-mono: 'IBM Plex Mono', monospace;
    --font-sans: 'Inter', system-ui, sans-serif;
  }
</style>
`;

// ============================================================================
// 2. TAILWIND CSS V3 CONFIGURATION (module.exports)
// ============================================================================
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
          hover: 'var(--color-primary-hover)',
        },
        ring: 'var(--color-ring)',
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-warning-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          foreground: 'var(--color-info-foreground)',
        },
      },
      borderRadius: {
        card: 'var(--radius-card)',
        input: 'var(--radius-input)',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

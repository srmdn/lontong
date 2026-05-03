# Lontong (LPanel)

Modern, lightweight, open-source server control panel. Built with Go and Caddy.

**Padat fiturnya, ringan servernya, nggak bikin kantong bolong.**

---

## Why Lontong

Server control panels are heavy, expensive, and complicated. Lontong takes a different approach: a single Go binary paired with Caddy for zero-config HTTPS. No Perl legacy, no Python dependencies, no license fees.

- **< 100MB RAM** at idle. Runs comfortably on the smallest VPS.
- **Go single binary**. No runtime, no interpreter, no package manager needed.
- **Caddy native**. Automatic SSL via Let's Encrypt. Zero config.
- **Instant config updates**. API-driven, no service restarts, no downtime.
- **100% open source**. MIT licensed. No freemium, no ads, no tracking.

---

## Landing Page

This repository contains the Lontong landing page:

| Stack | |
|-------|-----|
| Framework | React 19 |
| Language | TypeScript |
| Build | Vite 8 + Bun |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Testing | Vitest + React Testing Library |
| Fonts | Inter + JetBrains Mono |

### Quick Start

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Run tests
bun test

# Build for production
bun run build
```

Prod build lands in `dist/`.

---

## Design

Deep Red (`#991B1B`) on dark surfaces. Geometric typography with Inter. Server-room imagery from Unsplash. Full-bleed layout inspired by SpaceX's product pages.

Features:
- Dark mode with OS detection and localStorage persistence
- Flash prevention (theme class set before first paint)
- Animated SVG favicon with tab visibility pause
- `prefers-reduced-motion` respected everywhere
- Full ARIA labels and semantic HTML
- Print stylesheet

---

## License

MIT. Built in Indonesia.

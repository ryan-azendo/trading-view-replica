# TradingView Brokers — Replica

A faithful front-end replica of [TradingView's brokers experience](https://www.tradingview.com/brokers/), plus a bespoke **Liberator × TradingView** broker landing page. Built with the Next.js App Router and a small, token-driven design system organized by atomic design.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript** (strict)
- **CSS Modules** + a layered **design-token** system (no UI framework)
- **next/font** for self-hosted Google Fonts (DM Sans + Noto Sans Thai)
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Routes

| Path                  | What it is                                                            |
| --------------------- | -------------------------------------------------------------------- |
| `/`                   | Home                                                                  |
| `/brokers`            | Brokers directory — filterable/sortable list of broker cards         |
| `/brokers/liberator`  | Liberator × TradingView marketing landing page (Thai)                |
| `/design-system`      | Living style guide / component showcase                              |

The **Open account** button on the Liberator card in `/brokers` links through to `/brokers/liberator`.

## Project structure

```
src/
├── app/                      # Next.js App Router (routes + layout)
│   ├── layout.tsx            # Root layout: fonts, theme provider
│   ├── page.tsx              # Home
│   ├── brokers/
│   │   ├── page.tsx          # Brokers directory
│   │   └── liberator/        # Liberator landing page (page + module.css + client islands)
│   └── design-system/        # Component showcase
├── components/               # Atomic design: atoms / molecules / organisms / templates
├── data/                     # Static content (e.g. broker list)
├── styles/                   # Foundation: tokens.css, reset.css, base.css
└── theme/                    # Light/dark theme provider + no-flash init script
```

## Design system

Components follow **atomic design** (`atoms → molecules → organisms → templates`); each layer only composes from the ones below it. See [`src/components/README.md`](src/components/README.md) for the full breakdown and conventions.

Styling is **100% token-driven**. Tokens live in `src/styles/tokens.css` in four layers:

1. **Primitives** — raw values (`--primitive-blue-500`). Never used directly in components.
2. **Semantic** — purpose-mapped, theme-aware (`--color-bg-page`, `--color-text-primary`).
3. **Component** — per-component (`--btn-primary-bg`, `--card-border`).
4. **Scale** — spacing, radius, typography, z-index, transitions.

Theme is controlled by `data-theme` on `<html>`; components reference tokens and adapt to light/dark automatically. A `beforeInteractive` script sets the theme before hydration to avoid a flash.

## Typography

TradingView's "Euclid Circular" is proprietary, so **DM Sans** is used as a free, geometrically similar substitute (see [`docs/typography.md`](docs/typography.md)). **Noto Sans Thai** is loaded alongside it and slotted into the font stack after DM Sans, so Latin text renders in DM Sans while Thai glyphs (used on the Liberator page) fall through to Noto Sans Thai. Both are self-hosted via `next/font` (no runtime request to Google).

## Notes & assumptions

- **Placeholder imagery.** Non-brand images on the Liberator page (chart screenshots, device mockups, app-store badges, etc.) use [`placehold.jp`](https://placehold.jp) placeholders. They are all generated through a single `ph(width, height)` helper in `src/app/brokers/liberator/page.tsx`, so swapping in real assets is a one-line change per image. Real brand logos (Liberator, TradingView) are used where provided under `public/brokers/`.
- All external links and form actions are non-functional placeholders (`href="#"`); the focus is on UI fidelity, structure, and the component system.
- Content on the Liberator page is in Thai to match the source design.

## Architecture trade-offs

The shared component system (`atoms/` → `molecules/` → `organisms/`) and the **`/brokers` directory follow atomic design**: atoms and molecules compose up into organisms (e.g. `BrokerExplorer` assembles `FilterBar`, `BrokerList`, and `Dropdown`), and the route assembles those with data.

The **Liberator landing page (`/brokers/liberator`) is a deliberate exception.** Its sections (header, hero, reviews, feature grid, steps, commission, promo, footer) are written inline in `page.tsx`, and its interactive widgets (`Faq`, `CommissionTabs`, `FeatureTabs`, `CarouselDots`, `BackToTop`) are co-located in `LiberatorClient.tsx` — rather than decomposed into `atoms/` / `molecules/` / `organisms/`.

This was a **conscious trade-off for a time-boxed build**. The page is a one-off marketing layout with little cross-page reuse, so extracting ~15 single-use components would have added folder ceremony without real payoff within the deadline. Keeping it route-local also makes it fast to read end-to-end. The shared, genuinely reusable pieces (`Button`, `Icon`, `SocialIcon`) are still pulled from the component system.

If this page were to ship and grow, the natural refactor is to promote the repeated patterns into `molecules/` (`BrandLockup`, `FeatureCard`, `StepCard`, `ReviewCard`, `StoreBadgeRow`), the sections into `organisms/` (`LiberatorHero`, `LiberatorReviews`, `LiberatorFeatures`, …), and introduce a `LiberatorLandingTemplate` under the currently-empty `templates/` layer — leaving `page.tsx` to hold only metadata, data, and the template.

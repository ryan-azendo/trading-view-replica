# Typography — Font Choice

## TL;DR

TradingView's brokers page uses **Euclid Circular** (a paid, proprietary
typeface). We can't ship it, so we use **DM Sans** from Google Fonts as a free,
visually close substitute.

| | Original | Our substitute |
| --- | --- | --- |
| Family | Euclid Circular (Swiss Typefaces, commercial) | **DM Sans** (Google Fonts, OFL — free) |
| Classification | Geometric sans | Geometric sans |
| Loaded via | — | `next/font/google` (self-hosted, no layout shift) |
| CSS variable | — | `--font-dm-sans` → `--font-sans` / `--font-display` |

## Why DM Sans

We measured the real site (via DevTools computed styles):

```
Hero "Made to trade":   EuclidCircularSemibold · 126px · weight 600 · letter-spacing -2.52px
Counter "4 576 270":    EuclidCircularSemibold · 48px  · weight 600 · letter-spacing -0.96px
```

Euclid Circular is a **geometric sans** with near-circular bowls (o, e, c, p),
low stroke contrast, and a moderate x-height. DM Sans shares all of these
traits, which is why it reads as the closest free match at display sizes.

### Alternatives considered

| Font | Verdict |
| --- | --- |
| **DM Sans** ✅ | Closest geometric/circular feel; variable weights; chosen |
| Poppins | Geometric but rounder and wider; too "friendly", less neutral |
| Manrope | Good, but semi-condensed — bowls less circular than Euclid |
| Plus Jakarta Sans | Close, slightly more humanist; solid second choice |
| Montserrat | Geometric but taller x-height and wider; drifts from Euclid |

If we ever license Euclid Circular, swapping is a one-line change:
point `--font-dm-sans` (or `--font-sans`) at the licensed family.

## The tracking rule (important)

Euclid display text on TV uses **~-0.02em letter-spacing**, confirmed by two
independent measurements:

- Hero:    `-2.52px / 126px = -0.02em`
- Counter: `-0.96px / 48px  = -0.02em`

DM Sans is slightly wider than Euclid, so this negative tracking is what makes
the substitute read correctly at large sizes. It's tokenized:

```css
--tracking-tight: -0.02em;  /* default for display + headings */
```

Headings (`h1`–`h6`) already apply `--font-display` + `--tracking-tight` in
`src/styles/base.css`.

## How it's wired

```
src/app/layout.tsx        next/font loads DM Sans → exposes --font-dm-sans on <html>
src/styles/tokens.css     --font-sans / --font-display reference var(--font-dm-sans)
src/styles/base.css       body uses --font-sans; headings use --font-display + tracking
```

Body/UI text and display text use the **same family** (as TradingView does),
just at different sizes/weights. `--font-mono` is unchanged.

## Display scale

Element headings (`h1`–`h6`) stay fixed-px for predictable use inside UI.
**Marketing / hero** text uses fluid display tokens instead, calibrated to the
real desktop sizes (hero 126px, section 64px, counters 48px):

```css
--display-1: clamp(2.5rem, 9vw, 7.875rem);  /* hero    — "Made to trade" */
--display-2: clamp(2rem, 6vw, 4rem);         /* section — "Every trade…"  */
--display-3: clamp(1.75rem, 4vw, 3rem);      /* counters                  */
```

Pair them with `--tracking-tight` and `--leading-none`. Fixed steps
`--text-6xl/7xl/8xl` exist for non-fluid needs.

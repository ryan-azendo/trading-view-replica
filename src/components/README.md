# Components — Atomic Design

Components are organized into atomic-design layers. Each layer only composes
from the layers below it.

| Layer          | Folder        | What lives here                                                                 |
| -------------- | ------------- | ------------------------------------------------------------------------------ |
| **Atoms**      | `atoms/`      | Smallest building blocks: Button, Icon, Badge, Input, RatingStars, ThemeToggle, BrandLogo, SocialIcon |
| **Molecules**  | `molecules/`  | Small groups of atoms: RatingDisplay, FilterTab, StatCounter, BrokerStat, Dropdown |
| **Organisms**  | `organisms/`  | Distinct sections: Header, BrokerCard, BrokerList, BrokerExplorer, FilterBar, PromoSection, Footer |
| **Templates**  | `templates/`  | Page-level layout/structure with placeholder content                           |

> Pages live in `src/app/` (Next.js App Router) and assemble templates +
> organisms with real data.

## Conventions

- One component per folder is **not** required; a single `.tsx` + `.module.css`
  pair per component is fine for atoms.
- **Never** use `--primitive-*` tokens directly in components. Use semantic
  (`--color-*`) or component (`--btn-*`, `--card-*`, …) tokens from
  `src/styles/tokens.css`.
- Styling uses **CSS Modules** (`*.module.css`) so class names are scoped.
- Theme is controlled by `data-theme` on `<html>`; components just reference
  tokens and adapt automatically. See `src/theme/`.

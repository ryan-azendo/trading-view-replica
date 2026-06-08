import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { Button } from "@/components/atoms/Button";
import { Badge } from "@/components/atoms/Badge";
import styles from "./page.module.css";

const SEMANTIC_COLORS = [
  { name: "Brand", token: "--color-brand" },
  { name: "Success", token: "--color-success" },
  { name: "Danger", token: "--color-danger" },
  { name: "Warning", token: "--color-warning" },
  { name: "Attention", token: "--color-attention" },
  { name: "Bullish", token: "--color-bullish" },
  { name: "Bearish", token: "--color-bearish" },
  { name: "Neutral", token: "--color-neutral" },
];

const SURFACES = [
  { name: "Page", token: "--color-bg-page" },
  { name: "Secondary", token: "--color-bg-page-secondary" },
  { name: "Tertiary", token: "--color-bg-tertiary" },
  { name: "Highlight", token: "--color-bg-highlight" },
];

const TYPE_SCALE = [
  { name: "5xl / 56", token: "--text-5xl" },
  { name: "4xl / 40", token: "--text-4xl" },
  { name: "3xl / 32", token: "--text-3xl" },
  { name: "2xl / 24", token: "--text-2xl" },
  { name: "xl / 20", token: "--text-xl" },
  { name: "lg / 18", token: "--text-lg" },
  { name: "md / 16", token: "--text-md" },
  { name: "base / 14", token: "--text-base" },
  { name: "sm / 12", token: "--text-sm" },
  { name: "xs / 11", token: "--text-xs" },
];

const SPACE_SCALE = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];

const DISPLAY_SIZES = [
  { name: "display-1 (hero)", token: "--display-1" },
  { name: "display-2 (section)", token: "--display-2" },
  { name: "display-3 (counter)", token: "--display-3" },
];

const GRADIENTS = [
  { name: "Stat · pink→purple", token: "--gradient-stat-pink" },
  { name: "Stat · blue→cyan", token: "--gradient-stat-blue" },
];

export default function FoundationPage() {
  return (
    <main>
      <header className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <span className={styles.brand}>
            TradingView Replica · <strong>Foundation</strong>
          </span>
          <ThemeToggle />
        </div>
      </header>

      <div className={`container ${styles.page}`}>
        <section className={styles.hero}>
          <h1>Design System Foundation</h1>
          <p className={styles.lead}>
            Tokens, reset, base styles and theming are in place. Toggle the
            theme to verify every token below reacts. Atoms come next.
          </p>
        </section>

        <Section title="Semantic colors">
          <div className={styles.swatchGrid}>
            {SEMANTIC_COLORS.map((c) => (
              <div key={c.token} className={styles.swatch}>
                <span
                  className={styles.swatchChip}
                  style={{ background: `var(${c.token})` }}
                />
                <span className={styles.swatchName}>{c.name}</span>
                <code className={styles.swatchToken}>{c.token}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Surfaces">
          <div className={styles.swatchGrid}>
            {SURFACES.map((c) => (
              <div key={c.token} className={styles.swatch}>
                <span
                  className={styles.swatchChip}
                  style={{
                    background: `var(${c.token})`,
                    border: "1px solid var(--color-border)",
                  }}
                />
                <span className={styles.swatchName}>{c.name}</span>
                <code className={styles.swatchToken}>{c.token}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography scale">
          <div className={styles.typeList}>
            {TYPE_SCALE.map((t) => (
              <div key={t.token} className={styles.typeRow}>
                <span style={{ fontSize: `var(${t.token})` }}>
                  The quick brown fox
                </span>
                <code className={styles.swatchToken}>{t.name}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Spacing scale">
          <div className={styles.spaceList}>
            {SPACE_SCALE.map((s) => (
              <div key={s} className={styles.spaceRow}>
                <span
                  className={styles.spaceBar}
                  style={{ width: `var(--space-${s})` }}
                />
                <code className={styles.swatchToken}>--space-{s}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Display scale (fluid)">
          <div className={styles.typeList}>
            {DISPLAY_SIZES.map((d) => (
              <div key={d.token} className={styles.typeRow}>
                <span
                  style={{
                    fontSize: `var(${d.token})`,
                    fontFamily: "var(--font-display)",
                    letterSpacing: "var(--tracking-tight)",
                    lineHeight: "var(--leading-none)",
                  }}
                >
                  Made to trade
                </span>
                <code className={styles.swatchToken}>{d.name}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Gradients">
          <div className={styles.swatchGrid}>
            {GRADIENTS.map((g) => (
              <div key={g.token} className={styles.swatch}>
                <span
                  className={styles.swatchChip}
                  style={{ backgroundImage: `var(${g.token})` }}
                />
                <span
                  className={`${styles.swatchName} gradient-text tabular-nums`}
                  style={{ backgroundImage: `var(${g.token})` }}
                >
                  4 576 270
                </span>
                <code className={styles.swatchToken}>{g.token}</code>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Button — atom">
          <div className={styles.btnRow}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Open account</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
          <div className={styles.btnRow}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className={styles.btnRow} style={{ maxWidth: 320 }}>
            <Button variant="secondary" fullWidth>
              Compare brokers
            </Button>
          </div>
        </Section>

        <Section title="Badge — atom">
          <div className={styles.btnRow}>
            <Badge variant="featured">Featured</Badge>
            <Badge variant="neutral">Regulated</Badge>
            <Badge variant="brand">PRO</Badge>
            <Badge variant="success">Bullish</Badge>
            <Badge variant="danger">Bearish</Badge>
            <Badge variant="warning">New</Badge>
          </div>
          <div className={styles.btnRow}>
            <Badge size="sm" variant="featured">
              Small
            </Badge>
            <Badge size="md" variant="featured">
              Medium
            </Badge>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

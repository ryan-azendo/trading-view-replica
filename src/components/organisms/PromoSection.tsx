import { Button } from "@/components/atoms/Button";
import { StatCounter, type GradientStop } from "@/components/molecules/StatCounter";
import styles from "./PromoSection.module.css";

const TRADERS_STOPS: GradientStop[] = [
  { offset: "0%", color: "#ff80ab" },
  { offset: "32%", color: "#b388ff" },
  { offset: "64%", color: "#82b1ff" },
  { offset: "100%", color: "#2bd9bc" },
];

const ORDERS_STOPS: GradientStop[] = [
  { offset: "0%", color: "#24b29b" },
  { offset: "32%", color: "#18ffff" },
  { offset: "66%", color: "#448aff" },
  { offset: "100%", color: "#7c4dff" },
];

/**
 * PromoSection — organism. Always-dark marketing band: Compare CTA +
 * "Every trade a #TradingView" headline + two gradient stat counters.
 */
export function PromoSection() {
  return (
    <section className={styles.promo}>
      <div className={`container ${styles.inner}`}>
        <Button
          variant="inverse"
          size="lg"
          style={{
            background: "#fff",
            color: "#000",
            height: 56,
            borderRadius: "var(--radius-full)",
            paddingInline: "var(--space-8)",
          }}
        >
          Compare brokers
        </Button>

        <h2 className={styles.heading}>
          Every trade a
          <br />
          #TradingView
        </h2>

        <div className={styles.counters}>
          <StatCounter
            id="traders"
            value="4 578 019"
            label="Traders connected through us"
            stops={TRADERS_STOPS}
          />
          <StatCounter
            id="orders"
            value="404 311 426"
            label="Successfully executed live orders"
            stops={ORDERS_STOPS}
          />
        </div>
      </div>
    </section>
  );
}

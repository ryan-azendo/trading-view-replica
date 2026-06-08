import type { Metadata } from "next";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { BrokerExplorer } from "@/components/organisms/BrokerExplorer";
import { BROKERS, FILTER_OPTIONS } from "@/data/brokers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Brokers — TradingView Replica",
  description: "Start trading with verified brokers today.",
};

export default function BrokersPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.toggle}>
            <ThemeToggle />
          </div>
          <h1 className={styles.title}>Made to trade</h1>
          <p className={styles.subtitle}>
            Start trading with verified brokers today.
          </p>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className={`container ${styles.column}`}>
          <BrokerExplorer brokers={BROKERS} filters={FILTER_OPTIONS} />
        </div>
      </section>
    </main>
  );
}

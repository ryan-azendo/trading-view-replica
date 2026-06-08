import type { Metadata } from "next";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
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
      <Header />

      <div className="container">
        <div className={styles.content}>
          <section className={styles.hero}>
            <h1 className={styles.title}>Made to trade</h1>
            <p className={styles.subtitle}>
              Start trading with verified brokers today.
            </p>
          </section>

          <section className={styles.listSection}>
            <BrokerExplorer brokers={BROKERS} filters={FILTER_OPTIONS} />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

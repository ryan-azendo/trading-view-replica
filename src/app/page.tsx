import Link from "next/link";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.toggle}>
        <ThemeToggle />
      </div>

      <div className={styles.center}>
        <p className={styles.eyebrow}>TradingView Brokers · Replica</p>
        <h1 className={styles.title}>Made to trade</h1>
        <p className={styles.lead}>
          The brokers page replica is being built bottom-up with an atomic
          design system. The foundation (tokens, theming, typography) is in
          place.
        </p>
        <div className={styles.links}>
          <Link href="/brokers" className={styles.link}>
            View the brokers page →
          </Link>
          <Link href="/brokers/liberator" className={styles.link}>
            Visit the Liberator landing page →
          </Link>
          <Link href="/design-system" className={styles.link}>
            View the design system →
          </Link>
        </div>

        <p className={styles.note}>
          You can also reach the Liberator page from the{" "}
          <Link href="/brokers" className={styles.noteLink}>
            brokers page
          </Link>{" "}
          — click <strong>Open account</strong> on the Liberator broker card.
        </p>
      </div>
    </main>
  );
}

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
        <Link href="/design-system" className={styles.link}>
          View the design system →
        </Link>
      </div>
    </main>
  );
}

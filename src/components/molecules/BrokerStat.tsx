import type { HTMLAttributes, ReactNode } from "react";
import styles from "./BrokerStat.module.css";

export type BrokerStatAlign = "start" | "center" | "end";

export interface BrokerStatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
  align?: BrokerStatAlign;
}

/**
 * BrokerStat — molecule. A single label/value pair for broker card stats
 * (e.g. value "$0" over label "Account min"). Token-driven.
 */
export function BrokerStat({
  label,
  value,
  align = "start",
  className,
  ...rest
}: BrokerStatProps) {
  return (
    <div
      className={[styles.stat, styles[align], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

import type { HTMLAttributes } from "react";
import {
  BrokerCard,
  type BrokerCardProps,
} from "@/components/organisms/BrokerCard";
import styles from "./BrokerList.module.css";

export type BrokerListItem = BrokerCardProps & { id: string };

export interface BrokerListProps extends HTMLAttributes<HTMLDivElement> {
  brokers: BrokerListItem[];
  /** Shown when `brokers` is empty (e.g. after filtering). */
  emptyMessage?: string;
}

/**
 * BrokerList — organism. Presentational: renders the given brokers as a
 * vertical list of BrokerCards, with an empty state. Filtering/sorting belong
 * to the parent (page/template) so this stays reusable.
 */
export function BrokerList({
  brokers,
  emptyMessage = "No brokers match your filters.",
  className,
  ...rest
}: BrokerListProps) {
  if (brokers.length === 0) {
    return (
      <div className={styles.empty} role="status" {...rest}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div
      className={[styles.list, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {brokers.map(({ id, ...broker }) => (
        <BrokerCard key={id} {...broker} />
      ))}
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { FilterBar, type FilterOption } from "@/components/organisms/FilterBar";
import {
  BrokerList,
  type BrokerListItem,
} from "@/components/organisms/BrokerList";
import type { Broker } from "@/data/brokers";
import styles from "./BrokerExplorer.module.css";

export interface BrokerExplorerProps {
  brokers: Broker[];
  filters: FilterOption[];
  defaultFilter?: string;
}

function toListItem(b: Broker): BrokerListItem {
  return {
    id: b.id,
    name: b.name,
    tagline: b.tagline,
    featured: b.featured,
    rating: b.rating,
    reviewCount: b.reviewCount,
    accent: b.accent,
    stats: b.stats,
  };
}

/**
 * BrokerExplorer — organism. Wires the FilterBar to the BrokerList: holds the
 * active category, filters the brokers, and renders both. Client component
 * (owns selection state); receives plain data from the server.
 */
export function BrokerExplorer({
  brokers,
  filters,
  defaultFilter = "all",
}: BrokerExplorerProps) {
  const [active, setActive] = useState(defaultFilter);

  const visible = useMemo(
    () =>
      active === "all"
        ? brokers
        : brokers.filter((b) => b.categories.includes(active)),
    [brokers, active],
  );

  return (
    <div className={styles.explorer}>
      <FilterBar
        options={filters}
        value={active}
        onChange={setActive}
        ariaLabel="Filter brokers by market"
      />
      <p className={styles.count}>
        {visible.length} {visible.length === 1 ? "broker" : "brokers"}
      </p>
      <BrokerList brokers={visible.map(toListItem)} />
    </div>
  );
}

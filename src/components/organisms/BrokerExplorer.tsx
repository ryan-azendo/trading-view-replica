"use client";

import { useMemo, useState } from "react";
import { FilterBar, type FilterOption } from "@/components/organisms/FilterBar";
import {
  BrokerList,
  type BrokerListItem,
} from "@/components/organisms/BrokerList";
import { Dropdown, type DropdownOption } from "@/components/molecules/Dropdown";
import type { Broker } from "@/data/brokers";
import styles from "./BrokerExplorer.module.css";

const SORT_OPTIONS: DropdownOption[] = [
  { id: "best-rated", label: "Best rated" },
  { id: "most-reviews", label: "Most reviews" },
  { id: "most-users", label: "Most users" },
];

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
  const [sort, setSort] = useState("best-rated");

  const visible = useMemo(() => {
    const filtered =
      active === "all"
        ? brokers
        : brokers.filter((b) => b.categories.includes(active));

    return [...filtered].sort((a, b) =>
      sort === "best-rated"
        ? b.rating - a.rating
        : (b.reviewCount ?? 0) - (a.reviewCount ?? 0),
    );
  }, [brokers, active, sort]);

  return (
    <div className={styles.explorer}>
      <div className={styles.controls}>
        <Dropdown
          options={SORT_OPTIONS}
          value={sort}
          onChange={setSort}
          ariaLabel="Sort brokers"
        />
        <span className={styles.divider} aria-hidden="true" />
        <FilterBar
          options={filters}
          value={active}
          onChange={setActive}
          ariaLabel="Filter brokers by market"
        />
      </div>
      <p className={styles.count}>
        {visible.length} {visible.length === 1 ? "broker" : "brokers"}
      </p>
      <BrokerList brokers={visible.map(toListItem)} />
    </div>
  );
}

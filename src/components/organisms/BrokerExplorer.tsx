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

/** Coerce a count (number or formatted string like "1.9K"/"30.8K") to a number. */
function toCount(v: number | string): number {
  if (typeof v === "number") return v;
  const match = /^([\d.]+)\s*([kmb]?)/i.exec(v.trim());
  if (!match) return 0;
  const n = parseFloat(match[1]);
  const mult = { k: 1e3, m: 1e6, b: 1e9 }[match[2].toLowerCase()] ?? 1;
  return n * mult;
}

export interface BrokerExplorerProps {
  brokers: Broker[];
  filters: FilterOption[];
  defaultFilter?: string;
}

function toListItem(b: Broker): BrokerListItem {
  return {
    id: b.id,
    name: b.name,
    tier: b.tier,
    tradableAssets: b.tradableAssets,
    rating: b.rating,
    reviewCount: b.reviewCount,
    accounts: b.accounts,
    accent: b.accent,
    logoSrc: b.logoSrc,
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
        : toCount(b.reviewCount) - toCount(a.reviewCount),
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
      <span className={styles.spacer} aria-hidden="true" />
      <BrokerList brokers={visible.map(toListItem)} />
    </div>
  );
}

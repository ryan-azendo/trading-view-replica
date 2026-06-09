import type { FilterOption } from "@/components/organisms/FilterBar";

export interface Broker {
  id: string;
  name: string;
  /** Subscription/partner tier, e.g. "SILVER", "GOLD". */
  tier?: string;
  /** Tradable assets summary, e.g. "Stocks, Futures". */
  tradableAssets: string;
  rating: number;
  /** Review count — a number or a pre-formatted string like "1.9K". */
  reviewCount: number | string;
  /** Pre-formatted account count, e.g. "5.5K". */
  accounts: string;
  /** Accent color for the fallback logo tile. */
  accent: string;
  /** Path to a real logo asset (overrides the colored tile). */
  logoSrc?: string;
  /** Category ids this broker belongs to (match FILTER_OPTIONS ids). */
  categories: string[];
}

/** Filter categories for the hero filter bar. "all" is the catch-all. */
export const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "All brokers" },
  { id: "stocks", label: "Stocks" },
  { id: "forex", label: "Forex" },
  { id: "crypto", label: "Crypto" },
  { id: "futures", label: "Futures" },
  { id: "cfd", label: "CFD" },
  { id: "bonds", label: "Bonds" },
];

/** Sample brokers. Placeholder data; only Liberator has a real logo asset. */
export const BROKERS: Broker[] = [
  {
    id: "liberator",
    name: "Liberator",
    tier: "SILVER",
    tradableAssets: "Stocks, Futures",
    rating: 4.1,
    reviewCount: 473,
    accounts: "5.5K",
    accent: "#2962ff",
    logoSrc: "/brokers/liberator.svg",
    categories: ["stocks", "futures"],
  },
  {
    id: "ksecurities",
    name: "KSecurities",
    tier: "SILVER",
    tradableAssets: "Stocks, Futures",
    rating: 4.4,
    reviewCount: 760,
    accounts: "12K",
    accent: "#22ab94",
    logoSrc: "/brokers/ksecurities.svg",
    categories: ["stocks", "futures"],
  },
  {
    id: "bitazza",
    name: "Bitazza",
    tier: "SILVER",
    tradableAssets: "Crypto",
    rating: 4.3,
    reviewCount: 540,
    accounts: "8.2K",
    accent: "#089981",
    logoSrc: "/brokers/bitazza.svg",
    categories: ["crypto"],
  },
  {
    id: "ylg-futures",
    name: "YLG Futures",
    tier: "SILVER",
    tradableAssets: "Futures",
    rating: 3.9,
    reviewCount: 101,
    accounts: "326",
    accent: "#f23645",
    logoSrc: "/brokers/ylg-futures.svg",
    categories: ["futures"],
  },
  {
    id: "beyond",
    name: "Beyond Securities",
    tier: "SILVER",
    tradableAssets: "Futures",
    rating: 3.7,
    reviewCount: 13,
    accounts: "458",
    accent: "#673ab7",
    logoSrc: "/brokers/beyond.svg",
    categories: ["futures"],
  },
  {
    id: "daolsec",
    name: "DAOL SEC",
    tier: "SILVER",
    tradableAssets: "Futures",
    rating: 3.8,
    reviewCount: 7,
    accounts: "217",
    accent: "#00bcd4",
    logoSrc: "/brokers/daolsec.svg",
    categories: ["futures"],
  },
  {
    id: "innovex",
    name: "InnovestX",
    tier: "SILVER",
    tradableAssets: "Stocks, Futures",
    rating: 3.8,
    reviewCount: "1.9K",
    accounts: "30.8K",
    accent: "#ff9800",
    logoSrc: "/brokers/innovex.svg",
    categories: ["stock", "futures"],
  },
  {
    id: "cgsi",
    name: "CGS (Thailand)",
    tier: "SILVER",
    tradableAssets: "Stocks, Futures",
    rating: 3.8,
    reviewCount: 6,
    accounts: "142",
    accent: "#e91e63",
    logoSrc: "/brokers/cgsi.svg",
    categories: ["stocks", "futures"],
  },
];

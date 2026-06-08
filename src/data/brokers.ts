import type { FilterOption } from "@/components/organisms/FilterBar";

export interface Broker {
  id: string;
  name: string;
  tagline?: string;
  featured?: boolean;
  rating: number;
  reviewCount?: number;
  /** Accent color for the logo tile (until real logo assets land). */
  accent: string;
  /** Category ids this broker belongs to (match FILTER_OPTIONS ids). */
  categories: string[];
  stats: { label: string; value: string }[];
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

/** Sample brokers. Placeholder data until real broker content/logos land. */
export const BROKERS: Broker[] = [
  {
    id: "liberator",
    name: "Liberator",
    tagline: "Trade stocks with zero commission",
    featured: true,
    rating: 4.6,
    reviewCount: 1280,
    accent: "#2962ff",
    categories: ["stocks"],
    stats: [
      { label: "Account min", value: "$0" },
      { label: "Regulation", value: "SEC" },
      { label: "Assets", value: "Stocks, ETFs" },
    ],
  },
  {
    id: "ylg-futures",
    name: "YLG Futures",
    tagline: "Futures and commodities trading",
    rating: 4.1,
    reviewCount: 342,
    accent: "#f23645",
    categories: ["futures"],
    stats: [
      { label: "Account min", value: "$500" },
      { label: "Regulation", value: "CFTC" },
      { label: "Assets", value: "Futures" },
    ],
  },
  {
    id: "innovex",
    name: "InnovexX",
    tagline: "Crypto and digital assets",
    rating: 3.9,
    reviewCount: 88,
    accent: "#ff9800",
    categories: ["crypto", "forex"],
    stats: [
      { label: "Account min", value: "$10" },
      { label: "Regulation", value: "—" },
      { label: "Assets", value: "Crypto, FX" },
    ],
  },
  {
    id: "bitazza",
    name: "Bitazza",
    tagline: "Digital asset exchange",
    featured: true,
    rating: 4.3,
    reviewCount: 540,
    accent: "#089981",
    categories: ["crypto"],
    stats: [
      { label: "Account min", value: "$0" },
      { label: "Regulation", value: "SEC TH" },
      { label: "Assets", value: "Crypto" },
    ],
  },
  {
    id: "daolsec",
    name: "DAOL SEC",
    tagline: "Full-service brokerage",
    rating: 4.0,
    reviewCount: 210,
    accent: "#00bcd4",
    categories: ["stocks", "bonds"],
    stats: [
      { label: "Account min", value: "$300" },
      { label: "Regulation", value: "SEC TH" },
      { label: "Assets", value: "Stocks, Bonds" },
    ],
  },
  {
    id: "ksecurities",
    name: "KSecurities",
    tagline: "Stocks and derivatives",
    rating: 4.4,
    reviewCount: 760,
    accent: "#22ab94",
    categories: ["stocks", "futures"],
    stats: [
      { label: "Account min", value: "$200" },
      { label: "Regulation", value: "SEC TH" },
      { label: "Assets", value: "Stocks, Futures" },
    ],
  },
  {
    id: "cgsi",
    name: "CGS International",
    tagline: "Regional investment banking",
    rating: 3.8,
    reviewCount: 150,
    accent: "#e91e63",
    categories: ["stocks", "cfd"],
    stats: [
      { label: "Account min", value: "$1,000" },
      { label: "Regulation", value: "MAS" },
      { label: "Assets", value: "Stocks, CFD" },
    ],
  },
  {
    id: "beyond",
    name: "Beyond Securities",
    tagline: "Online trading made simple",
    rating: 4.2,
    reviewCount: 95,
    accent: "#673ab7",
    categories: ["stocks", "forex"],
    stats: [
      { label: "Account min", value: "$50" },
      { label: "Regulation", value: "SEC TH" },
      { label: "Assets", value: "Stocks, FX" },
    ],
  },
];

"use client";

import { useState, type HTMLAttributes } from "react";
import { FilterTab } from "@/components/molecules/FilterTab";
import styles from "./FilterBar.module.css";

export interface FilterOption {
  id: string;
  label: string;
}

export interface FilterBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: FilterOption[];
  /** Controlled selected id. */
  value?: string;
  /** Initial selected id (uncontrolled). Defaults to the first option. */
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** Accessible group label. */
  ariaLabel?: string;
}

/**
 * FilterBar — organism. A horizontally-scrollable group of FilterTabs that
 * manages single-selection. Works controlled (`value` + `onChange`) or
 * uncontrolled (`defaultValue`).
 */
export function FilterBar({
  options,
  value,
  defaultValue,
  onChange,
  ariaLabel = "Filter brokers",
  className,
  ...rest
}: FilterBarProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.id);
  const selected = isControlled ? value : internal;

  const handleSelect = (id: string) => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
  };

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={[styles.bar, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {options.map((option) => (
        <FilterTab
          key={option.id}
          checked={selected === option.id}
          onClick={() => handleSelect(option.id)}
        >
          {option.label}
        </FilterTab>
      ))}
    </div>
  );
}

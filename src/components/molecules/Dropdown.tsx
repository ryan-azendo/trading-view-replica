"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import styles from "./Dropdown.module.css";

export interface DropdownOption {
  id: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  /** Controlled selected id. */
  value?: string;
  /** Initial selected id (uncontrolled). Defaults to the first option. */
  defaultValue?: string;
  onChange?: (id: string) => void;
  ariaLabel?: string;
  className?: string;
}

/**
 * Dropdown — molecule. A pill trigger that opens a single-select popover list.
 * Works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`).
 * Closes on outside click or Escape.
 */
export function Dropdown({
  options,
  value,
  defaultValue,
  onChange,
  ariaLabel,
  className,
}: DropdownProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.id);
  const selected = isControlled ? value : internal;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.id === selected);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSelect = (id: string) => {
    if (!isControlled) setInternal(id);
    onChange?.(id);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={[styles.root, className].filter(Boolean).join(" ")}
    >
      <button
        type="button"
        className={[styles.trigger, open && styles.triggerOpen]
          .filter(Boolean)
          .join(" ")}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{selectedOption?.label}</span>
        <Icon
          icon={ChevronDown}
          size="sm"
          className={[styles.chevron, open && styles.chevronOpen]
            .filter(Boolean)
            .join(" ")}
        />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" aria-label={ariaLabel}>
          {options.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                role="option"
                aria-selected={option.id === selected}
                className={[styles.item, option.id === selected && styles.itemActive]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => handleSelect(option.id)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./FilterTab.module.css";

export interface FilterTabProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Active/selected state. Selection logic lives in the parent group. */
  checked?: boolean;
  leadingIcon?: ReactNode;
}

/**
 * FilterTab — molecule. A selectable pill for the hero filter bar
 * (All brokers / Stocks / Forex…). Toggle button semantics via aria-pressed;
 * the parent owns which one is checked. Colors from --filter-* tokens.
 */
export const FilterTab = forwardRef<HTMLButtonElement, FilterTabProps>(
  function FilterTab(
    { checked = false, leadingIcon, type = "button", className, children, ...rest },
    ref,
  ) {
    const classes = [styles.tab, checked && styles.checked, className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        aria-pressed={checked}
        {...rest}
      >
        {leadingIcon && (
          <span className={styles.icon} aria-hidden="true">
            {leadingIcon}
          </span>
        )}
        {children}
      </button>
    );
  },
);

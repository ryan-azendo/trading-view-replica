import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeVariant =
  | "featured"
  | "neutral"
  | "brand"
  | "success"
  | "danger"
  | "warning";

export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style. `featured` is the inverted broker tag from --badge-*. */
  variant?: BadgeVariant;
  size?: BadgeSize;
  /** Optional icon/dot before the label. */
  leadingIcon?: ReactNode;
}

/**
 * Badge — foundational atom. Small inline label/tag (e.g. "Featured",
 * "Regulated", tier markers). Token-driven, so it themes automatically.
 */
export function Badge({
  variant = "neutral",
  size = "sm",
  leadingIcon,
  className,
  children,
  ...rest
}: BadgeProps) {
  const classes = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {leadingIcon && (
        <span className={styles.icon} aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      {children}
    </span>
  );
}

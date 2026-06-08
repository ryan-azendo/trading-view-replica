import type { LucideIcon, LucideProps } from "lucide-react";
import styles from "./Icon.module.css";

export type IconSize = "sm" | "md" | "lg" | number;

const SIZE_MAP: Record<Exclude<IconSize, number>, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

export interface IconProps extends Omit<LucideProps, "size" | "ref"> {
  /** A lucide-react icon component, e.g. `Star` from "lucide-react". */
  icon: LucideIcon;
  size?: IconSize;
  /**
   * Accessible label. When provided the icon is exposed to AT as an image;
   * otherwise it's hidden (decorative) — the common case.
   */
  label?: string;
}

/**
 * Icon — foundational atom wrapping lucide-react.
 *
 * Defaults to `currentColor`, so it inherits text color from its context and
 * themes automatically. Pass `color="var(--color-...)"` to override.
 */
export function Icon({
  icon: LucideComp,
  size = "md",
  label,
  strokeWidth = 2,
  className,
  ...rest
}: IconProps) {
  const px = typeof size === "number" ? size : SIZE_MAP[size];
  const classes = [styles.icon, className].filter(Boolean).join(" ");

  return (
    <LucideComp
      size={px}
      strokeWidth={strokeWidth}
      className={classes}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    />
  );
}

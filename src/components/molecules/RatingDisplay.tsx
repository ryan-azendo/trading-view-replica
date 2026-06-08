import type { HTMLAttributes } from "react";
import { BadgeCheck } from "lucide-react";
import { RatingStars, type RatingSize } from "@/components/atoms/RatingStars";
import { Icon } from "@/components/atoms/Icon";
import styles from "./RatingDisplay.module.css";

export type RatingLayout = "inline" | "stacked";

/** Word rating from a numeric value. 3.7 → "Average" (matches the reference). */
function ratingLabel(value: number): string {
  if (value >= 4.5) return "Excellent";
  if (value >= 4) return "Great";
  if (value >= 3) return "Average";
  if (value >= 2) return "Poor";
  return "Bad";
}

export interface RatingDisplayProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: RatingSize;
  /** `inline` = stars then meta; `stacked` = meta above stars. */
  layout?: RatingLayout;
  /** Numeric value, e.g. "3.7". */
  showValue?: boolean;
  /** Word rating, e.g. "Average". */
  showLabel?: boolean;
  /** Verified check icon. */
  verified?: boolean;
  /** Review count, e.g. (1,234). */
  reviewCount?: number;
}

/**
 * RatingDisplay — molecule. RatingStars + numeric value + optional word label,
 * verified mark and review count. Owns the value/label text (RatingStars renders
 * only the stars) so layout can be controlled.
 */
export function RatingDisplay({
  value,
  max = 5,
  size = "md",
  layout = "inline",
  showValue = true,
  showLabel = false,
  verified = false,
  reviewCount,
  className,
  ...rest
}: RatingDisplayProps) {
  const meta = (
    <span className={styles.meta}>
      {showValue && <span className={styles.value}>{value.toFixed(1)}</span>}
      {showLabel && (
        <>
          <span className={styles.dot} aria-hidden="true">
            •
          </span>
          <span className={styles.label}>{ratingLabel(value)}</span>
        </>
      )}
      {verified && (
        <Icon
          icon={BadgeCheck}
          size="sm"
          className={styles.verified}
          label="Verified"
        />
      )}
      {typeof reviewCount === "number" && (
        <span className={styles.count}>({reviewCount.toLocaleString()})</span>
      )}
    </span>
  );

  return (
    <div
      className={[styles.root, styles[layout], className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {layout === "stacked" && meta}
      <RatingStars value={value} max={max} size={size} />
      {layout === "inline" && meta}
    </div>
  );
}

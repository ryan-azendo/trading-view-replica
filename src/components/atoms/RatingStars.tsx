import type { HTMLAttributes } from "react";
import { Star } from "lucide-react";
import { Icon } from "./Icon";
import styles from "./RatingStars.module.css";

export type RatingSize = "sm" | "md" | "lg" | number;

const SIZE_MAP: Record<Exclude<RatingSize, number>, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

export interface RatingStarsProps extends HTMLAttributes<HTMLSpanElement> {
  /** Rating value, e.g. 4.5. Fractions render as partially-filled stars. */
  value: number;
  /** Number of stars. */
  max?: number;
  size?: RatingSize;
  /** Show the numeric value (e.g. "4.5") after the stars. */
  showValue?: boolean;
  /** Show a review count in parentheses, e.g. (1,234). */
  reviewCount?: number;
}

/**
 * RatingStars — foundational atom. Renders `max` stars filled to `value`,
 * with accurate fractional fill via a clipped overlay. Colors come from the
 * --rating-* tokens so it themes automatically.
 */
export function RatingStars({
  value,
  max = 5,
  size = "md",
  showValue = false,
  reviewCount,
  className,
  ...rest
}: RatingStarsProps) {
  const px = typeof size === "number" ? size : SIZE_MAP[size];
  const label = `Rating: ${value} out of ${max}`;

  return (
    <span
      className={[styles.rating, className].filter(Boolean).join(" ")}
      role="img"
      aria-label={label}
      {...rest}
    >
      <span className={styles.stars}>
        {Array.from({ length: max }, (_, i) => {
          const fillPct = Math.max(0, Math.min(1, value - i)) * 100;
          return (
            <span
              key={i}
              className={styles.star}
              style={{ width: px, height: px }}
            >
              {/* base: empty outline */}
              <Icon icon={Star} size={px} />
              {/* overlay: filled star, clipped to the fractional width */}
              {fillPct > 0 && (
                <span className={styles.fill} style={{ width: `${fillPct}%` }}>
                  <Icon icon={Star} size={px} fill="currentColor" />
                </span>
              )}
            </span>
          );
        })}
      </span>

      {showValue && <span className={styles.value}>{value.toFixed(1)}</span>}
      {typeof reviewCount === "number" && (
        <span className={styles.count}>({reviewCount.toLocaleString()})</span>
      )}
    </span>
  );
}

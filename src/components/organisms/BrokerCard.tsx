import type { ReactNode } from "react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { RatingDisplay } from "@/components/molecules/RatingDisplay";
import { BrokerStat } from "@/components/molecules/BrokerStat";
import styles from "./BrokerCard.module.css";

export interface BrokerStatItem {
  label: string;
  value: ReactNode;
}

export interface BrokerCardProps {
  name: string;
  tagline?: string;
  /** Logo node (image/svg). Falls back to the broker's initial if omitted. */
  logo?: ReactNode;
  featured?: boolean;
  rating: number;
  reviewCount?: number;
  stats?: BrokerStatItem[];
  ctaLabel?: string;
  onOpenAccount?: () => void;
}

/**
 * BrokerCard — organism. The core broker row: identity + rating + stats + CTA
 * on the left, logo on the right. Composes Badge, RatingDisplay, BrokerStat
 * and Button. Token-driven, themes automatically.
 */
export function BrokerCard({
  name,
  tagline,
  logo,
  featured = false,
  rating,
  reviewCount,
  stats = [],
  ctaLabel = "Open account",
  onOpenAccount,
}: BrokerCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          {featured && <Badge variant="featured">Featured</Badge>}
        </div>

        {tagline && <p className={styles.tagline}>{tagline}</p>}

        <RatingDisplay
          value={rating}
          reviewCount={reviewCount}
          size="sm"
          className={styles.rating}
        />

        {stats.length > 0 && (
          <div className={styles.stats}>
            {stats.map((s) => (
              <BrokerStat key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        )}

        <Button
          variant="secondary"
          className={styles.cta}
          onClick={onOpenAccount}
        >
          {ctaLabel}
        </Button>
      </div>

      <div className={styles.logo} aria-hidden={logo ? undefined : true}>
        {logo ?? <span className={styles.logoFallback}>{name.charAt(0)}</span>}
      </div>
    </article>
  );
}

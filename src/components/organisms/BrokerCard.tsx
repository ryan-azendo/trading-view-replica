import type { CSSProperties } from "react";
import Image from "next/image";
import { MessageSquare, User, ExternalLink } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { RatingDisplay } from "@/components/molecules/RatingDisplay";
import styles from "./BrokerCard.module.css";

export interface BrokerCardProps {
  name: string;
  tier?: string;
  tradableAssets: string;
  rating: number;
  reviewCount: number | string;
  accounts: string;
  /** Accent color for the fallback logo tile. */
  accent?: string;
  /** Real logo asset path; falls back to a colored initial tile. */
  logoSrc?: string;
  onOpenAccount?: () => void;
  onLearnMore?: () => void;
}

/**
 * BrokerCard — organism. Identity + tier + rating + reviews/accounts + CTAs on
 * the left, a large logo bleeding off the right. Composes Badge, RatingDisplay,
 * BrokerStat, Button. Token-driven.
 */
export function BrokerCard({
  name,
  tier,
  tradableAssets,
  rating,
  reviewCount,
  accounts,
  accent = "var(--color-brand)",
  logoSrc,
  onOpenAccount,
  onLearnMore,
}: BrokerCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>
          {tier && <Badge variant="tier">{tier}</Badge>}
        </div>

        <p className={styles.assets}>Tradable assets: {tradableAssets}</p>

        <div className={styles.ratingRow}>
          <RatingDisplay
            value={rating}
            layout="stacked"
            showLabel
            verified
            size="sm"
          />
          <div className={styles.metaStat}>
            <span className={styles.statValue}>
              <Icon icon={MessageSquare} size="sm" />
              {reviewCount}
            </span>
            <span className={styles.statLabel}>Reviews</span>
          </div>
          <div className={styles.metaStat}>
            <span className={styles.statValue}>
              <Icon icon={User} size="sm" />
              {accounts}
            </span>
            <span className={styles.statLabel}>Accounts</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="inverse"
            onClick={onOpenAccount}
            trailingIcon={<Icon icon={ExternalLink} size="sm" />}
          >
            Open account
          </Button>
          <Button variant="secondary" onClick={onLearnMore}>
            Learn more
          </Button>
        </div>
      </div>

      <div className={styles.logo} aria-hidden="true">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt=""
            width={298}
            height={272}
            unoptimized
            className={styles.logoImage}
          />
        ) : (
          <span
            className={styles.logoTile}
            style={{ "--tile-accent": accent } as CSSProperties}
          >
            {name.charAt(0)}
          </span>
        )}
      </div>
    </article>
  );
}

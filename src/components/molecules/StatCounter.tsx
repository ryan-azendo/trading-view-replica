import styles from "./StatCounter.module.css";

export interface GradientStop {
  offset: string;
  color: string;
}

export interface StatCounterProps {
  /** Unique id (used for the SVG gradient/filter defs). */
  id: string;
  /** Pre-formatted number, e.g. "4 578 019". */
  value: string;
  label: string;
  stops: GradientStop[];
}

/**
 * StatCounter — molecule. A large gradient-outlined number (SVG stroke + glow)
 * with a caption, for the marketing promo band.
 */
export function StatCounter({ id, value, label, stops }: StatCounterProps) {
  const gradId = `statgrad-${id}`;
  const glowId = `statglow-${id}`;

  return (
    <div className={styles.stat}>
      <svg
        className={styles.number}
        viewBox="0 0 720 160"
        role="img"
        aria-label={value}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            {stops.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} />
            ))}
          </linearGradient>
          <filter id={glowId} x="-15%" y="-60%" width="130%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          filter={`url(#${glowId})`}
        >
          {value}
        </text>
      </svg>
      <p className={styles.label}>{label}</p>
    </div>
  );
}

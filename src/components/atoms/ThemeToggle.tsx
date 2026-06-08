"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";
import { Icon } from "./Icon";
import styles from "./ThemeToggle.module.css";

export interface ThemeToggleProps {
  /** Icon-only square button (no "Light"/"Dark" label). */
  compact?: boolean;
}

/**
 * ThemeToggle — atom. Switches light/dark via the ThemeProvider.
 */
export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = `Switch to ${isDark ? "light" : "dark"} theme`;

  return (
    <button
      type="button"
      className={[styles.toggle, compact && styles.compact]
        .filter(Boolean)
        .join(" ")}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <Icon icon={isDark ? Sun : Moon} size="sm" />
      {!compact && <span className={styles.label}>{isDark ? "Light" : "Dark"}</span>}
    </button>
  );
}

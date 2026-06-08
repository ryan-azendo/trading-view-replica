"use client";

import { useTheme } from "@/theme/ThemeProvider";
import styles from "./ThemeToggle.module.css";

/**
 * ThemeToggle — foundational atom.
 * Switches between light and dark themes via the ThemeProvider.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
      <span className={styles.label}>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

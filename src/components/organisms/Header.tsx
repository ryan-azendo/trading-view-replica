"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import styles from "./Header.module.css";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "#" },
  { label: "Community", href: "#" },
  { label: "Markets", href: "#" },
  { label: "News", href: "#" },
  { label: "Brokers", href: "/brokers" },
  { label: "More", href: "#" },
];

/**
 * Header — organism. Sticky top nav: logo + search pill + nav links, with
 * theme toggle and auth CTAs. Collapses the nav into a mobile menu below ~900px.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo} aria-label="TradingView home">
            <BrandLogo height={20} />
          </Link>

          <button type="button" className={styles.search}>
            <Icon icon={Search} size="sm" className={styles.searchIcon} />
            <span className={styles.searchText}>Search</span>
            <kbd className={styles.kbd}>⌘K</kbd>
          </button>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = link.href !== "#" && pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={active ? `${styles.navLink} ${styles.active}` : styles.navLink}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.right}>
          <ThemeToggle compact />
          <Button variant="ghost" size="sm" className={styles.signIn}>
            Sign in
          </Button>
          <Button variant="primary" size="sm" className={styles.getStarted}>
            Get started
          </Button>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon icon={menuOpen ? X : Menu} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="sm" fullWidth>
            Sign in
          </Button>
        </nav>
      )}
    </header>
  );
}

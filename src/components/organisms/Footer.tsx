import { Globe, ChevronDown } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { SocialIcon, type SocialName } from "@/components/atoms/SocialIcon";
import styles from "./Footer.module.css";

interface FooterGroup {
  heading: string;
  links: string[];
}

/** Footer link columns (labels only; all hrefs are placeholders). */
const COLUMNS: FooterGroup[][] = [
  [
    { heading: "More than a product", links: ["Supercharts"] },
    {
      heading: "Screeners",
      links: ["Stocks", "ETFs", "Bonds", "Crypto coins", "CEX pairs", "DEX pairs", "Pine"],
    },
    { heading: "Heatmaps", links: ["Stocks", "ETFs", "Crypto coins"] },
    { heading: "Calendars", links: ["Economic", "Earnings", "Dividends"] },
    {
      heading: "More products",
      links: ["Yield Curves", "Options", "Macro Maps", "News Flow", "Pine Script®"],
    },
    { heading: "Apps", links: ["Mobile", "Desktop"] },
  ],
  [
    {
      heading: "Tools & subscriptions",
      links: ["Features", "Pricing", "Market data", "Gift plans"],
    },
    { heading: "Trading", links: ["Overview", "Top brokers", "Brokers comparison"] },
    {
      heading: "Special offers",
      links: ["CME Group futures", "Eurex futures", "US stocks bundle"],
    },
    {
      heading: "About company",
      links: ["Who we are", "Space mission", "Blog", "Careers", "Media kit"],
    },
    {
      heading: "Merch",
      links: ["TradingView store", "Tarot cards for traders", "The C63 TradeTime"],
    },
    {
      heading: "Policies & security",
      links: [
        "Terms of Use",
        "Disclaimer",
        "Privacy Policy",
        "Cookies Policy",
        "Accessibility Statement",
        "Security tips",
        "Bug Bounty program",
        "Status page",
      ],
    },
  ],
  [
    {
      heading: "Community",
      links: ["Social network", "Wall of Love", "Refer a friend", "House Rules", "Moderators"],
    },
    { heading: "Ideas", links: ["Trading", "Education", "Editors' picks"] },
    {
      heading: "Pine Script",
      links: ["Indicators & strategies", "Wizards", "Freelancers", "Paid Spaces"],
    },
  ],
  [
    {
      heading: "Business solutions",
      links: [
        "Widgets",
        "Charting libraries",
        "Lightweight Charts™",
        "Advanced Charts",
        "Trading Platform",
      ],
    },
    {
      heading: "Growth opportunities",
      links: ["Advertising", "Brokerage integration", "Partner program", "Education program"],
    },
  ],
];

const SOCIALS_PRIMARY: SocialName[] = ["x", "facebook", "youtube", "instagram", "linkedin"];
const SOCIALS_SECONDARY: SocialName[] = ["telegram", "tiktok", "reddit"];

/**
 * Footer — organism. Brand column (logo, socials, language, legal) + four
 * link columns, with the large "LOOK FIRST / THEN LEAP." band beneath.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <BrandLogo height={20} className={styles.logo} />
          <p className={styles.tagline}>
            Look first <span className={styles.slash}>/</span> Then leap
            <span className={styles.dot}>.</span>
          </p>

          <div className={styles.socials}>
            <div className={styles.socialRow}>
              {SOCIALS_PRIMARY.map((name) => (
                <a key={name} href="#" className={styles.social} aria-label={name}>
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
            <div className={styles.socialRow}>
              {SOCIALS_SECONDARY.map((name) => (
                <a key={name} href="#" className={styles.social} aria-label={name}>
                  <SocialIcon name={name} />
                </a>
              ))}
            </div>
          </div>

          <button type="button" className={styles.language}>
            <Icon icon={Globe} size="sm" />
            English
            <Icon icon={ChevronDown} size="sm" />
          </button>

          <div className={styles.legal}>
            <p>
              Select market data provided by{" "}
              <a href="#" className={styles.legalLink}>
                ICE Data Services
              </a>
              .
            </p>
            <p>
              Select reference data provided by FactSet. Copyright © 2026 FactSet
              Research Systems Inc.
            </p>
            <p>
              Copyright © 2026, American Bankers Association. CUSIP Database
              provided by FactSet Research Systems Inc. All rights reserved.
            </p>
            <p>
              SEC filings and other documents provided by{" "}
              <a href="#" className={styles.legalLink}>
                Quartr
              </a>
              .
            </p>
            <p>© 2026 TradingView, Inc.</p>
          </div>
        </div>

        {/* Link columns */}
        {COLUMNS.map((groups, i) => (
          <div key={i} className={styles.column}>
            {groups.map((group) => (
              <div key={group.heading} className={styles.group}>
                <h3 className={styles.groupHeading}>{group.heading}</h3>
                <ul className={styles.groupLinks}>
                  {group.links.map((label) => (
                    <li key={label}>
                      <a href="#" className={styles.link}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.band} aria-hidden="true">
        LOOK FIRST / THEN LEAP.
      </div>
    </footer>
  );
}

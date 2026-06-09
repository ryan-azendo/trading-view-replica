"use client";

import { useState } from "react";
import { ChevronRight, ArrowUp } from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import styles from "./page.module.css";

/* ----------------------------------------------------------------
   FAQ — accordion. Click a row to expand its answer.
   ---------------------------------------------------------------- */

interface FaqItem {
  q: string;
  a: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className={styles.faqList}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className={styles.faqItem}>
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <Icon
                icon={ChevronRight}
                size="sm"
                className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
              />
              <span>{item.q}</span>
            </button>
            {isOpen && <p className={styles.faqAnswer}>{item.a}</p>}
          </li>
        );
      })}
    </ul>
  );
}

/* ----------------------------------------------------------------
   CommissionTabs — toggle between Thai/US equities and TFEX rate cards.
   ---------------------------------------------------------------- */

interface RateRow {
  range: string;
  rate: string;
}

const TH_RATES: RateRow[] = [
  { range: "0 - 1,000,000", rate: "0.0499 %" },
  { range: "1,000,001 - 20,000,000", rate: "0.0449 %" },
  { range: "20,000,001 - 100,000,000", rate: "0.0399 %" },
  { range: "100,000,001 - 200,000,000", rate: "0.0349 %" },
  { range: "200,000,001 - 300,000,000", rate: "0.0299 %" },
  { range: "300,000,000+", rate: "ไม่มีค่าคอมมิชชั่น" },
];

const TFEX_RATES: RateRow[] = [
  { range: "SET50 Index Futures", rate: "32 / สัญญา" },
  { range: "Single Stock Futures", rate: "0.05 %" },
  { range: "Gold Futures (รายใหญ่)", rate: "190 / สัญญา" },
  { range: "Gold Futures (รายย่อย)", rate: "19 / สัญญา" },
  { range: "Currency Futures", rate: "5 / สัญญา" },
  { range: "Interest Rate Futures", rate: "20 / สัญญา" },
];

export function CommissionTabs() {
  const [tab, setTab] = useState<"equities" | "tfex">("equities");

  return (
    <>
      <div className={styles.commToggle} role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "equities"}
          className={`${styles.commToggleBtn} ${tab === "equities" ? styles.commToggleActive : ""}`}
          onClick={() => setTab("equities")}
        >
          หุ้นไทย และ หุ้นอเมริกา
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "tfex"}
          className={`${styles.commToggleBtn} ${tab === "tfex" ? styles.commToggleActive : ""}`}
          onClick={() => setTab("tfex")}
        >
          TFEX
        </button>
      </div>

      <div className={styles.commGrid}>
        <div className={styles.commCard}>
          <h3 className={styles.commCardTitle}>
            {tab === "equities" ? "หุ้นไทย" : "TFEX"}
          </h3>
          <div className={styles.commTableHead}>
            <span>{tab === "equities" ? "ช่วงการซื้อขาย" : "ประเภทสัญญา"}</span>
            <span>เรทค่าคอม</span>
          </div>
          <ul className={styles.commTable}>
            {(tab === "equities" ? TH_RATES : TFEX_RATES).map((row) => (
              <li key={row.range} className={styles.commRow}>
                <span className={styles.commRange}>{row.range}</span>
                <span className={styles.commRate}>{row.rate}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.commCard}>
          <h3 className={styles.commCardTitle}>
            {tab === "equities" ? "หุ้นอเมริกา" : "ค่าธรรมเนียมอื่นๆ"}
          </h3>
          <div className={styles.commBigWrap}>
            <p className={styles.commBig}>{tab === "equities" ? "0.10%" : "0.05%"}</p>
            <p className={styles.commBigLabel}>เรทค่าคอม</p>
          </div>
          <p className={styles.commNote}>
            {tab === "equities"
              ? "สำหรับหุ้นที่มีราคาตั้งแต่ 6.67 USD ขึ้นไป และสำหรับหุ้นที่มีราคาต่ำกว่า 6.67 USD จะคิดค่าคอมมิชชั่นแบบคงที่ 0.00667 USD ต่อหุ้น"
              : "อัตราค่าธรรมเนียมขั้นต่ำต่อรายการ คิดตามประเภทของสัญญาและปริมาณการซื้อขายในแต่ละช่วง"}
          </p>
        </div>
      </div>
    </>
  );
}

/* ----------------------------------------------------------------
   FeatureTabs — switch the "Trade on Chart" showcase tabs.
   ---------------------------------------------------------------- */

interface FeaturePanel {
  key: string;
  label: string;
  intro: string;
  cards: { img: string; title: string; body: string }[];
}

export function FeatureTabs({ panels }: { panels: FeaturePanel[] }) {
  const [active, setActive] = useState(panels.findIndex((p) => p.key === "trade") || 0);
  const panel = panels[active];

  const go = (dir: -1 | 1) =>
    setActive((i) => (i + dir + panels.length) % panels.length);

  return (
    <div className={styles.featureTabs}>
      <div className={styles.featureTabBar}>
        <button
          type="button"
          className={styles.featureArrow}
          aria-label="Previous"
          onClick={() => go(-1)}
        >
          <Icon icon={ChevronRight} size="sm" style={{ transform: "rotate(180deg)" }} />
        </button>
        <div className={styles.featureTabLabels}>
          {panels.map((p, i) => (
            <button
              key={p.key}
              type="button"
              className={`${styles.featureTabLabel} ${i === active ? styles.featureTabLabelActive : ""}`}
              onClick={() => setActive(i)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className={styles.featureArrow}
          aria-label="Next"
          onClick={() => go(1)}
        >
          <Icon icon={ChevronRight} size="sm" />
        </button>
      </div>

      <p className={styles.featureIntro}>{panel.intro}</p>

      <div className={styles.featureCards}>
        {panel.cards.map((card) => (
          <div key={card.title} className={styles.featureCard}>
            <div className={styles.featureCardImgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={card.img} alt="" className={styles.featureCardImg} />
            </div>
            <h4 className={styles.featureCardTitle}>{card.title}</h4>
            <p className={styles.featureCardBody}>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   BackToTop — floating pill that scrolls the page to the top.
   ---------------------------------------------------------------- */

export function BackToTop() {
  return (
    <button
      type="button"
      className={styles.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      กลับไปด้านบน
      <Icon icon={ArrowUp} size="sm" />
    </button>
  );
}

/* ----------------------------------------------------------------
   Carousel dots — purely decorative state for the laptop showcase.
   ---------------------------------------------------------------- */

export function CarouselDots({ count }: { count: number }) {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.dots}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Slide ${i + 1}`}
          className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
          onClick={() => setActive(i)}
        />
      ))}
    </div>
  );
}

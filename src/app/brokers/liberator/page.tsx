import type { Metadata } from "next";
import {
  ScanLine,
  BellRing,
  CandlestickChart,
  Code2,
  PencilRuler,
  Boxes,
  Play,
  Star,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Icon } from "@/components/atoms/Icon";
import { SocialIcon, type SocialName } from "@/components/atoms/SocialIcon";
import {
  Faq,
  CommissionTabs,
  FeatureTabs,
  BackToTop,
  CarouselDots,
} from "./LiberatorClient";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Liberator x TradingView — เทรดหุ้นไทยและเทศบนกราฟ TradingView",
  description:
    "เชื่อมต่อบัญชี Liberator กับ TradingView เทรดหุ้นไทย หุ้นอเมริกา และ TFEX บนกราฟได้โดยตรง พร้อมค่าคอมฯ ตามจริง ยิ่งเทรด ยิ่งถูก",
};

/** placehold.jp placeholder — swap each for a real screenshot later. */
const ph = (w: number, h: number) => `https://placehold.jp/${w}x${h}.png`;

const LIB_LOGO = "/brokers/logo-liberator.png";
const TV_LOGO = "/brokers/tradingview-white.svg";

const FEATURES = [
  {
    icon: ScanLine,
    title: "Stock Screener",
    body: "สแกนและคัดเลือกหุ้นตามเงื่อนไขที่ต้องการ",
  },
  {
    icon: BellRing,
    title: "Alerts",
    body: "ไม่พลาดทุกการเคลื่อนไหวของหุ้นด้วยการแจ้งเตือนที่ครอบคลุม",
  },
  {
    icon: CandlestickChart,
    title: "Trade on Chart",
    body: "ส่งคำสั่งแบบมีเงื่อนไขผ่านกราฟได้เลย",
  },
  {
    icon: Code2,
    title: "Pine Script™",
    body: "พัฒนา Indicator ส่วนตัว รวมถึงทำการทดสอบกลยุทธ์ย้อนหลัง (Backtesting)",
  },
  {
    icon: PencilRuler,
    title: "Chart & Drawing Tools",
    body: "มีชาร์ตที่ครบครันกว่า 20 แบบ และเครื่องมือวาดกราฟกว่า 100+ ชนิด",
  },
  {
    icon: Boxes,
    title: "Indicator",
    body: "มอบอิสระในการเทรดด้วยอินดิเคเตอร์กว่า 400 ตัว",
  },
];

const STEPS = [
  {
    title: "เปิดบัญชีกับ Liberator",
    body: "เปิดบัญชีง่ายๆ ใช้เวลาไม่นาน เพื่อเริ่มต้นการ TradingView ในขั้นตอนถัดไป",
    cta: "เปิดบัญชีกับ Liberator",
    note: "*หากไม่มีบัญชีกับ Liberator สามารถเปิดบัญชีได้ที่นี่",
  },
  {
    title: "เปิดบัญชีกับ TradingView",
    body: "เปิดบัญชีหรือเข้าสู่ระบบกับ TradingView ที่มีอยู่แล้ว",
    cta: "เปิดบัญชีกับ TradingView",
    note: "*หากไม่มีบัญชีกับ TradingView สามารถเปิดบัญชีได้ที่นี่",
  },
  {
    title: "เชื่อมบัญชี Liberator กับ TradingView",
    body: "เข้าสู่ระบบและเลือกเชื่อมต่อบัญชี Liberator เพื่อเริ่มเทรดบน TradingView ได้ทันที",
    cta: "เชื่อมบัญชี",
    note: "*เชื่อมต่อบัญชีได้ทันทีหลังเปิดบัญชีเรียบร้อย",
  },
];

const FEATURE_PANELS = [
  {
    key: "pine",
    label: "Pine Script™ + Backtesting",
    intro:
      "พัฒนาอินดิเคเตอร์และกลยุทธ์ของคุณเองด้วย Pine Script™ พร้อมทดสอบย้อนหลังก่อนใช้งานจริง",
    cards: [
      {
        img: ph(680, 420),
        title: "เขียนกลยุทธ์ได้ตามใจ",
        body: "สร้างอินดิเคเตอร์และระบบเทรดอัตโนมัติของคุณเองได้อย่างอิสระบนภาษา Pine Script™",
      },
      {
        img: ph(680, 420),
        title: "ทดสอบย้อนหลังก่อนเทรดจริง",
        body: "วัดผลกลยุทธ์ด้วยข้อมูลในอดีต เพื่อความมั่นใจก่อนนำไปใช้กับเงินจริง",
      },
    ],
  },
  {
    key: "trade",
    label: "Trade on Chart",
    intro:
      "ส่งคำสั่งซื้อ-ขาย พร้อมกำหนดราคา Stop Loss และ Take Profit ลงบนกราฟได้โดยตรง สะดวกรวดเร็วในจุดเดียว",
    cards: [
      {
        img: ph(680, 420),
        title: "ควบคุมจังหวะการซื้อ - ขาย",
        body: "ปักหมุดคำสั่งบนกราฟ จะซื้อ - ขาย เมื่อราคาแตะเส้นที่เราตั้งไว้ ทำได้ปลดล็อกทุกความเป็นไปได้",
      },
      {
        img: ph(680, 420),
        title: "ส่งคำสั่งซื้อ - ขาย ได้รัวๆ",
        body: "เรียกราคา ตั้ง Stop Loss และ Take Profit ได้รวดเร็วในจุดเดียว ให้การเทรดทำงานแทนเราโดยปราศจากอารมณ์",
      },
    ],
  },
  {
    key: "screener",
    label: "Screener",
    intro:
      "คัดกรองหุ้นตามเงื่อนไขที่ต้องการจากตลาดทั่วโลก เพื่อค้นหาโอกาสการลงทุนที่ใช่สำหรับคุณ",
    cards: [
      {
        img: ph(680, 420),
        title: "สแกนหุ้นทั้งตลาดในคลิกเดียว",
        body: "ตั้งเงื่อนไขทางเทคนิคและพื้นฐาน แล้วให้ระบบคัดหุ้นที่ตรงใจมาให้คุณทันที",
      },
      {
        img: ph(680, 420),
        title: "ไม่พลาดทุกโอกาสการลงทุน",
        body: "บันทึกตัวกรองที่ใช้บ่อย และติดตามหุ้นเป้าหมายได้ตลอดเวลาที่ตลาดเปิด",
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "สนใจเริ่มใช้งาน ต้องทำอย่างไร ?",
    a: "เพียงเปิดบัญชีกับ Liberator และบัญชี TradingView จากนั้นเชื่อมต่อทั้งสองบัญชีเข้าด้วยกัน ก็สามารถเริ่มเทรดบนกราฟได้ทันที",
  },
  {
    q: "มีค่าใช้จ่ายในการใช้งานหรือไม่ ?",
    a: "การเชื่อมต่อบัญชีเพื่อเทรดบน TradingView ไม่มีค่าใช้จ่ายเพิ่มเติม คุณจ่ายเพียงค่าคอมมิชชั่นตามจริงของแต่ละรายการเท่านั้น",
  },
  {
    q: "มีค่าคอมมิชชั่นส่วนเพิ่มไหม ?",
    a: "ไม่มีค่าคอมมิชชั่นส่วนเพิ่มจากการเทรดผ่าน TradingView อัตราค่าคอมเป็นไปตามตารางค่าคอมฯ ของ Liberator",
  },
  {
    q: "ข้อดีของการเทรดผ่าน TradingView คืออะไร ?",
    a: "คุณจะได้เครื่องมือวิเคราะห์ระดับมืออาชีพ ทั้งกราฟ อินดิเคเตอร์ การแจ้งเตือน และการส่งคำสั่งบนกราฟ ครบในที่เดียว",
  },
  {
    q: "ไม่เคยใช้ TradingView มาก่อนเลย ใช้งานยากไหม และต้องทำยังไง ?",
    a: "TradingView ออกแบบมาให้ใช้งานง่าย พร้อมบทเรียนและวิดีโอสอนการใช้งาน คุณสามารถเริ่มต้นได้แม้ไม่มีประสบการณ์มาก่อน",
  },
];

const SOCIALS: SocialName[] = ["facebook", "youtube", "telegram", "x", "instagram"];

export default function LiberatorPage() {
  return (
    <div className={styles.page}>
      {/* ===================== HEADER ===================== */}
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LIB_LOGO} alt="Liberator" className={styles.headerLogo} />
          <div className={styles.headerRight}>
            <a href="#open" className={styles.headerCta}>
              เปิดบัญชีกับเรา
            </a>
            <a href="#steps" className={styles.headerLink}>
              วิธีเชื่อมต่อบัญชี ซื้อ-ขาย
            </a>
            <a href="#about" className={styles.headerLink}>
              เกี่ยวกับ TradingView
            </a>
          </div>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              ร่วมเป็นส่วนหนึ่ง
              <br />
              ในการช่วยโหวตให้เราใน
            </h1>
            <div className={styles.heroAwards}>
              <span className={styles.heroAwardsBrand}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TV_LOGO} alt="TradingView" className={styles.tvLogo} />
                <span className={styles.heroAwardsName}>Broker Awards 2025</span>
              </span>
              <span className={styles.heroNominee}>
                <Icon icon={Star} size="sm" />
                Broker Awards 2025 Nominee
              </span>
            </div>
          </div>
          <div className={styles.heroArt}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(900, 560)} alt="" className={styles.heroChart} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(260, 420)} alt="" className={styles.heroPhone} />
          </div>
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <section className={styles.reviews}>
        <div className={`container ${styles.reviewsInner}`}>
          <div className={styles.ratingCard}>
            <span className={styles.tvMarkSm}>TradingView</span>
            <div className={styles.ratingRow}>
              <span className={styles.ratingLabel}>Above Average</span>
              <Stars value={4} />
              <span className={styles.ratingBadge}>BEST RATE</span>
            </div>
            <p className={styles.ratingSub}>Based on 473 reviews</p>
          </div>

          <div className={styles.reviewCard}>
            <div className={styles.ratingRow}>
              <span className={styles.ratingLabel}>Above Average</span>
              <Stars value={4} />
            </div>
            <p className={styles.ratingSub}>Based on 473 reviews</p>
            <div className={styles.reviewQuote}>
              <Stars value={5} small />
              <p className={styles.reviewText}>
                ใช้งานง่าย customer service ตอบไว ประทับใจมากครับ แนะนำเลย
              </p>
              <p className={styles.reviewAuthor}>by GiamBowri · 2 months ago</p>
            </div>
            <button type="button" className={styles.reviewArrow} aria-label="Next review">
              <Icon icon={ArrowRight} size="sm" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== TRADE ON CHART (HERO BAND) ===================== */}
      <section className={styles.tradeBand}>
        <div className="container">
          <p className={styles.eyebrow}>การซื้อขายในกราฟทำได้ง่ายขึ้น</p>
          <h2 className={styles.bigHeading}>Trade on Chart</h2>
          <div className={styles.laptopWrap}>
            <span className={styles.lockup}>
              <img src={LIB_LOGO} alt="Liberator" className={styles.lockupLogo} />
              <span className={styles.lockupX}>×</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TV_LOGO} alt="TradingView" className={styles.tvLogo} />
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(960, 600)} alt="" className={styles.laptop} />
            <div className={styles.laptopCtas}>
              <a href="#open" className={styles.btnPrimary}>
                เปิดบัญชีกับ Liberator
              </a>
              <a href="#about" className={styles.btnGhost}>
                เทรดผ่าน TradingView
              </a>
            </div>
          </div>
          <p className={styles.bandCaption}>
            สัมผัสกราฟ TradingView คุณภาพระดับโลก พร้อมส่งคำสั่งซื้อ-ขายผ่านบัญชี Liberator
            ได้ในที่เดียว ฟรี ไม่มีค่าใช้จ่าย เพื่อนนักลงทุนต้องลอง
          </p>
        </div>
      </section>

      {/* ===================== ABOUT LIBERATOR ===================== */}
      <section id="about" className={styles.about}>
        <div className={`container ${styles.aboutInner}`}>
          <h2 className={styles.sectionHeading}>รู้จักกับ Liberator</h2>
          <div className={styles.aboutBody}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(360, 460)} alt="" className={styles.aboutPhone} />
            <div className={styles.aboutText}>
              <p>
                Liberator (ลิเบอเรเทอร์) คือบริษัทหลักทรัพย์ที่ก่อตั้งขึ้นภายใต้แนวคิด
                การปลดปล่อย (Free) ให้ทุกคนเข้าถึงการลงทุนได้อย่างเท่าเทียม
                ด้วยค่าธรรมเนียมที่เป็นธรรม และเทคโนโลยีที่ทันสมัย
                ช่วยให้การลงทุนเป็นเรื่องง่ายสำหรับทุกคน
              </p>
              <p>
                เป้าหมายของเราคือการสร้างสังคมการลงทุนที่เปิดกว้าง โปร่งใส
                และเข้าถึงได้จริง ผ่านแพลตฟอร์มที่ใช้งานง่าย พร้อมบริการที่ครบครัน
                เพื่อให้นักลงทุนทุกระดับเติบโตไปด้วยกัน
              </p>
              <a href="https://www.liberator.co.th" className={styles.btnPrimary}>
                Go to Liberator.co.th
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== REASONS / FEATURES ===================== */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={`${styles.sectionHeading} ${styles.center}`}>
            เหตุผลที่ควรใช้{" "}
            <span className={styles.inlineLockup}>
              <img src={LIB_LOGO} alt="Liberator" className={styles.inlineLogo} />
              <span className={styles.lockupX}>×</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TV_LOGO} alt="TradingView" className={styles.tvLogo} />
            </span>
          </h2>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <Icon icon={f.icon} size={32} />
                </span>
                <h3 className={styles.featureItemTitle}>{f.title}</h3>
                <p className={styles.featureItemBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3 STEPS ===================== */}
      <section id="steps" className={styles.steps}>
        <div className="container">
          <h2 className={`${styles.sectionHeading} ${styles.center}`}>
            <span className={styles.stepsBadge}>3 STEP</span> สั้นๆ เริ่มต้นใช้งานได้ทันที
          </h2>

          <div className={styles.tutorialCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(220, 220)} alt="" className={styles.tutorialIcon} />
            <div className={styles.tutorialBody}>
              <span className={styles.lockup}>
                <img src={LIB_LOGO} alt="Liberator" className={styles.lockupLogo} />
                <span className={styles.lockupX}>×</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={TV_LOGO} alt="TradingView" className={styles.tvLogo} />
              </span>
              <h3 className={styles.tutorialTitle}>
                วิธีการเชื่อมต่อบัญชี Liberator กับ TradingView
              </h3>
              <p className={styles.tutorialSub}>
                See how to connect your Liberator account to TradingView
              </p>
              <a href="#" className={styles.btnWatch}>
                <Icon icon={Play} size="sm" />
                WATCH TUTORIAL
              </a>
            </div>
          </div>

          <ol className={styles.stepGrid}>
            {STEPS.map((s, i) => (
              <li key={s.title} className={styles.stepItem}>
                <span className={styles.stepNum}>{i + 1}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
                <a href="#open" className={styles.btnPrimarySm}>
                  {s.cta}
                </a>
                <p className={styles.stepNote}>{s.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===================== LAPTOP SHOWCASE ===================== */}
      <section className={styles.showcase}>
        <div className="container">
          <span className={`${styles.lockup} ${styles.lockupCenter}`}>
            <img src={LIB_LOGO} alt="Liberator" className={styles.lockupLogo} />
            <span className={styles.lockupX}>×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={TV_LOGO} alt="TradingView" className={styles.tvLogo} />
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ph(1000, 600)} alt="" className={styles.showcaseLaptop} />
          <CarouselDots count={6} />
        </div>
      </section>

      {/* ===================== FEATURE TABS ===================== */}
      <section className={styles.featureTabsSection}>
        <div className="container">
          <FeatureTabs panels={FEATURE_PANELS} />
        </div>
      </section>

      {/* ===================== COMMISSION ===================== */}
      <section className={styles.commission}>
        <div className="container">
          <h2 className={`${styles.sectionHeading} ${styles.center}`}>
            คิดค่าคอมฯ ตามจริง ยิ่งเทรด ยิ่งถูก
          </h2>
          <p className={`${styles.sectionLead} ${styles.center}`}>
            พบกับประสบการณ์การเทรดในรูปแบบใหม่ได้แล้ววันนี้ ด้วยสิทธิประโยชน์จากการประหยัดค่าคอม
            เพื่อผลตอบแทนที่มากขึ้นในระยะยาว รวมถึงโอกาสในการร่วมกิจกรรมนักลงทุน
            และเข้าถึงแพลตฟอร์มการเรียนรู้จาก Liberator เสริมกับเครื่องมือที่ครบถ้วนจาก TradingView นี้
          </p>
          <CommissionTabs />
        </div>
      </section>

      {/* ===================== PROMO BANNER ===================== */}
      <section id="open" className={styles.promo}>
        <div className="container">
          <div className={styles.promoCtaWrap}>
            <a href="#" className={styles.btnPrimary}>
              เปิดบัญชีกับ Liberator
            </a>
          </div>
          <div className={styles.promoBanner}>
            <p className={styles.promoTitle}>
              <span className={styles.promoBig}>พิเศษ</span> ค่าคอมฯ
              <br />
              ฟรีทุกเดือน
            </p>
            <div className={styles.promoCols}>
              <div className={styles.promoCol}>
                <p className={styles.promoColTop}>มูลค่า</p>
                <p className={styles.promoColBig}>฿100,000</p>
                <p className={styles.promoColSub}>/ ครั้ง</p>
              </div>
              <div className={styles.promoCol}>
                <p className={styles.promoColTop}>ฟรี</p>
                <p className={styles.promoColBig}>1 เดือน</p>
                <p className={styles.promoColSub}>/ บัญชี</p>
              </div>
              <div className={styles.promoCol}>
                <p className={styles.promoColTop}>สูงสุด</p>
                <p className={styles.promoColBig}>1,000 USD</p>
                <p className={styles.promoColSub}>/ บัญชี</p>
              </div>
            </div>
          </div>
          <p className={styles.promoNote}>
            *โปรโมชั่นค่าคอมฯ ฟรีสำหรับลูกค้าเปิดบัญชี (TFEX) เป็นไปตามเงื่อนไขของบริษัทฯ
            *ภายใต้การกำกับของสำนักงาน ก.ล.ต. และตลาดหลักทรัพย์แห่งประเทศไทย
          </p>
        </div>
      </section>

      {/* ===================== TUTORIAL BANNER ===================== */}
      <section className={styles.studyBand}>
        <div className="container">
          <div className={styles.studyCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(1280, 420)} alt="" className={styles.studyBg} />
            <div className={styles.studyContent}>
              <h2 className={styles.studyTitle}>
                ศึกษาวิธีใช้งาน
                <br />
                และเทคนิคพิเศษ
              </h2>
              <p className={styles.studyText}>
                เรียนรู้วิธีใช้งานตั้งแต่พื้นฐาน พร้อมเทคนิคต่างๆ เพิ่มความสะดวกในการเทรด
                และค้นพบโอกาสในการลงทุน อย่างไม่มีขีดจำกัดกับ Liberator x TradingView
              </p>
              <a href="#" className={styles.btnPrimary}>
                อ่านรายละเอียด <Icon icon={ArrowUpRight} size="sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className={styles.faq}>
        <div className="container">
          <h2 className={styles.sectionHeading}>Frequently asked questions</h2>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ===================== DESKTOP & MOBILE ===================== */}
      <section className={styles.apps}>
        <div className="container">
          <div className={styles.appsCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph(520, 420)} alt="" className={styles.appsImg} />
            <div className={styles.appsBody}>
              <h2 className={styles.appsTitle}>TradingView on desktop and mobile</h2>
              <p className={styles.appsLead}>
                Enhance your experience with the powerful desktop terminal or trade on the go
                in the mobile app.
              </p>
              <p className={styles.appsSubhead}>Desktop app features:</p>
              <ul className={styles.appsList}>
                <li>100% synchronization with the browser version.</li>
                <li>Configure your charts across multiple displays.</li>
                <li>Expanded workspace size for better analysis.</li>
                <li>Link several tabs with the same symbols.</li>
              </ul>
              <div className={styles.storeBadges}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ph(140, 44)} alt="Download for Windows" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ph(140, 44)} alt="Download on the App Store" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ph(140, 44)} alt="Get it on Google Play" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LIB_LOGO} alt="Liberator" className={styles.footerLogo} />
          <div className={styles.footerSocials}>
            {SOCIALS.map((name) => (
              <a key={name} href="#" className={styles.footerSocial} aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
          <p className={styles.footerCopy}>© 2026 Liberator Securities. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
        <BackToTop />
      </footer>
    </div>
  );
}

/* Inline star row — small enough to keep in the page module. */
function Stars({ value, small }: { value: number; small?: boolean }) {
  return (
    <span className={`${styles.stars} ${small ? styles.starsSm : ""}`} aria-label={`${value} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          icon={Star}
          size={small ? "sm" : 18}
          className={i < value ? styles.starFilled : styles.starEmpty}
        />
      ))}
    </span>
  );
}

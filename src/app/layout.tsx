import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { themeInitScript } from "@/theme/theme-script";

/**
 * DM Sans — our free Google Fonts substitute for TradingView's
 * proprietary "Euclid Circular". See docs/typography.md for rationale.
 * Exposed as the CSS variable --font-dm-sans, consumed by --font-sans /
 * --font-display in tokens.css.
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TradingView Brokers — Replica",
  description:
    "A faithful replica of the TradingView brokers page, built with Next.js and an atomic design system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <body>
        {/* Sets data-theme before hydration to prevent a flash of the wrong theme */}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Hedvig_Letters_Serif, Inter, DM_Sans } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Serif heading font — maps to --font-heading CSS variable
const hedvig = Hedvig_Letters_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// UI / body font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Sans display font — DM Sans is a clean, modern alternative to General Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

import { LanguageProvider } from "@/components/providers/LanguageProvider";

export const metadata: Metadata = {
  title: "Sawsan Madi Clinic | Botox & Filler, Laser",
  description:
    "Advanced dermatology and aesthetic treatments for clear, healthy skin. Book a consultation with Sawsan Madi Clinic's board-certified skin specialists today.",
  openGraph: {
    type: "website",
    title: "Sawsan Madi Clinic | Botox & Filler, Laser",
    description:
      "Advanced dermatology and aesthetic treatments for clear, healthy skin.",
    images: [
      {
        url: "https://framerusercontent.com/images/Ugj6CbwcOMpxj5xoZcAodkIig.jpg",
        width: 1200,
        height: 630,
        alt: "Sawsan Madi Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sawsan Madi Clinic | Botox & Filler, Laser",
    description:
      "Advanced dermatology and aesthetic treatments for clear, healthy skin.",
    images: ["https://framerusercontent.com/images/Ugj6CbwcOMpxj5xoZcAodkIig.jpg"],
  },
  icons: {
    icon: "https://framerusercontent.com/images/3grSOmlGCGLSx5bDg7buVge4c.png",
    apple: "https://framerusercontent.com/images/otmCRs360ZaE1bs3A5FLXBcM76o.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${hedvig.variable} ${inter.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <LanguageProvider locale={locale as "en" | "ar"}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Conscious Health — Physician-Guided Peptide Wellness",
  description:
    "Comprehensive peptide therapy protocols supervised by board-certified physicians. Personalized wellness plans for recovery, vitality, skin health, and metabolic optimization.",
  keywords: [
    "peptide therapy",
    "telehealth",
    "BPC-157",
    "GLP-1",
    "wellness",
    "physician supervised",
    "personalized medicine",
  ],
  openGraph: {
    title: "Conscious Health — Physician-Guided Peptide Wellness",
    description:
      "Comprehensive peptide therapy protocols supervised by board-certified physicians.",
    type: "website",
    url: "https://conscious.health",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

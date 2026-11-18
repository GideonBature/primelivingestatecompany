import type { Metadata, Viewport } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import { asset, company } from "@/lib/site";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz"] });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["300", "400", "500", "600", "700"] });

export const viewport: Viewport = { themeColor: "#ddc65c" };

export const metadata: Metadata = {
  title: `${company.name} | Real Estate Development & General Contracting, Kaduna`,
  description:
    "Prime Living Estate Limited — residential, commercial, institutional and industrial construction, construction management and design-build from Kaduna, Nigeria. Building today, securing tomorrow.",
  keywords: ["Prime Living Estate", "real estate company Kaduna", "construction company Kaduna", "general contractor Nigeria", "construction management", "design build Nigeria", "estate developers Kaduna"],
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "any" },
      { url: asset("/favicon.png"), type: "image/png" },
    ],
    apple: asset("/apple-touch-icon.png"),
  },
  openGraph: {
    title: company.name,
    description: "Building today, securing tomorrow — real estate development and general contracting from Kaduna, Nigeria.",
    type: "website",
    images: [asset("/og.png")],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

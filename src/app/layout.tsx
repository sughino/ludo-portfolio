import type { Metadata } from "next";
import "./globals.css";
import { cascadia, dirtyline, montserrat } from "../fonts/font";
import SmoothScroll from "../contexts/ScrollSmoth";
import { DeviceProvider } from '@/contexts/DeviceContext'
import CursorInit from "@/utils/customCursor/initCursor";
import PrintCVInterceptor from "@/utils/printInterceptor";
import Konami from "@/utils/konami";
import TitleHandler from "@/utils/titleHandler";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Ludo – Web Developer & UX-Focused Portfolio",
  description:
    "Web developer focused on design and user experience. I build fast, modern, and visually engaging digital products.",
  keywords: [
    "web developer",
    "frontend developer",
    "portfolio",
    "ux design",
    "ui design",
    "next.js developer",
  ],

  openGraph: {
    title: "Ludo – Web Developer Portfolio",
    description:
      "Modern, high-performance digital experiences with strong focus on design and UX.",
    url: "https://www.ludo-portfolio.com",
    siteName: "Ludo Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.ludo-portfolio.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Ludo Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ludo – Web Developer Portfolio",
    description:
      "Modern, high-performance digital experiences with strong focus on design and UX.",
    images: ["https://www.ludo-portfolio.com/logo.webp"],
  },
};

//TODO animazione delle line
//TODO questo non è importantissimo ma sarebbe figo attaccare un iframe di figma
//TODO sarebbe figo mettere delle immagini per i key features

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dirtyline.variable} ${cascadia.variable} antialiased`}
      >
          <SmoothScroll>
            <DeviceProvider>
              <CursorInit />
              {children}
            </DeviceProvider>
          </SmoothScroll>
          <PrintCVInterceptor/>
          <Konami />
          <TitleHandler />

          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { cascadia, dirtyline, montserrat } from "../fonts/font";
import SmoothScroll from "../contexts/ScrollSmoth";
import { DeviceProvider } from '@/contexts/DeviceContext'
import CursorInit from "@/utils/customCursor/initCursor";
import PrintCVInterceptor from "@/utils/printCV/interceptor";

export const metadata: Metadata = {
  title: "Ludo – Web Developer & UX-Focused Portfolio",
  description: "Web developer focused on design and user experience. I build fast, modern, and visually engaging digital products.",
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
    description: "Modern, high-performance digital experiences with strong focus on design and UX.",
    url: "https://tuosito.com",
    siteName: "Ludo Portfolio",
    type: "website",
  },
};

//TODO cose importanti prima di martedì:
//TODO almeno la descrizione per la seo
//TODO goback per i device
//TODO animazione delle line
//TODO fixxa il flick dell'animazione quando torni indietro da una pagina progetto
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
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { League_Spartan, Space_Mono, Sedgwick_Ave_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const spriteGraffitiFallback = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ferpa Tech Day",
  description: "Evento de tecnologia para jovens em Fernandópolis",
  metadataBase: new URL("https://codingferpa.org"),
  openGraph: {
    title: "Ferpa Tech Day",
    description: "Evento de tecnologia para jovens em Fernandópolis",
    url: "https://codingferpa.org",
    siteName: "Ferpa Tech Day",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/logo-fundo-roxo.png",
        width: 1200,
        height: 630,
        alt: "Ferpa Tech Day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferpa Tech Day",
    description: "Evento de tecnologia para jovens em Fernandópolis",
    images: ["/assets/logo-fundo-roxo.png"],
  },
  icons: {
    icon: [{ url: "/assets/icone-insta.png", sizes: "16x16", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${leagueSpartan.variable} ${spaceMono.variable} ${spriteGraffitiFallback.variable} ${leagueSpartan.className} flex flex-col min-h-screen font-body`}
      >
        <Header />
        <main className="flex-grow pt-[var(--header-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

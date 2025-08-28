import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "🌵 Cactus Mentor - IA & Organisation pour Avocats",
  description: "Optimisez votre temps et vos méthodes de travail grâce à l'intelligence artificielle. Formation spécialisée pour cabinets d'avocats avec Cactus Mentor.",
  keywords: "IA, avocats, formation, automatisation, NotebookLM, productivité juridique, cactus mentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

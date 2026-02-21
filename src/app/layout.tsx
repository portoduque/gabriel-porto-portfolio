import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageProvider } from "@/lib/i18n";

import { LanguageToggle } from "@/components/LanguageToggle";



const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gabriel Porto | Full Stack Developer & Cybersecurity Specialist",
  description:
    "Portfolio of Gabriel Porto Duque Estrada Fiorante — IT Professional experienced in infrastructure, web development, cybersecurity, and process automation.",
  keywords: ["Gabriel Porto", "Portfolio", "Full Stack Developer", "Infrastructure", "Cybersecurity", "RPA", "Python", "PHP"],
  authors: [{ name: "Gabriel Porto" }],
  openGraph: {
    title: "Gabriel Porto | Full Stack Developer",
    description: "Interactive portfolio of Gabriel Porto — Software Developer and Infrastructure Specialist.",
    url: "https://gabrielporto.com.br",
    siteName: "Gabriel Porto Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Porto | Portfolio",
    description: "Full portfolio with innovative projects by Gabriel Porto.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Gabriel Porto | Full Stack & Infra</title>
        <meta name="description" content="Portfólio de Gabriel Porto Duque Estrada Fiorante — Profissional de TI com experiência em infraestrutura, desenvolvimento web, segurança cibernética e automação de processos." />
        <meta property="og:title" content="Gabriel Porto | Full Stack & Infra" />
        <meta property="og:description" content="Portfólio de Gabriel Porto Duque Estrada Fiorante" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        aria-label="portfolio body"
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            {/* Fixed position controls for easy access */}
            <div className="fixed top-3 right-3 md:top-4 md:right-4 z-50 flex flex-row items-center gap-2 md:gap-4 drop-shadow-lg">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

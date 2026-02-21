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
  title: "Gabriel Porto Duque Estrada Fiorante | Desenvolvedor Full Stack & Cyber Sec",
  description:
    "Portfólio de Gabriel Porto Duque Estrada Fiorante — Profissional de TI com experiência em infraestrutura, desenvolvimento web, segurança cibernética e automação de processos. Conheça meus projetos.",
  keywords: ["Gabriel Porto", "Portfólio", "Desenvolvedor", "Infraestrutura", "Cyber Security", "Full Stack"],
  authors: [{ name: "Gabriel Porto" }],
  openGraph: {
    title: "Gabriel Porto Duque Estrada Fiorante | Desenvolvedor Full Stack",
    description: "Portfólio interativo de Gabriel Porto — Desenvolvedor de Software e Especialista em Infraestrutura.",
    url: "https://gabrielporto.com.br",
    siteName: "Gabriel Porto Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Porto | Portfólio",
    description: "Portfólio completo com projetos inovadores de Gabriel Porto.",
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
            <div className="fixed bottom-10 right-4 md:top-4 md:bottom-auto md:right-4 z-50 flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-4 drop-shadow-lg">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

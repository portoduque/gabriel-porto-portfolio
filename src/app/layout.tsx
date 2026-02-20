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
  title: "Gabriel Porto Duque Estrada Fiorante | Analista e Desenvolvedor de Sistemas",
  description:
    "Portfólio de Gabriel Porto Duque Estrada Fiorante — Profissional de TI com experiência em infraestrutura, desenvolvimento web, segurança cibernética e automação de processos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
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
            <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

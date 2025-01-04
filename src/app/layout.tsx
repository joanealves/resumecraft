import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import clsx from "clsx";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";

// Configuração das fontes
const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

// Metadata do documento
export const metadata: Metadata = {
  title: "Resume Craft Schema",
  description: "Generated resume craft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx(
          "min-h-screen bg-background fontSans antialiased",
          fontTitle.variable,
          fontSans.variable,
          "font-sans"
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
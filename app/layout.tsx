import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { AlertBanner } from "@/components/alert-banner";
import { PresaleProvider } from "@/providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCCash Network - AI-Powered Trading Platform",
  description:
    "Join presale & get profit from Trading Pool in USDT every month.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>

      <PresaleProvider>
          <Navbar />
          {children}
          <AlertBanner />

      </PresaleProvider>
        </body>
    </html>
  );
}

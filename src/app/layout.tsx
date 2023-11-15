import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/navbar/main-nav";
import Providers from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Physics Suit - SUST",
  description: "Physics Suit - SUST",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}

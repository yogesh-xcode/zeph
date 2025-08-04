import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Logirent } from "./fonts/logirent";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeph",
  description:
    "Zeph is tha interface to chat with documents also share a space with your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, Logirent.variable, "light")}>
      <body className={cn("min-h-screen font-sans antialiased grainy")}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

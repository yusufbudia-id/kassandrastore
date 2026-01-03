import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const WHATSAPP_NUMBER = '6285774491378';

export const metadata: Metadata = {
  title: "KassandraStore - Fashion Store Indonesia",
  description: "Brand fashion lokal dengan kualitas premium dan harga terjangkau. Siap melayani pengiriman ke seluruh Indonesia.",
  keywords: ["KassandraStore", "Fashion", "Baju", "Pakaian", "Indonesia", "Toko Online", "UMKM"],
  authors: [{ name: "KassandraStore" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "KassandraStore - Fashion Store Indonesia",
    description: "Brand fashion lokal dengan kualitas premium dan harga terjangkau",
    url: "https://kassandrastore.id",
    siteName: "KassandraStore",
    type: "website",
    images: [{
      url: "/logo.png",
      width: 200,
      height: 200,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KassandraStore - Fashion Store Indonesia",
    description: "Brand fashion lokal dengan kualitas premium",
    images: ["/logo.png"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fursphere",
  description: "fursphere - The ultimate pet platform",
  icons: {
    icon: "/icon.png", // 你的 Favicon 图标路径
    shortcut: "/icon.png",
    apple: "/icon.png", // 适用于 iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

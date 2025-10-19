import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RedVault - Secure Cloud Storage Platform",
  description: "Enterprise-grade cloud storage with end-to-end encryption. Store, manage, and share your files securely.",
  keywords: ["cloud storage", "secure storage", "file hosting", "encrypted storage"],
  authors: [{ name: "RedVault" }],
  openGraph: {
    title: "RedVault - Secure Cloud Storage Platform",
    description: "Enterprise-grade cloud storage with end-to-end encryption.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

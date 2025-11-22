import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { WalletProvider } from "@/components/wallet-provider";
import { FarcasterProvider } from "@/components/farcaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campaign Catalyst - Web3 Marketing Platform",
  description:
    "AI-powered Web3 marketing campaigns with verified KOL matching using Vlayer ZK technology",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "shines-buenos-aires-web.vercel.app/og-image.png",
    "fc:frame:button:1": "Launch Campaign",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target":
      "https://shines-buenos-aires-web.vercel.app/project",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar is included on all pages */}
        <div className="relative flex min-h-screen flex-col">
          <FarcasterProvider>
            <WalletProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
            </WalletProvider>
          </FarcasterProvider>
        </div>
      </body>
    </html>
  );
}

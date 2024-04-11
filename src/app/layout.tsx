import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seoMetadata } from "@/utils/seo";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = seoMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

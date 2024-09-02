import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Saira_Semi_Condensed } from "next/font/google";
import { sairaSemiCondensedFont } from "@/font/font";

export const metadata: Metadata = {
  title: "dollseok's Portfolio",
  description: "프론트엔드 개발자 이은석의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sairaSemiCondensedFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

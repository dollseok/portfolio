import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { sairaSemiCondensedFont } from "@/font/font";
import ScrollProgressBar from "@/components/home/ScrollProgressBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://dollseok-lab.vercel.app/"),
  title: "dollseok's Portfolio | Frontend Developer",
  description: "프론트엔드 개발자 이은석의 포트폴리오. 궁금하시죠?",
  keywords:
    "프론트엔드 포트폴리오,frontend developer, dollseok lab, 개발자 포트폴리오, 프론트엔드 개발자 포트폴리오",
  robots: "index, follow",
  openGraph: {
    title: "dollseok's Portfolio | Frontend Developer",
    description: "이은석의 프론트엔드 개발자 포트폴리오. 궁금하시죠?",
    url: "https://dollseok-lab.vercel.app/",
    images: "/image/main/opengraph-image.png",
    siteName: "dollseok lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={sairaSemiCondensedFont.className}>
        <Navbar />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}

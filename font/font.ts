import localFont from "next/font/local";
import { Saira_Semi_Condensed } from "next/font/google";

export const sairaSemiCondensedFont = Saira_Semi_Condensed({
  subsets: ["latin"],
  weight: ["400"],
});

export const lanaPixelFont = localFont({
  src: "./LanaPixel.ttf",
});

export const pretendardFont = localFont({
  src: "./Pretendard-Light.ttf",
});

export const pretendardBoldFont = localFont({
  src: "./Pretendard-SemiBold.ttf",
});

"use client";

import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import { lanaPixelFont } from "@/font/font";
import { useEffect } from "react";

export default function MainSection() {
  const homeImage = "/image/main/main.png";

  const updateScroll = () => {
    const scrollY = window.scrollY;

    const greetingTextElement = document.querySelector(
      `.${styles.greetingText}`
    ) as HTMLElement;

    const workTextElement = document.querySelector(
      `.${styles.workText}`
    ) as HTMLElement;

    const gradiationElement = document.querySelector(
      `.${styles.gradationBox}`
    ) as HTMLElement;

    // workText는 스크롤 속도를 빠르게 설정
    if (workTextElement) {
      workTextElement.style.transform = `translate(0, -${scrollY * 1.5}px)`;
    }
    if (gradiationElement) {
      gradiationElement.style.transform = `translate(0,-${scrollY * 1.1}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className={styles.page_section}>
      <div className={styles.imageContainer}>
        <Image
          src={homeImage}
          priority={true}
          className={styles.imageHomeCover}
          width={1482}
          height={1000}
          alt="dd"
        />
      </div>
      <div className={`${lanaPixelFont.className} ${styles.greetingText}`}>
        안녕하세요. <br />
        Frontend Developer 이은석입니다.
        <div>WELCOME TO MY PORTFOLIO</div>
      </div>
      <div className={`${lanaPixelFont.className} ${styles.workText}`}>
        <span>WEB DEVELOMENT</span>
        <span>FRONTEND</span>
        <span>UXUI DESIGN</span>
      </div>
      <div className={styles.gradationBox}></div>
    </div>
  );
}

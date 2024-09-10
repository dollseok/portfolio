"use client";

import styles from "../styles/Home.module.scss";
import MainSection from "@/components/home/MainSection";
import IntroduceSection from "@/components/home/IntroduceSection";
import RecordSection from "@/components/home/RecordSection";
import PageMoveSection from "@/components/home/PageMoveSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // 최초 로딩 때 로딩
    handleResize();

    // 이벤트 리스너
    window.addEventListener("resize", handleResize);
    // 이벤트 리스너 삭제
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className={styles.mobile_ready}>
          <div>모바일 화면은 아직 준비중입니다.</div>
          <div>웹 화면으로 봐주세요.</div>
        </div>
      ) : (
        <div className={styles.snap_div}>
          {/* 메인 */}
          <MainSection />

          {/* 스크롤 소개 */}
          <IntroduceSection />
          {/* 개발자 활동 */}
          <RecordSection />

          {/* 페이지 이동 */}
          <PageMoveSection />
          <ContactSection />
        </div>
      )}
    </div>
  );
}

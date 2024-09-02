import styles from "../styles/Home.module.scss";
import MainSection from "@/components/home/MainSection";
import IntroduceSection from "@/components/home/IntroduceSection";
import RecordSection from "@/components/home/RecordSection";
import PageMoveSection from "@/components/home/PageMoveSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}

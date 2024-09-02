"use client";

import { pretendardFont } from "@/font/font";
import styles from "../../styles/Home.module.scss";

export default function RecordSection() {
  return (
    <section className={styles.page_section}>
      <div className={styles.developSection}>
        <div className={styles.developContentBox}>
          <h1>GRADUATION</h1>
          <p className={styles.mainContent}>CHUNGANG UNIVERSITY</p>
          <p>2013.03~2021.08</p>
        </div>

        <div className={styles.developContentBox}>
          <h1>EDUCATION</h1>
          <p className={styles.mainContent}>
            SSAFY
            <span className={pretendardFont.className}>
              (삼성 청년 소프트웨어 아카데미)
            </span>
          </p>
          <p>2023.01~2023.12</p>
        </div>

        <div className={styles.developContentBox}>
          <h1>CERTIFICATE</h1>
          <div className={styles.developContent}>
            <p className={`${pretendardFont.className} ${styles.mainContent}`}>
              정보처리기사
            </p>
            <p>2024.06.15</p>
          </div>
          <div className={styles.developContent}>
            <p className={styles.mainContent}>SQLD</p>
            <p>2024.06.18</p>
          </div>
        </div>
      </div>
    </section>
  );
}

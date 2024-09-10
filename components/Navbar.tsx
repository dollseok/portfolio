"use client";
// components/Navbar.js
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useEffect, useState } from "react";

export default function Navbar() {
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
    <div className={`${styles.navbar}`}>
      {isMobile ? (
        <ul className={styles.mobileNavList}>
          <li className={styles.navItem}>
            <Link href="/">DOLLSEOK LAB</Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/portfolio-develop">WEB PORTFOLIO</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">DOLLSEOK LAB</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">MODELISM93@NAVER.COM</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

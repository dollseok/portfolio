"use client";
// components/Navbar.js
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
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
    </div>
  );
}

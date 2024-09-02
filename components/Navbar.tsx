"use client";
// components/Navbar.js
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useEffect } from "react";

export default function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">WEB PORTFOLIO</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">DOLLSEOK LAB</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/project-detail">MODELISM93@NAVER.COM</Link>
        </li>
      </ul>
    </div>
  );
}

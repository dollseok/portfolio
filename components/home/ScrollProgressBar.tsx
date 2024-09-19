"use client";

import { ScrollbarAnimation } from "@/animation/Scrollbar";
import styles from "../../styles/scrollbar.module.scss";
import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);
  const box10 = useRef(null);
  const box11 = useRef(null);
  const box12 = useRef(null);
  const box13 = useRef(null);

  useEffect(() => {
    if (
      box1.current &&
      box2.current &&
      box3.current &&
      box4.current &&
      box5.current &&
      box6.current &&
      box7.current &&
      box8.current &&
      box9.current &&
      box10.current &&
      box11.current &&
      box12.current &&
      box13.current
    ) {
      const animation = new ScrollbarAnimation(
        box1.current,
        box2.current,
        box3.current,
        box4.current,
        box5.current,
        box6.current,
        box7.current,
        box8.current,
        box9.current,
        box10.current,
        box11.current,
        box12.current,
        box13.current
      );

      animation.init();
      window.addEventListener("scroll", () => {
        animation.animate();
      });
      window.addEventListener("resize", () => {
        animation.init();
      });
    }
  }, []);

  return (
    <section className={styles.scrollbarSection}>
      <div className={styles.scrollbarTitle}>Scroll Bar</div>
      {/* 네모 10개 퍼센테이지 단위로 각 칸을 색칠 */}
      <div className={styles.scrollbar}>
        <div className={styles.scrollbarSquare} ref={box1}></div>
        <div className={styles.scrollbarSquare} ref={box2}></div>
        <div className={styles.scrollbarSquare} ref={box3}></div>
        <div className={styles.scrollbarSquare} ref={box4}></div>
        <div className={styles.scrollbarSquare} ref={box5}></div>
        <div className={styles.scrollbarSquare} ref={box6}></div>
        <div className={styles.scrollbarSquare} ref={box7}></div>
        <div className={styles.scrollbarSquare} ref={box8}></div>
        <div className={styles.scrollbarSquare} ref={box9}></div>
        <div className={styles.scrollbarSquare} ref={box10}></div>
        <div className={styles.scrollbarSquare} ref={box11}></div>
        <div className={styles.scrollbarSquare} ref={box12}></div>
        <div className={styles.scrollbarSquare} ref={box13}></div>
      </div>
    </section>
  );
}

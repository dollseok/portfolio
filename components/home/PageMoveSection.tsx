"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { PageMoveSectionAnimation } from "@/animation/PageMoveSection";
import { useEffect, useRef, useState } from "react";

export default function PageMoveSection() {
  const modelImage = "/image/main/model2.jpg";
  const characterImage = "/image/main/character.png";
  const developImage = "/image/main/main.png";

  const [buttonHover, setButtonHover] = useState<boolean[]>([false, false]);

  const handleMouseOver = (idx: number) => {
    console.log(idx);
    setButtonHover((prevState) => {
      const newHoverState = [...prevState];
      newHoverState[idx] = !newHoverState[idx];
      return newHoverState;
    });
  };

  const wrapper = useRef(null);
  const left = useRef(null);
  const right = useRef(null);

  useEffect(() => {
    if (wrapper.current && left.current && right.current) {
      const PageMoveAni = new PageMoveSectionAnimation(
        wrapper.current,
        left.current,
        right.current
      );

      PageMoveAni.init();
      window.addEventListener("scroll", () => {
        PageMoveAni.animate();
      });
      window.addEventListener("resize", () => {
        PageMoveAni.init();
      });
    }
  }, []);

  return (
    <section className={styles.page_section} ref={wrapper}>
      <div className={`${styles.sticky} ${styles.portfolioContainer}`}>
        <div className={styles.portfolioCenterBox}>
          <Image
            src={characterImage}
            fill
            style={{ objectFit: "cover" }}
            alt=""
          ></Image>
        </div>
        <div className={styles.portfolioSideBox} ref={left}>
          <Image
            src={modelImage}
            fill
            style={{ objectFit: "cover", opacity: buttonHover[0] ? 1 : 0.5 }}
            alt=""
            className={styles.portfolioBoxImage}
          ></Image>
          <h1
            onMouseEnter={() => {
              handleMouseOver(0);
            }}
            onMouseLeave={() => {
              handleMouseOver(0);
            }}
            className={styles.portfolioMoveButton}
          >
            <Link href={"/portfolio-model"}>MODEL PORTFOLIO</Link>
          </h1>
        </div>
        <div className={styles.portfolioSideBox} ref={right}>
          <Image
            src={developImage}
            fill
            style={{ objectFit: "cover", opacity: buttonHover[1] ? 1 : 0.5 }}
            alt=""
            className={styles.portfolioBoxImage}
          ></Image>
          <h1
            onMouseOver={() => {
              handleMouseOver(1);
            }}
            onMouseLeave={() => {
              handleMouseOver(1);
            }}
            className={styles.portfolioMoveButton}
          >
            <Link href={"/portfolio-develop"}>DEVELOP PORTFOLIO</Link>
          </h1>
        </div>
      </div>
    </section>
  );
}

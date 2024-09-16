"use client";

import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { useEffect, useRef } from "react";
import { IntroduceSectionAnimation } from "@/animation/IntroduceSection";
export default function IntroduceSection() {
  const mainContent1 = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const modelImage = useRef<HTMLDivElement[]>([]);
  const firstTextRef = useRef<HTMLElement>(null);
  const secondTextRef = useRef<HTMLElement>(null);
  const thirdTextRef = useRef<HTMLElement>(null);
  const highlightRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (
      mainContent1.current &&
      sticky.current &&
      firstTextRef.current &&
      secondTextRef.current &&
      thirdTextRef.current &&
      highlightRef.current
    ) {
      const IntroduceSectionAni = new IntroduceSectionAnimation(
        mainContent1.current,
        sticky.current,
        modelImage.current,
        firstTextRef.current,
        secondTextRef.current,
        thirdTextRef.current,
        highlightRef.current
      );
      IntroduceSectionAni.init();
      window.addEventListener("scroll", () => {
        IntroduceSectionAni.animate();
      });
      window.addEventListener("resize", () => {
        IntroduceSectionAni.init();
      });
    }
  }, []);

  return (
    <section className={`${styles.page_section} `} ref={mainContent1}>
      <div className={` ${styles.sticky}`} ref={sticky}>
        <div className={styles.introduce_content}>
          <span className={styles.introduce_text} ref={firstTextRef}>
            I WAS A FASHON MODEL.
          </span>
        </div>
        <div className={styles.introduce_content}>
          <span className={styles.introduce_text} ref={secondTextRef}>
            BUT NOW...
          </span>
        </div>
        <div className={styles.introduce_content}>
          <span className={styles.introduce_text} ref={thirdTextRef}>
            I AM A
            <span className={styles.developer_text} ref={highlightRef}>
              DEVELOPER
            </span>
            .
          </span>
        </div>
        <div className={styles.modelImageContainer}>
          <div
            className={styles.modelImageBox}
            ref={(elem) => {
              if (elem) {
                modelImage.current[0] = elem;
              }
            }}
          >
            <Image
              src={"/image/main/model1.jpg"}
              fill
              sizes="50vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt=""
            ></Image>
          </div>
          <div
            className={styles.modelImageBox}
            ref={(elem) => {
              if (elem) {
                modelImage.current[1] = elem;
              }
            }}
          >
            <Image
              src={"/image/main/model1.jpg"}
              fill
              sizes="50vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

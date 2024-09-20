"use client";

import { lanaPixelFont } from "@/font/font";
import styles from "../../styles/Home.module.scss";
import { useEffect, useRef } from "react";
import { ContactSectionAnimation } from "@/animation/ContactSection";

export default function ContactSection() {
  const wrapper = useRef(null);
  const contactBackground = useRef(null);
  useEffect(() => {
    if (contactBackground.current && wrapper.current) {
      const ContactSectionAni = new ContactSectionAnimation(
        wrapper.current,
        contactBackground.current
      );
      ContactSectionAni.init();

      window.addEventListener("scroll", () => {
        ContactSectionAni.animate();
      });
      window.addEventListener("resize", () => {
        ContactSectionAni.init();
      });
    }
  }, []);

  return (
    <section className={styles.page_section} ref={wrapper}>
      <div className={styles.gradientBackground} ref={contactBackground}></div>
      <p className={`${styles.contact_title} ${lanaPixelFont.className}`}>
        CONTACT ME TO CREATE <br />
        COOL THINGS TOGETHER
      </p>

      <p className={styles.contact_content}>modelism93@naver.com</p>
      <p className={styles.contact_content}>+82)10 7388 2408</p>
      <p className={styles.contact_content}>INSTAGRAM</p>
      <p className={styles.contact_content}>SEOUL,Republic of Korea</p>
    </section>
  );
}

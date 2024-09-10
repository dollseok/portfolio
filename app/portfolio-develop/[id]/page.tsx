"use client";

import { useParams, useRouter } from "next/navigation";
import mock from "../../../mock/develop.json";
import styles from "../../../styles/develop.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface dataType {
  id: number;
  title: string;
  logo: string;
  mainImage: string;
  summary: string;
  description: string;
  links: {
    id: number;
    name: string;
    link: string;
  }[];
  period: string;
  member: string;
  contribution: string;
  works: {
    id: number;
    content: string;
    detail: {
      id: number;
      content: string;
    }[];
  }[];
  skills: {
    id: number;
    name: string;
    reason: string;
  }[];
  demonImagesType: string;
  demonImages: {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

const projectData: dataType[] = mock as dataType[];

export default function Home() {
  const { id } = useParams(); // id 값을 가져옴
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const currentProjectData = projectData.find((p) => p.id === Number(id));
  const nextProjectData = projectData.find(
    (p) => p.id === (Number(id) + 1) % projectData.length
  );

  const threshold = 80;
  const [portfolioType, setPortfolioType] = useState<string>("");

  const handleScroll = () => {
    const target = wrapperRef.current?.scrollHeight ?? 0; // undefined인 경우 0 으로 설정
    const current = window.scrollY + window.innerHeight;
    // 3760 3856 96 / 7388 7484 96 / 4501, 4597 96
    // console.log(target, current);
    if (current - target >= threshold) {
      setTimeout(() => {
        router.push(`/portfolio-develop/${nextProjectData?.id}`);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (currentProjectData?.demonImagesType === "web") {
      setPortfolioType("web");
    }
    if (currentProjectData?.demonImagesType === "mobile") {
      setPortfolioType("mobile");
    }
  }, []);

  return (
    <div ref={wrapperRef}>
      <section className={styles.portfolioDetailSection}>
        <div className={styles.centerSection}>
          <div className={styles.textline}>
            <div className={styles.texthead}>Title</div>
            <div>{currentProjectData?.title}</div>
          </div>
          <div className={styles.textline}>
            <div className={styles.texthead}>Period</div>
            <div>{currentProjectData?.period}</div>
          </div>
          <div className={styles.textline}>
            <div className={styles.texthead}>Member</div>
            <div>{currentProjectData?.member}</div>
          </div>
          <div className={styles.textline}>
            <div className={styles.texthead}>Contribution</div>
            <div>{currentProjectData?.contribution}</div>
          </div>
          <div>{currentProjectData?.summary}</div>
          <div>{currentProjectData?.description}</div>
        </div>

        {/* 링크 파트 */}

        {/* 스킬 파트 */}
        <section className={styles.skillSection}>
          <div className={styles.texthead}>Skills</div>
          {currentProjectData?.skills.map((item, idx) => (
            <div key={idx} className={styles.worksBox}>
              <div className={styles.worksTitle}>{item.name}</div>
              <div>{item.reason}</div>
            </div>
          ))}
        </section>

        {/* 기여한 부분 파트 */}
        <section className={styles.worksSection}>
          <div className={styles.texthead}>My Part</div>
          {currentProjectData?.works.map((item, idx) => (
            <div key={idx} className={styles.worksBox}>
              <div className={styles.worksTitle}>{item.content}</div>
              {item.detail.map((detail, idx) => (
                <div key={idx} className={styles.worksContent}>
                  {detail.content}
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* 시연 이미지 파트 */}
        <section
          className={
            portfolioType === "web"
              ? styles.webImageSection
              : styles.mobileImageSection
          }
        >
          {currentProjectData?.demonImages.map((item, idx) => (
            <div key={idx} className={styles.imageBox}>
              <Image
                className={
                  portfolioType === "web"
                    ? styles.webImageItem
                    : styles.mobileImageItem
                }
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </section>
      </section>

      {/* next project 파트 */}
      <section className={styles.nextPageSection}>
        <div className={styles.sticky}>
          <div className={styles.nextPageContent}>
            <div>Next Project</div>
            <h1>{nextProjectData?.title}</h1>
            <div>Keep scrolling down</div>
          </div>
        </div>
        <div className={styles.nextPageImageBox}>
          <Image
            className={styles.nextPageImage}
            src={nextProjectData?.logo || ""}
            alt={nextProjectData?.title || ""}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          ></Image>
        </div>
      </section>
    </div>
  );
}

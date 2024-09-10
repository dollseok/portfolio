"use client";

import PortfolioBox from "../../components/developPortfolio/PortfolioBox";
import styles from "../../styles/develop.module.scss";
import mock from "../../mock/develop.json";
import { useState } from "react";
import { sairaSemiCondensedFont } from "@/font/font";
import { useRouter } from "next/router";

interface dataType {
  id: number;
  title: string;
  logo: string;
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
  demonImages: {
    id: number;
    src: string;
    alt: string;
  }[];
}
export default function Home() {
  const data = mock;

  return (
    <section className={styles.portfolioWrapper}>
      <div className={sairaSemiCondensedFont.className}>
        Recent Project ({data.length})
      </div>

      <div className={styles.cardWrapper}>
        {data.map((item, idx) => (
          <PortfolioBox
            key={idx}
            data={{
              id: item.id,
              title: item.title,
              period: item.preiod,
              role: "Frontend Developer / UXUI",
              image: item.logo,
            }}
          />
        ))}
      </div>
    </section>
  );
}

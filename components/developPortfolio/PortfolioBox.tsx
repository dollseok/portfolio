import Image from "next/image";
import React from "react";
import styles from "./develop.module.scss";
import { lanaPixelFont } from "@/font/font";
import Link from "next/link";

interface propsDataType {
  id: number;
  title: string;
  period: string;
  role: string;
  image: string;
}

export default function PortfolioBox({ data }: { data: propsDataType }) {
  // const router = useRouter();
  // const handleClick = () => {
  //   router.push(`/portfolio-develop/${data.id}`);
  // };

  return (
    <Link href={`/portfolio-develop/${data.id}`}>
      <section
        className={styles.wrapper}
        // onClick={() => {
        //   handleClick();
        // }}
      >
        <Image
          src={data.image}
          width={520}
          height={520}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className={styles.backgroundImage}
          alt=""
        ></Image>
        <div className={`${lanaPixelFont.className} ${styles.content}`}>
          <div>{data.title}</div>
          <div>{data.period}</div>
          <div>{data.role}</div>
        </div>
      </section>
    </Link>
  );
}

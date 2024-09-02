"use client";

import { useParams } from "next/navigation";

export default function Home() {
  const { id } = useParams(); // id 값을 가져옴

  return <div>{id}</div>;
}

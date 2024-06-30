import React from "react";
import Ranging from "./GoodItem/Ranging/Ranging";
import Default from "./GoodItem/Default/Default";

interface GoodItemProps {
  type: "default" | "ranging";
  title: string;
  imageSrc: string;
  subtitle: string;
  amount: number;
  rankingIndex?: number;
}

export default function GoodItem({
  type,
  amount,
  imageSrc,
  subtitle,
  title,
  rankingIndex,
}: Readonly<GoodItemProps>) {
  const itemProps = { amount, imageSrc, subtitle, title };

  if (type === "ranging" && !rankingIndex) {
    throw new Error("ranking을 표시하기 위해서는 rankingIndex가 필요합니다.");
  }
  return (
    <>
      {type === "default" && <Default {...itemProps} />}
      {type === "ranging" && <Ranging rankingIndex={12} {...itemProps} />}
    </>
  );
}

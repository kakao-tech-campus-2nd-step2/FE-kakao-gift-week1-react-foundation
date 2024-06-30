import React from "react";
import { css } from "@emotion/css";

interface GoodItemProps {
  title: string;
  imageSrc: string;
  subtitle: string;
  amount: number;
}

export default function Default({
  amount,
  imageSrc,
  subtitle,
  title,
}: Readonly<GoodItemProps>) {
  const cardStyle = css`
    width: 200px;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    background-color: white;
  `;

  const imageStyle = css`
    width: 100%;
    height: 150px;
    object-fit: cover;
  `;

  const textContainerStyle = css`
    padding-block: 0.75rem;
  `;

  const subtitleStyle = css`
    font-size: 1rem;
    font-weight: semi-bold;
  `;

  const titleStyle = css`
    font-size: 0.75rem;
    color: #666;
  `;

  const priceStyle = css`
    font-weight: bold;
  `;

  return (
    <div className={cardStyle}>
      <img src={imageSrc} alt={title} className={imageStyle} />
      <div className={textContainerStyle}>
        <p className={titleStyle}>{title}</p>
        <p className={subtitleStyle}>{subtitle}</p>
        <p className={priceStyle}>{amount}원</p>
      </div>
    </div>
  );
}

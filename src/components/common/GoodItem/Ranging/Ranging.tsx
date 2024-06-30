import { css } from "@emotion/css";
import React from "react";

interface RangingProps {
  title: string;
  imageSrc: string;
  subtitle: string;
  amount: number;
  rankingIndex: number;
}

export default function Ranging({
  title,
  imageSrc,
  subtitle,
  amount,
  rankingIndex,
}: Readonly<RangingProps>) {
  const cardStyle = css`
    width: 200px;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
    background-color: white;
  `;

  const badgeStyle = css`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: ${rankingIndex <= 3 ? "#FD7364" : "#BBBBBB"};
    color: white;
    width: 25px;
    height: 25px;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
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
      <div className={badgeStyle}>{rankingIndex}</div>
      <img src={imageSrc} alt={title} className={imageStyle} />
      <div className={textContainerStyle}>
        <p className={titleStyle}>{title}</p>
        <p className={subtitleStyle}>{subtitle}</p>
        <p className={priceStyle}>{amount}원</p>
      </div>
    </div>
  );
}

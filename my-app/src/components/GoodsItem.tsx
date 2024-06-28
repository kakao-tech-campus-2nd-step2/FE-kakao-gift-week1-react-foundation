/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
  rankingIndex?: number; // 여기 추가
}

const goodsItemStyles: SerializedStyles = css`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  margin: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const imageStyles: SerializedStyles = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const titleStyles: SerializedStyles = css`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

const subtitleStyles: SerializedStyles = css`
  font-size: 14px;
  color: #888;
  margin: 4px 0;
`;

const amountStyles: SerializedStyles = css`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 8px 0;
`;

const rankingBadgeStyles = (rankingIndex: number): SerializedStyles => css`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${rankingIndex <= 3 ? 'pink' : 'gray'};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}: GoodsItemProps) => {
  return (
    <div css={goodsItemStyles}>
      {rankingIndex !== undefined && (
        <div css={rankingBadgeStyles(rankingIndex)}>{rankingIndex}</div>
      )}
      <img src={imageSrc} alt={title} css={imageStyles} />
      <div css={subtitleStyles}>{subtitle}</div>
      <div css={titleStyles}>{title}</div>
      <div css={amountStyles}>{amount}</div>
    </div>
  );
};

export default GoodsItem;

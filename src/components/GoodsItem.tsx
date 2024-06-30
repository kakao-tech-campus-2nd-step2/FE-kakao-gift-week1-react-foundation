import React from "react";
import styled, { css } from "styled-components";
import Image, { ImageProps } from "./Image";

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number;
}

const StyledGoodsItem = styled.div<{ isRanking: boolean }>`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.isRanking &&
    css`
      border-color: pink;
    `}
`;

const RankingBadge = styled.div<{ rankingIndex: number }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  background-color: ${(props) =>
    props.rankingIndex && props.rankingIndex <= 3 ? "pink" : "gray"};
`;

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => {
  return (
    <StyledGoodsItem isRanking={rankingIndex !== undefined}>
      {rankingIndex && (
        <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
      )}
      <Image src={imageSrc} alt={title} ratio="square" radius={8} />
      <div>{subtitle}</div>
      <div>{title}</div>
      <div>{amount}</div>
    </StyledGoodsItem>
  );
};

export default GoodsItem;

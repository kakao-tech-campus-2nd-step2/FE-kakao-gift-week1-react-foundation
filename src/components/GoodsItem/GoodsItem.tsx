/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type GoodsItemProps = {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
  rankingIndex?: number;
};

const Container = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const RankingBadge = styled.div<{ rankingIndex: number }>`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ rankingIndex }) =>
    rankingIndex <= 3 ? '#ff4081' : '#bdbdbd'};
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 14px;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #757575;
  margin-bottom: 4px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Amount = styled.div`
  font-size: 16px;
  color: #212121;
`;

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageSrc} alt={title} />
        {rankingIndex !== undefined && (
          <RankingBadge rankingIndex={rankingIndex}>
            {rankingIndex}
          </RankingBadge>
        )}
      </ImageContainer>
      <TextContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
      </TextContainer>
    </Container>
  );
};

export default GoodsItem;

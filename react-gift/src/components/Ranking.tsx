import React from 'react';
import { Container, ImageContainer, Image, Info, Title, Subtitle, Amount, RankingBadge } from '../styles/GoodsItemStyle';

export interface RankingGoodsItemProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: string;
  rankingIndex: number;
}

const RankingGoodsItem: React.FC<RankingGoodsItemProps> = ({ imageSrc, title, subtitle, amount, rankingIndex }) => (
  <Container>
    <ImageContainer>
      <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
      <Image src={imageSrc} alt={title} />
    </ImageContainer>
    <Info>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Info>
  </Container>
);

export default RankingGoodsItem;

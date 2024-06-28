import React from 'react';
import { Container, Image, Info, Title, Subtitle, Amount } from '../styles/GoodsItemStyle';

export interface GoodsItemProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: string;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, title, subtitle, amount }) => (
  <Container>
    <Image src={imageSrc} alt={title} />
    <Info>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Info>
  </Container>
);

export default GoodsItem;

import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import resetStyle from '@/assets/styles/resetStyle';

export interface ItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const StyledContainer = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled.img`
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
`;

const StyledSubtitle = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StyledTitle = styled.p`
  width: 100%;
  height: 44px;
  font-size: 14px;
  overflow: hidden;
  line-height: 22px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledAmount = styled.p`
  padding-top: 8px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 700;
  word-break: break-word;
`;

const Item = ({ imageSrc, subtitle, title, amount }: ItemProps) => {
  return (
    <StyledContainer>
      <Global styles={resetStyle} />
      <StyledImage src={imageSrc} alt={title} />
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle>{title}</StyledTitle>
      <StyledAmount>{amount}원</StyledAmount>
    </StyledContainer>
  );
};

export default Item;

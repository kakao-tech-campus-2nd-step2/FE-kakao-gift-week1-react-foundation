import styled from '@emotion/styled';
import { Global } from '@emotion/react';
import resetStyle from '@/assets/styles/resetStyle';

export interface ItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex: number;
}

const StyledContainer = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledRankingIndex = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 700;
  z-index: 1;
  position: absolute;
  color: white;
  background-color: rgb(253, 115, 100);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 4px;
  left: 4px;
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
`;

const StyledSubtitle = styled.p`
  margin-top: 12px;
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
  margin-bottom: 8px;
`;

const StyledAmount = styled.p`
  padding-top: 8px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 700;
  word-break: break-word;
`;

const RankingItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}: ItemProps) => {
  return (
    <StyledContainer>
      <Global styles={resetStyle} />
      <StyledImageContainer>
        <StyledImage src={imageSrc} alt={title} />
        <StyledRankingIndex>{rankingIndex}</StyledRankingIndex>
      </StyledImageContainer>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle>{title}</StyledTitle>
      <StyledAmount>{amount}원</StyledAmount>
    </StyledContainer>
  );
};

export default RankingItem;

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100px;
  overflow: hidden;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  padding: 5px;
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
`;

export const Amount = styled.div`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  width: 100%;
  text-align: center;
  word-break: break-all;
`;

export const RankingBadge = styled.div<{ rankingIndex: number }>`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: ${(props) => (props.rankingIndex <= 3 ? 'pink' : 'gray')};
  color: white;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 3px;
`;

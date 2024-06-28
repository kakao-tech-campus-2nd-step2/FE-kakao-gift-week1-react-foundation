import styled from '@emotion/styled';

interface GridProps {
  columns: number;
  gap?: number;
}

export const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => (props.gap ? `${props.gap}px` : '0')};
`;

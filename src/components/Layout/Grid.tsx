/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

type Breakpoints = {
  initial: number;
  sm?: number;
  md?: number;
  lg?: number;
};

type GridProps = {
  gap?: number;
  columns: number | Breakpoints; // 반응형을 위한 타입 추가
};

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    typeof columns === 'number'
      ? `repeat(${columns}, 1fr)`
      : `repeat(${columns.initial}, 1fr)`};
  gap: ${({ gap }) => (gap !== undefined ? `${gap}px` : '16px')};
  width: 100%;

  ${({ columns }) =>
    typeof columns !== 'number' &&
    columns.sm &&
    `
    @media (min-width: 600px) {
      grid-template-columns: repeat(${columns.sm}, 1fr);
    }
  `}
  ${({ columns }) =>
    typeof columns !== 'number' &&
    columns.md &&
    `
    @media (min-width: 900px) {
      grid-template-columns: repeat(${columns.md}, 1fr);
    }
  `}
  ${({ columns }) =>
    typeof columns !== 'number' &&
    columns.lg &&
    `
    @media (min-width: 1200px) {
      grid-template-columns: repeat(${columns.lg}, 1fr);
    }
  `}
`;

const Grid: React.FC<GridProps> = ({ gap = 16, columns, children }) => {
  return (
    <GridContainer gap={gap} columns={columns}>
      {children}
    </GridContainer>
  );
};

export default Grid;

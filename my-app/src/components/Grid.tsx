/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface GridProps {
  children: React.ReactNode;
}

const gridStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Grid = ({ children }: GridProps) => {
  return <div css={gridStyles}>{children}</div>;
};

export default Grid;

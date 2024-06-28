import React from 'react';
import { GridContainer } from '../styles/GridStyle';

export interface GridProps {
  columns: number;
  gap?: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, gap = 0, children }) => (
  <GridContainer columns={columns} gap={gap}>
    {children}
  </GridContainer>
);

export default Grid;

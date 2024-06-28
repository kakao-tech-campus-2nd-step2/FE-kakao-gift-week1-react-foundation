import React from 'react';
import './grid.css';

interface GridProps {
  columns: number;
  gap?: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, gap = 0, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={gridStyle}>{children}</div>;
};

export default Grid;

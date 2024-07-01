import React from 'react';
import './Grid.css';

interface GridProps {
  columns: number | { initial: number; sm?: number; md?: number; lg?: number };
  gap?: string;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, gap = '0', children }) => {
  const getGridTemplateColumns = () => {
    if (typeof columns === 'number') {
      return `repeat(${columns}, 1fr)`;
    } else {
      return `
        repeat(${columns.initial}, 1fr);
        @media (min-width: 600px) { grid-template-columns: repeat(${columns.sm || columns.initial}, 1fr); }
        @media (min-width: 768px) { grid-template-columns: repeat(${columns.md || columns.initial}, 1fr); }
        @media (min-width: 1024px) { grid-template-columns: repeat(${columns.lg || columns.initial}, 1fr); }
      `;
    }
  };

  const style = {
    display: 'grid',
    gap,
    gridTemplateColumns: getGridTemplateColumns(),
  };

  return <div style={style}>{children}</div>;
};

export default Grid;

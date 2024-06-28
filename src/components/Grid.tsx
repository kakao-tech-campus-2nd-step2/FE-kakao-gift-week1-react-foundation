import React, { ReactNode } from 'react';
import '../styles/Grid.css'; // 스타일 파일을 import

interface GridProps {
  children: ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};

export default Grid;

import React, { ReactNode } from 'react';
import '../styles/Container.css'; // 스타일 파일을 import

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

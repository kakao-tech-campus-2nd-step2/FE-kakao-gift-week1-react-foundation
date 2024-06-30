import React from 'react';
import './container.css';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

const Container: React.FC<ContainerProps> = ({ children, maxWidth = '1200px' }) => {
  return (
    <div className="container" style={{ maxWidth }}>
      {children}
    </div>
  );
};

export default Container;

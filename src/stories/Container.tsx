import React from 'react';
import './Container.css';

interface ContainerProps {
  maxWidth?: string;
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

const Container: React.FC<ContainerProps> = ({
  maxWidth,
  children,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
}) => {
  const style = {
    maxWidth,
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
  };

  return <div style={style}>{children}</div>;
};

export default Container;

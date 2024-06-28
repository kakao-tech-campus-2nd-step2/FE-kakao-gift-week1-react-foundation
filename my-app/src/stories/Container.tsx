import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  backgroundColor?: string;
  padding?: string;
  margin?: string;
  boxShadow?: string;
  border?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = '800px',
  backgroundColor = '#f0f0f0',
  padding = '20px',
  margin = '0 auto',
  boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)',
  border = '1px solid #ccc',
}) => {
  const containerStyle = {
    maxWidth,
    backgroundColor,
    padding,
    margin,
    boxShadow,
    border,
  };

  return (
    <div className="container" style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
import React from 'react';
import { Container as StyledContainer } from '../styles/ContainerStyle';

export interface ContainerProps {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  flexDirection,
  justifyContent,
  alignItems,
  children,
}) => (
  <StyledContainer
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </StyledContainer>
);

export default Container;

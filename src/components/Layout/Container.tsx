/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  padding?: string;
  maxWidth?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  children?: React.ReactNode;
};

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '1200px'};
  margin: 0 auto;
  padding: ${({ padding }) => padding || '16px'};
`;

const Container: React.FC<ContainerProps> = ({
  padding = '16px',
  maxWidth = '1200px',
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
}) => {
  return (
    <StyledContainer
      padding={padding}
      maxWidth={maxWidth}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;

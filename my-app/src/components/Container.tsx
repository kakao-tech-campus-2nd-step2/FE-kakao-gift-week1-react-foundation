/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface ContainerProps {
  maxWidth?: string;
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
}

const Container = ({
  maxWidth = '1200px',
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  children,
}: ContainerProps) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    padding: 16px;
    max-width: ${maxWidth};
    margin: 0 auto;
  `;

  return <div css={containerStyles}>{children}</div>;
};

export default Container;

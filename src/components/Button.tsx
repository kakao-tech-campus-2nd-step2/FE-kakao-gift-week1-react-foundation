import React, { ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyle {
  children: ReactNode;
  className?: string;
}

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonStyle>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({
    width = 'auto',
    height = 'auto',
    buttonColor = 'white',
    hasBorder = false,
    borderColor = 'white',
    borderRadius = '5px',
    fontColor = 'black',
    fontSize = '14px',
  }) => `
    width: ${width};
    height: ${height};
    background-color: ${buttonColor};
    border: ${hasBorder ? `1px solid ${borderColor}` : 'none'};
    border-radius: ${borderRadius};
    color: ${fontColor};
    font-size: ${fontSize};

    ${
      width === 'responsive' &&
      `
      width : 100%;
      @media (min-width : 576px){
        width : 80%
      }
      @media (min-width: 768px) {
        width: 60%;
      }
      @media (min-width: 992px) {
        width: 40%;
      }
      ${
        height === 'responsive' &&
        `
      height: 40px;
      @media (min-width: 576px) {
        height: 50px;
      }
      @media (min-width: 768px) {
        height: 60px;
      }
      @media (min-width: 992px) {
        height: 70px;
      }
    `
      }
    `
    }
  `}
`;
export default Button;

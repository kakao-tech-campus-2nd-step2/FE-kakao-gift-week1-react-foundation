/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type Theme = 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
type Size = 'large' | 'small' | 'responsive';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: Theme;
  size?: Size;
};

const themeStyles: Record<Theme, SerializedStyles> = {
  kakao: css`
    background-color: #fee500;
    color: #3c1e1e;
  `,
  outline: css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `,
  black: css`
    background-color: #000;
    color: #fff;
  `,
  lightGray: css`
    background-color: #f2f2f2;
    color: #333;
  `,
  darkGray: css`
    background-color: #333;
    color: #fff;
  `,
};

const sizeStyles: Record<Size, SerializedStyles> = {
  large: css`
    font-size: 18px;
    padding: 12px 24px;
  `,
  small: css`
    font-size: 12px;
    padding: 6px 12px;
  `,
  responsive: css`
    width: 100%;
    font-size: 16px;
    padding: 10px 20px;

    @media (max-width: 600px) {
      font-size: 14px;
      padding: 8px 16px;
    }

    @media (min-width: 600px) {
      font-size: 18px;
      padding: 12px 24px;
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ theme = 'kakao' }) => theme && themeStyles[theme]}
  ${({ size = 'large' }) => size && sizeStyles[size]}
`;

const Button: React.FC<ButtonProps> = ({
  theme = 'kakao',
  size = 'large',
  children,
  ...props
}) => {
  return (
    <StyledButton theme={theme} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

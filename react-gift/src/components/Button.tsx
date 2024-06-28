import React from 'react';
import styled from '@emotion/styled';
import { Size, Theme } from '../styles/ButtonStyle';

type ButtonStyleProps = {
  state: 'normal' | 'hover';
  size: 'small' | 'medium' | 'large' | 'responsive';
  colorType: 'yellow'|'black' | 'white' | 'brown';
};

const ButtonStyle = styled.button<ButtonStyleProps>`
  border-radius: 5px;

  ${(props) => Size[props.size]}
  ${(props) => Theme[props.colorType]?.[props.state]}

  &:hover {
    ${(props) => Theme[props.colorType]?.hover}
  }
`;

export interface ButtonProps extends ButtonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, onClick, ...styleProps }: ButtonProps) => {
  return (
    <ButtonStyle {...styleProps} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

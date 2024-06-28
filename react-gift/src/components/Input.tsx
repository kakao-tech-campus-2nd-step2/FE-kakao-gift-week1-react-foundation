import React from 'react';
import styled from '@emotion/styled';
import { Size, disabledStyle, invalidStyle } from '../styles/InputStyle';

type InputStyleProps = {
  inputsize: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean;
};

const InputStyle = styled.input<InputStyleProps>`
  border-radius: 5px;
  ${(props) => Size[props.inputsize]}
  ${(props) => props.disabled && disabledStyle}
  ${(props) => props.invalid && invalidStyle}
`;

export interface InputProps extends InputStyleProps, React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ inputsize, disabled, invalid, ...props }) => (
  <InputStyle inputsize={inputsize} disabled={disabled} invalid={invalid} {...props} />
);

Input.defaultProps = {
  inputsize: 'medium',
  disabled: false,
  invalid: false,
};

export default Input;

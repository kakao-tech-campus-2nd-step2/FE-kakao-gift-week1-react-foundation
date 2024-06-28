/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

type Size = 'large' | 'small' | 'responsive';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: Size;
  invalid?: boolean;
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
    padding: 10px 20px 10px 20px; /* Right padding adjusted */

    @media (max-width: 600px) {
      font-size: 14px;
      padding: 8px 16px 8px 16px; /* Right padding adjusted */
    }

    @media (min-width: 600px) {
      font-size: 18px;
      padding: 12px 24px 12px 24px; /* Right padding adjusted */
    }
  `,
};

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size: Size;
  invalid?: boolean;
}

const StyledInput = styled('input')<StyledInputProps>`
  border: 1px solid #ccc;
  border-radius: 4px;
  ${({ size }) => size && sizeStyles[size]}
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #f5f5f5;
      cursor: not-allowed;
    `}
  ${({ invalid }) =>
    invalid &&
    css`
      border-color: red;
    `}
`;

const Input: React.FC<InputProps> = ({
  size = 'large',
  invalid = false,
  ...props
}) => {
  return <StyledInput size={size} invalid={invalid} {...props} />;
};

export default Input;

import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface StyledInputProps {
  size?: "small" | "medium" | "large" | "responsive";
  invalid?: boolean;
}

const sizes = {
  small: css`
    font-size: 12px;
    padding: 8px;
  `,
  medium: css`
    font-size: 14px;
    padding: 10px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px;
  `,
  responsive: css`
    font-size: 14px;
    padding: 10px;
    @media (min-width: 768px) {
      font-size: 16px;
      padding: 12px;
    }
  `,
};

const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid #ccc;
  border-radius: 4px;
  ${(props) => sizes[props.size || "medium"]}
  ${(props) =>
    props.invalid &&
    css`
      border-color: red;
    `}
  &:disabled {
    background-color: #f0f0f0;
  }
`;

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "medium" | "large" | "responsive";
  invalid?: boolean;
}

const CustomInput: React.FC<InputProps> = ({
  size = "medium",
  invalid,
  ...props
}) => {
  return <StyledInput size={size} invalid={invalid} {...props} />;
};

export default CustomInput;

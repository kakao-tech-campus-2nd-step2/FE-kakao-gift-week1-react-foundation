import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "responsive";
}

const sizes = {
  small: css`
    font-size: 12px;
    padding: 8px 12px;
  `,
  medium: css`
    font-size: 14px;
    padding: 10px 14px;
  `,
  large: css`
    font-size: 16px;
    padding: 12px 16px;
  `,
  responsive: css`
    font-size: 14px;
    padding: 10px 14px;
    @media (min-width: 768px) {
      font-size: 16px;
      padding: 12px 16px;
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  ${(props) => sizes[props.size || "medium"]}
  ${(props) =>
    props.theme === "primary" &&
    css`
      background-color: #007bff;
      border-radius: 40px;
    `}
  ${(props) =>
    props.theme === "secondary" &&
    css`
      background-color: #6c757d;
    `}
  &:disabled {
    background-color: #ced4da;
    cursor: not-allowed;
  }
`;

const CustomButton: React.FC<ButtonProps> = ({
  children,
  theme = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <StyledButton theme={theme} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;

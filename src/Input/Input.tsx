// src/Input/Input.tsx
import React from 'react';
import styled, { css } from 'styled-components';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isInvalid?: boolean; // invalid Props 추가
}

const InputStyled = styled.input<{ isDisabled: boolean; isInvalid: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      background-color: #f5f5f5;
      border-color: #ddd;
    `}

  ${(props) =>
    props.isInvalid &&
    css`
      border-color: red;
      background-color: #ffe6e6;
    `}
`;

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Input: React.FC<InputProps> = ({
  label,
  disabled,
  isInvalid,
  ...props
}) => {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        isDisabled={!!disabled}
        isInvalid={!!isInvalid}
        disabled={disabled}
        {...props}
      />
      {isInvalid && <ErrorMessage>Invalid input</ErrorMessage>}
    </div>
  );
};

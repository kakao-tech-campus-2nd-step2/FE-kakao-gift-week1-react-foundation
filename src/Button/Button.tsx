import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large' // size 속성 추가
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;

  ${({ theme }) =>
    theme === 'primary' &&
    css`
      background-color: blue;
      color: white;
    `}

  ${({ theme }) =>
    theme === 'secondary' &&
    css`
      background-color: gray;
      color: black;
    `}

  // size에 따른 스타일 설정
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 12px;
      padding: 8px 16px;
    `}

  ${({ size }) =>
    size === 'medium' &&
    css`
      font-size: 16px;
      padding: 10px 20px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 20px;
      padding: 12px 24px;
    `}
`

const Button: React.FC<ButtonProps> = ({ theme = 'primary', size = 'medium', ...props }) => {
  return <StyledButton theme={theme} size={size} {...props} />
}

export default Button

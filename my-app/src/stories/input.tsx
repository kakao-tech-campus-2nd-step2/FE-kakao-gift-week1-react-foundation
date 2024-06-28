import React from 'react';
import './input.css';

interface InputProps {
  disabled?: boolean; // disabled prop 추가
  invalid?: boolean; // invalid prop 추가
  size?: 'small' | 'medium' | 'large' | 'responsive'; // size prop 추가
}

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  disabled = false, // 기본값으로 false 설정
  invalid = false,
  size = 'medium', // 기본값
  ...props
}: InputProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-input--responsive' : `storybook-input--${size}`; //size에 따라 class 선택
  const invalidClass = invalid ? 'storybook-input--invalid' : ''; // invalid prop을 기반으로 클래스 설정
  
  return (
    <input
      className={`storybook-input ${sizeClass} ${invalidClass}`}
      disabled={disabled} //input 요소에 적용
      {...props} // 모든 props를 input요소에 전달
    />
  );
};

export default Input;
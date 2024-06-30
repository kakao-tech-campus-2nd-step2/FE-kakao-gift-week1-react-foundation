import React from 'react';
import './input.css';

interface InputProps {
  disabled?: boolean; // disabled prop 추가
  invalid?: boolean; // invalid prop 추가
  placeholder?: string; //placeholder props 추가
}

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  disabled = false, // 기본값으로 false 설정
  invalid = false,
  placeholder = '',
  ...props
}: InputProps) => {
  const invalidClass = invalid ? 'storybook-input--invalid' : ''; // invalid prop을 기반으로 클래스 설정
  
  return (
    <input
      className={`storybook-input  ${invalidClass} `}
      disabled={disabled} //input 요소에 적용
      placeholder={placeholder} //placeholder prop 추가
      {...props} // 모든 props를 input요소에 전달
    />
  );
};

export default Input;
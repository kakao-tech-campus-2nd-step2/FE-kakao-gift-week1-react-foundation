import React from 'react';
import './Input.css';

export type InputProps = {
  size?: 'small' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  size = 'large',
  disabled = false,
  invalid = false,
  ...props
}) => {
  return (
    <input
      className={`input ${size} ${disabled ? 'disabled' : ''} ${invalid ? 'invalid' : ''}`}
      disabled={disabled}
      aria-invalid={invalid}
      {...props}
    />
  );
};

export default Input;

import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  value?: string;
  type?: string;
  name?: string;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  invalid = false,
  placeholder,
  onChange,
  onClick,
  value,
  type = 'text',
  name,
  id,
  ...props
}) => {
  const disabledClass = disabled ? 'input--disabled' : '';
  const invalidClass = invalid ? 'input--invalid' : '';

  return (
    <input
      className={['input', disabledClass, invalidClass].join(' ')}
      disabled={disabled}
      aria-invalid={invalid}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      value={value}
      type={type}
      name={name}
      id={id}
      {...props}
    />
  );
};

export default Input;

// Button.tsx

import React from 'react';
import './Button.css';

export type ButtonProps = {
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size?: 'large' | 'small' | 'responsive';
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  theme = 'outline',
  size = 'large',
  children,
  ...props
}) => {
  return (
    <button className={`button ${theme} ${size}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  theme?: 'primary' | 'secondary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  label: string;
  onClick?: () => void;
  primary?: boolean;
}

export const Button = ({
  theme = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const themeClass = `storybook-button--${theme}`;
  const sizeClass = size === 'responsive' ? 'storybook-button--responsive' : `storybook-button--${size}`;

  return (
    <button
      type="button"
      className={`storybook-button ${sizeClass} ${themeClass}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
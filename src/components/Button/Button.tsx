import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  theme?: string;
  size?: 'small' | 'medium' | 'large' | 'responsive';
  label: string;
  onClick?: (event?: MouseEvent) => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  theme = 'kakao',
  label,
  ...props
}: ButtonProps) => {
  const firstMeetBorder = primary ? 'first' : '';
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        theme,
        firstMeetBorder,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

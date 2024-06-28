/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large' | 'responsive';
  children: React.ReactNode;
}

const buttonStyles = {
  primary: css`
    background-color: blue;
    color: white;
  `,
  secondary: css`
    background-color: gray;
    color: white;
  `,
  small: css`
    padding: 4px 8px;
    font-size: 12px;
  `,
  medium: css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  large: css`
    padding: 12px 24px;
    font-size: 16px;
  `,
  responsive: css`
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  `,
};

const Button = ({
  theme = 'primary',
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button css={[buttonStyles[theme], buttonStyles[size]]} {...props}>
      {children}
    </button>
  );
};

export default Button;

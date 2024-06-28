/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customSize?: 'small' | 'medium' | 'large' | 'responsive';
  disabled?: boolean;
  invalid?: boolean;
}

const inputStyles = {
  base: css`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `,
  disabled: css`
    background-color: #f5f5f5;
    cursor: not-allowed;
  `,
  invalid: css`
    border-color: red;
  `,
  small: css`
    padding: 4px;
    font-size: 12px;
  `,
  medium: css`
    padding: 8px;
    font-size: 14px;
  `,
  large: css`
    padding: 12px;
    font-size: 16px;
  `,
  responsive: css`
    width: 100%;
    padding: 12px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  `,
};

const Input = ({
  customSize = 'medium',
  disabled = false,
  invalid = false,
  ...props
}: InputProps) => {
  return (
    <input
      css={[
        inputStyles.base,
        disabled && inputStyles.disabled,
        invalid && inputStyles.invalid,
        inputStyles[customSize],
      ]}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;

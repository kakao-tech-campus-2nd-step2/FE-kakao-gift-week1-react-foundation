import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface StyleProps {
  width?: string | number;
  height?: string | number;
  inputColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  borderRadius?: string;
  fontColor?: string;
  fontSize?: string;
  disabled?: boolean;
  invalid?: boolean;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styleProps?: StyleProps;
  className?: string;
  invalid?: boolean;
}

function Input({
  className,
  styleProps = {},
  invalid = false,
  ...rest
}: InputProps): ReactElement {
  return (
    <StyledInput
      className={className}
      {...styleProps}
      invalid={invalid}
      {...rest}
    />
  );
}

const StyledInput = styled.input<StyleProps & { invalid: boolean }>`
  padding: 8px;
  ${({
    width = 'auto',
    height = 'auto',
    inputColor = 'white',
    hasBorder = true,
    borderColor = 'gray',
    borderRadius = '5px',
    fontColor = 'black',
    fontSize = '14px',
    disabled = false,
    invalid = false,
  }) => `
    width: ${typeof width === 'number' ? `${width}px` : width};
    height: ${typeof height === 'number' ? `${height}px` : height};
    background-color: ${disabled ? 'lightgray' : inputColor};
    border: ${hasBorder ? `3px solid ${invalid ? 'red' : borderColor}` : 'none'};
    border-radius: ${borderRadius};
    color: ${fontColor};
    font-size: ${fontSize};
    cursor: ${disabled ? 'not-allowed' : 'text'};

    ${
      width === 'responsive' &&
      `
      width: 100%;
      @media (min-width: 576px) {
        width: 80%;
      }
      @media (min-width: 768px) {
        width: 60%;
      }
      @media (min-width: 992px) {
        width: 40%;
      }
      ${
        height === 'responsive' &&
        `
        height: 40px;
        @media (min-width: 576px) {
          height: 50px;
        }
        @media (min-width: 768px) {
          height: 60px;
        }
        @media (min-width: 992px) {
          height: 70px;
        }
      `
      }
    `
    }
  `}
`;

export default Input;

import styled from '@emotion/styled';

export interface InputProps {
  placeholder?: string;
  disabled: boolean;
  invalid: boolean;
  inputSize: 'large' | 'small' | 'responsive';
}

const InputStyled = styled.input<InputProps>`
  font-family: 'Arial', sans-serif;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: all 0.3s ease;
  height: ${(props) =>
    props.inputSize === 'small'
      ? '40px'
      : props.inputSize === 'large'
        ? '60px'
        : '50px'};

  ${(props) =>
    props.disabled &&
    `
    background-color: #f0f0f0;
    border-color: #dcdcdc;
    cursor: not-allowed;
  `}

  ${(props) =>
    props.invalid &&
    `
    border-color: #ff4d4f;
  `}
`;

const Input = ({ disabled, invalid, inputSize, placeholder }: InputProps) => (
  <InputStyled
    disabled={disabled}
    invalid={invalid}
    inputSize={inputSize}
    placeholder={placeholder}
  />
);

export default Input;

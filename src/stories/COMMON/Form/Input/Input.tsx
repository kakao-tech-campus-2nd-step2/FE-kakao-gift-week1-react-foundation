import styled from '@emotion/styled';

export interface InputProps {
  inputSize: 'large' | 'small' | 'responsive';
  disabled: boolean;
  placeholder: string;
  invalid: boolean;
}

const InputStyle = styled.input<InputProps>`
  width: 100%;
  padding: ${({ inputSize }) =>
    inputSize === 'small' ? '8px 10px' : '12px 14px'};
  margin: ${({ inputSize }) => (inputSize === 'small' ? '5px 0' : '10px 0')}
  font-size: ${({ inputSize }) =>
    inputSize === 'small' ? '14px' : inputSize === 'large' ? '20px' : '16px'};
  font-size: 18px;
  border: none;
  outline: none;
  color: black;
  background-color: ${({ disabled }) => (disabled ? 'lightsliver' : 'transparent')}; 
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-bottom: 1px solid ${props => (props.invalid ? 'red' : 'lightgray')};
  &:focus {
    border-bottom: 1px solid ${props => (props.invalid ? 'black' : 'lightgray')};
  }
`;

const Input = ({ placeholder, inputSize, disabled, invalid }: InputProps) => (
  <InputStyle
    placeholder={placeholder}
    inputSize={inputSize}
    disabled={disabled}
    invalid={invalid}
  />
);

export default Input;

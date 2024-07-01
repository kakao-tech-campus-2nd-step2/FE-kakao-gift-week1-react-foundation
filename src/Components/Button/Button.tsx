import styled from '@emotion/styled';

export interface ButtonProps {
  theme: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size: 'large' | 'small' | 'responsive';
  label?: string;
  onClick: () => void;
}

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) => {
    if (props.theme === 'outline') {
      return 'transparent';
    }
    if (props.theme === 'black') {
      return 'black';
    }
    if (props.theme === 'lightGray') {
      return 'lightgray';
    }
    if (props.theme === 'darkGray') {
      return 'darkgray';
    }
    return 'yellow';
  }};
  outline: ${(props) =>
    props.theme === 'outline' ? '1px solid lightGray' : 'none'};
  color: ${(props) => (props.theme === 'black' ? 'white' : 'black')};
  width: 120px;
  height: ${(props) => (props.size === 'small' ? '40px' : '60px')};
  border: none;
  font-size: 16px;
  border-radius: 5px;
  @media (max-width: 400px) {
    height: 40px;
  }
`;

const Button = ({ theme, size, label, onClick }: ButtonProps) => (
  <ButtonStyled theme={theme} size={size} onClick={onClick}>
    {label}
  </ButtonStyled>
);

export default Button;

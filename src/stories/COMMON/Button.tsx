import styled from '@emotion/styled';

export interface ButtonProps {
  theme: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size: 'large' | 'small' | 'responsive';
  label?: string;
  onClick: () => void;
}

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${props =>
    props.theme === 'outline'
      ? 'transparent'
      : props.theme === 'black'
        ? 'black'
        : props.theme === 'lightGray'
          ? 'rgb(240, 240, 240)'
          : props.theme === 'darkGray'
            ? 'rgb(68, 68, 68)'
            : 'rgb(254, 229, 0);'};
  outline: ${props =>
    props.theme === 'outline' ? '1px solid lightGray' : 'none'};
  color: ${props => (props.theme === 'black' ? 'white' : 'black')};
  width: 120px;
  height: ${props => (props.size === 'small' ? '40px' : '60px')};
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

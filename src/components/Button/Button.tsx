import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
   theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray'
   size?: 'large' | 'small' | 'responsive'
}

const themeTypes = {
   kakao: css`
      background-color: rgb(254, 229, 0);
      color: rgb(17, 17, 17);
   `,
   outline: css`
      background-color: transparent;
      color: rgb(17, 17, 17);
      box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
   `,
   black: css`
      background-color: rgb(17, 17, 17);
      color: #fff;
   `,
   lightGray: css`
      background-color: rgb(240, 240, 240);
      color: rgb(17, 17, 17);
   `,
   darkGray: css`
      background-color: rgb(68, 68, 68);
      color: #fff;
   `,
}

const sizeTypes = {
   large: css`
      height: 60px;
   `,
   small: css`
      height: 40px;
   `,
   responsive: css`
      @media (max-width: 767px) {
         height: 40px;
      }
      @media (min-width: 768px) {
         height: 60px;
      }
   `,
}

const CustomButton = styled.button<ButtonProps>`
   ${(props) => props.theme && themeTypes[props.theme as keyof typeof themeTypes]}
   ${(props) => props.size && sizeTypes[props.size as keyof typeof sizeTypes]}
   border: none;
   border-radius: 4px;
   width: 120px;
   cursor: pointer;
   &:hover {
      opacity: 0.8;
   }
`

const Button: React.FC<ButtonProps> = ({ children = '버튼', theme = 'kakao', size = 'responsive', ...props }) => {
   return (
      <CustomButton theme={theme} size={size} {...props}>
         {children}
      </CustomButton>
   )
}

export default Button

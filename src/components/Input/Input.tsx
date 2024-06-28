import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
   inputSize?: 'large' | 'small' | 'responsive'
   disabled?: boolean
   invalid?: boolean
}

const sizeTypes = {
   large: css`
      width: 200px;
   `,
   small: css`
      width: 100px;
   `,
   responsive: css`
      @media (max-width: 767px) {
         width: 100px;
      }
      @media (min-width: 768px) {
         width: 200px;
      }
   `,
}

const CustomInput = styled.input<InputProps>`
   ${(props) => props.inputSize && sizeTypes[props.inputSize as keyof typeof sizeTypes]}
   border: none;
   border-bottom: 2px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
   background-color: ${(props) => (props.disabled ? '#f5f5f5' : 'white')};
   color: ${(props) => (props.disabled ? '#a1a1a1' : 'black')};
   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
   height: 40px;
   &:focus {
      outline: none;
      border-bottom-color: ${(props) => (props.invalid ? 'red' : '#000')};
   }
`

const Input: React.FC<InputProps> = ({ inputSize = 'responsive', disabled, invalid, ...props }) => {
   return <CustomInput inputSize={inputSize} disabled={disabled} invalid={invalid} {...props} />
}

export default Input

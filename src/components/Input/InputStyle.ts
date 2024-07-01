import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { InputProps } from '../../types/PropsType'

export default styled.input<InputProps>`
    border: none;
    border-bottom: 1px solid #111111;
    ${({invalid}) => 
        invalid ?
            css`border-color: red` :
            css`border-color: #111111`
    };
    ${({disabled}) =>
        disabled ?
            css`background: #aaaaaa` :
            css`background: inherit`
    };
    ${({sizeI}) => 
        sizeI==='responsive' ?
        css`
            @media screen and (max-width: 768px) {
            font-size: 18px;
            }
            font-size: 20px;
        ` :
        css`
            font-size: ${sizeI}px;
        `
    }
`
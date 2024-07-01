import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { ImageProps } from '../../types/PropsType'

export default styled.img<ImageProps>`
    width: 100px;
    ${({ratio}) => 
        css`aspect-ratio: ${ratio==='square' ? 1 : ratio};`
    }
    ${({radius}) => 
        css`border-radius: ${radius==='circle' ? 60 : radius}px;`
    }
`
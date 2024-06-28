import React from 'react'
import styled from '@emotion/styled'

type ContainerProps = {
   maxWidth?: string
   flexDirection?: 'row' | 'column'
   justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
   alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
   children: React.ReactNode
}

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const CustomContainer = styled.div<ContainerProps>`
   display: flex;
   width: 100%;
   max-width: ${(props) => props.maxWidth || '1024px'};
   flex-direction: ${(props) => props.flexDirection || 'column'};
   justify-content: ${(props) => props.justifyContent || 'flex-start'};
   align-items: ${(props) => props.alignItems || 'flex-star'};
`

const Container: React.FC<ContainerProps> = ({ maxWidth, flexDirection, justifyContent, alignItems, children }) => {
   return (
      <Wrapper>
         <CustomContainer
            maxWidth={maxWidth}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}
         >
            {children}
         </CustomContainer>
      </Wrapper>
   )
}

export default Container

import React from 'react'
import styled from '@emotion/styled'

type GridProps = {
   columns: number
   gap?: number
   children: React.ReactNode
}

const CustomGrid = styled.div<GridProps>`
   display: grid;
   grid-template-columns: repeat(${(props) => props.columns}, 1fr);
   gap: ${(props) => (props.gap !== undefined ? `${props.gap}px` : '0')};
`

const Grid: React.FC<GridProps> = ({ columns, gap, children }) => {
   return (
      <CustomGrid columns={columns} gap={gap}>
         {children}
      </CustomGrid>
   )
}

export default Grid

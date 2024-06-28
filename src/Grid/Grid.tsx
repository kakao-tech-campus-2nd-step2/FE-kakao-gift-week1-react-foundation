import React from 'react'
import styled from 'styled-components'

interface GridProps {
  columns: number
  gap: string
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap};
`

const Grid: React.FC<GridProps> = ({ columns, gap, children }) => {
  return (
    <StyledGrid columns={columns} gap={gap}>
      {children}
    </StyledGrid>
  )
}

export default Grid

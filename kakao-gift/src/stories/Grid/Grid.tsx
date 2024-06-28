import React from 'react'
import './Grid.css'

interface GridProps {
  gap: number
  columns: number
  children: React.ReactNode
}

export const Grid: React.FC<GridProps> = ({ gap, columns, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    rowGap: `${gap}px`,
  }

  return (
    <div style={gridStyle} className="grid">
      {children}
    </div>
  )
}

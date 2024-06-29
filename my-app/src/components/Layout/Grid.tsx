import React from 'react'
import '../../styles/Grid.css'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string
  columns?: number | { [key: string]: number }
  children: React.ReactNode
}

const getGridTemplateColumns = (columns: GridProps['columns']) => {
  if (typeof columns === 'number') {
    return `repeat(${columns}, 1fr)`
  }
  if (typeof columns === 'object') {
    return Object.entries(columns)
      .map(
        ([key, value]) =>
          `@media (min-width: ${key}px) { grid-template-columns: repeat(${value}, 1fr); }`,
      )
      .join(' ')
  }
  return 'repeat(1, 1fr)'
}

const Grid: React.FC<GridProps> = ({
  gap = '0',
  columns = 1,
  children,
  ...props
}) => {
  const gridStyle =
    typeof columns === 'object'
      ? { gap }
      : { gap, gridTemplateColumns: getGridTemplateColumns(columns) }

  return (
    <div className="grid" style={gridStyle} {...props}>
      {children}
      {typeof columns === 'object' && (
        <style>
          {Object.entries(columns)
            .map(
              ([key, value]) =>
                `@media (min-width: ${key}px) { .grid { grid-template-columns: repeat(${value}, 1fr); } }`,
            )
            .join(' ')}
        </style>
      )}
    </div>
  )
}

export default Grid

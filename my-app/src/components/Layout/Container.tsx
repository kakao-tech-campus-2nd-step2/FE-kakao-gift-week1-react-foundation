import React from 'react'
import '../../styles/Container.css'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: string
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  maxWidth = '100%',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  children,
  ...props
}) => {
  return (
    <div
      className="container"
      style={{
        maxWidth,
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container

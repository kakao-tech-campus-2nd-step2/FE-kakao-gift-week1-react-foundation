import React from 'react'
import './Container.css'

interface ContainerProps {
  children: React.ReactNode
  flexDirection: 'row' | 'column'
  justifyContent: 'center' | 'flex-start' | 'flex-end'
  alignItems: 'center' | 'flex-start' | 'flex-end'
}

export const Container: React.FC<ContainerProps> = ({ children, flexDirection, justifyContent, alignItems }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
  }

  return (
    <div style={containerStyle} className="container">
      {children}
    </div>
  )
}

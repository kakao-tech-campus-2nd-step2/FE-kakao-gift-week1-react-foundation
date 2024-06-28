import React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = props => {
  return <input {...props} />
}

export default Input

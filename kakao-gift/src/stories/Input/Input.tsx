import React from 'react'
import './input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Whether the input is disabled
   */
  disabled?: boolean
  /**
   * Whether the input value is invalid
   */
  invalid?: boolean
  /**
   * The type of the input
   */
  type?: string
  /**
   * The value of the input
   */
  value?: string
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({ disabled = false, invalid = false, type = 'text', value, ...props }: InputProps) => {
  const className = [
    'storybook-input',
    disabled ? 'storybook-input--disabled' : '',
    invalid ? 'storybook-input--invalid' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <input type={type} value={value} className={className} disabled={disabled} {...props} />
}

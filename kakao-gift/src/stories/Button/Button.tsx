import React from 'react'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'responsive'
  /**
   * Theme of the button
   */
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray'
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  theme = 'kakao',
  type = 'button',
  disabled = false,
  title,
  onClick,
  ...props
}: ButtonProps) => {
  const sizeClass = size === 'responsive' ? 'storybook-button--responsive' : `storybook-button--${size}`
  const themeClass = `storybook-button--${theme}`

  return (
    <button
      type={type}
      className={['storybook-button', sizeClass, themeClass].join(' ')}
      disabled={disabled}
      title={title}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  )
}

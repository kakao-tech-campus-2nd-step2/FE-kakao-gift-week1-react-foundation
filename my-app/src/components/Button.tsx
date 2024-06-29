import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Button.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray'
  size?: 'large' | 'small' | 'responsive'
}

const Button: React.FC<ButtonProps> = ({
  theme = 'kakao',
  size = 'large',
  children,
  ...props
}) => {
  return (
    <button className={`button ${theme} ${size}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  theme: PropTypes.oneOf([
    'kakao',
    'outline',
    'black',
    'lightGray',
    'darkGray',
  ]),
  size: PropTypes.oneOf(['large', 'small', 'responsive']),
  children: PropTypes.node.isRequired,
}

export default Button

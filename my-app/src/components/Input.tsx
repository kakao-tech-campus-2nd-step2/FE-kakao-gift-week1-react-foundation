import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Input.css'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean
  invalid?: boolean
  size?: 'small' | 'medium' | 'large' | 'responsive'
}

const Input: React.FC<InputProps> = ({
  disabled = false,
  invalid = false,
  size = 'medium',
  ...props
}) => {
  return (
    <div className="input-container">
      <input
        className={`input ${size} ${invalid ? 'invalid' : ''}`}
        disabled={disabled}
        aria-invalid={invalid}
        {...props}
      />
      <div className="underline"></div>
    </div>
  )
}

Input.propTypes = {
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
}

export default Input

import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const sizes = {
    small: '100px',
    medium: '200px',
    large: '300px',
    responsive: `
      width: 150px;
      @media (min-width: 600px) {
        width: 200px;
      }
      @media (min-width: 900px) {
        width: 300px;
      }
    `,
  };


const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => (props.invalid  === true ? 'red' : 'gray')};
  width: ${(props) => sizes[props.size]};
  height: 30px;
`;


export default function Input({ disabled, size, invalid, placeholder, ...props }) {
  return (
    <div>
      <InputStyled
        disabled={disabled}
        size={size}
        invalid={invalid}
        placeholder={placeholder}
        {...props}
      >
      </InputStyled>
    </div>
  )
}

Input.propTypes = {
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']),
    placeholder: PropTypes.node
  };

Input.defaultProps = {
  disabled: false,
  invalid: false,
  size: 'small',
  placeholder: 'placeholder'
};
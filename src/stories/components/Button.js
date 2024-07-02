import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const sizes = {
  small: '8px 16px',
  medium: '12px 24px',
  large: '16px 32px',
  responsive: `
    padding: 8px 16px;
    @media (min-width: 600px) {
      padding: 12px 24px;
    }
    @media (min-width: 900px) {
      padding: 16px 32px;
    }
  `,
};

const ButtonStyled = styled.button`
  background-color: ${(props) => (props.theme === 'kakao' ? 'yellow' : 'blue')};
  padding: ${(props) => sizes[props.size]};
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.theme === 'kakao' ? 'brown' : 'white')};
  font-size: 16px;
`;

export default function Button({children, theme, size}) {
  return (
    <div>
      <ButtonStyled theme={theme} size={size}>
        {children}
      </ButtonStyled>
    </div>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.oneOf(['kakao', 'facebook']).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'responsive']).isRequired,
  };
  
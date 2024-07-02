import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const calculateRatio = ratio => {
  if (typeof ratio === 'number') {
    return `${ratio}`;
  } else if (ratio === 'square') {
    return 1 / 1;
  }
};

const calculateRadius = radius => {
  if (typeof radius === 'number') {
    return `${radius}px`;
  } else if (radius === 'circle') {
    return '50%';
  }
};

const ImgStyled = styled.img`
  width: '${props => props.ratio}px';
  aspect-ratio: ${props => calculateRatio(props.ratio)};
  border-radius: ${props => calculateRadius(props.radius)};
`;

export default function Image({ ratio, radius, width, src }) {
  return <ImgStyled ratio={ratio} radius={radius} width={width} src={src} />;
}

Image.propTypes = {
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['square'])]),
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['circle'])]),
  width: PropTypes.number,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  ratio: 16 / 9,
  radius: 5,
  width: 500,
  src: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
};

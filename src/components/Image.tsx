import React, { ReactElement, ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface ImageStyle {
  ratio?: number | 'square';
  radius?: number | 'circle';
}

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, ImageStyle {}

function Image({ ratio, radius, ...rest }: ImageProps): ReactElement {
  return (
    <ImageWrapper ratio={ratio} radius={radius}>
      <StyledImage ratio={ratio} radius={radius} {...rest} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<ImageStyle>`
  position: relative;
  width: 100%;
  padding-top: ${({ ratio }) => {
    if (typeof ratio === 'number') {
      return `${(1 / ratio) * 100}%`;
    }
    if (ratio === 'square') {
      return '100%';
    }
    return 'auto';
  }};
  border-radius: ${({ radius }) => {
    if (typeof radius === 'number') {
      return `${radius}px`;
    }
    if (radius === 'circle') {
      return '50%';
    }
    return '0';
  }};
  overflow: hidden;
`;

const StyledImage = styled.img<ImageStyle>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ radius }) => {
    if (typeof radius === 'number') {
      return `${radius}px`;
    }
    if (radius === 'circle') {
      return '50%';
    }
    return '0';
  }};
`;

export default Image;

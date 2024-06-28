/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Ratio = 'square' | 'auto' | number;
type Radius = 'circle' | number;

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  ratio?: Ratio;
  radius?: Radius;
};

const ratioStyles = (ratio: Ratio) => {
  if (ratio === 'square') {
    return css`
      aspect-ratio: 1 / 1;
    `;
  }
  if (ratio === 'auto') {
    return css`
      width: auto;
      height: auto;
    `;
  }
  return css`
    aspect-ratio: ${ratio};
  `;
};

const radiusStyles = (radius: Radius) => {
  if (radius === 'circle') {
    return css`
      border-radius: 50%;
    `;
  }
  return css`
    border-radius: ${radius}px;
  `;
};

const StyledImage = styled.img<ImageProps>`
  width: 100%;
  ${({ ratio }) => ratio && ratioStyles(ratio)}
  ${({ radius }) => radius && radiusStyles(radius)}
`;

const Image: React.FC<ImageProps> = ({
  ratio = 'auto',
  radius = 0,
  ...props
}) => {
  return <StyledImage ratio={ratio} radius={radius} {...props} />;
};

export default Image;

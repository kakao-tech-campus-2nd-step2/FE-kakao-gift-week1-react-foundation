import React from 'react';
import styled from '@emotion/styled';
import { ratioStyles, radiusStyles } from '../styles/ImageStyle';

type ImageStyleProps = {
  width?: string;
  height?: string;
  ratio?: number | string;
  radius?: number | string;
};

const ImageContainer = styled.div<{ ratio?: number | string; width?: string; height?: string }>`
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.ratio && ratioStyles(props.ratio)}
  position: relative;
`;

const ImageStyle = styled.img<ImageStyleProps>`
  ${(props) => props.radius && radiusStyles(props.radius)}
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  width?: string;
  height?: string;
  ratio?: number | string;
  radius?: number | string;
}

const Image: React.FC<ImageProps> = ({ width, height, ratio, radius, ...props }) => (
  <ImageContainer width={width} height={height} ratio={ratio}>
    <ImageStyle radius={radius} {...props} />
  </ImageContainer>
);

export default Image;

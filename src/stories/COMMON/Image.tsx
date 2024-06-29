import styled from '@emotion/styled';

export interface ImageProps {
  src: string;
  width?: string;
  radius?: 'circle' | number;
  ratio?: 'square' | 'auto' | number;
}

const StyledImage = styled.img<ImageProps>`
  object-fit: cover;
  object-position: center center;
  width: ${props => props.width || '800px'};
  height: ${props => (props.ratio === 'square' ? props.width : 'auto')};
  aspect-ratio: ${props =>
    props.ratio === 'square'
      ? '1 / 1'
      : typeof props.ratio === 'number'
        ? `${props.ratio}`
        : 'auto'};
  border-radius: ${props =>
    props.radius === 'circle'
      ? '50%'
      : props.radius
        ? `${props.radius}px`
        : '0'};
`;

const Image = ({ src, width, radius, ratio }: ImageProps) => {
  return (
    <StyledImage src={src} width={width} radius={radius} ratio={ratio} alt="" />
  );
};

export default Image;

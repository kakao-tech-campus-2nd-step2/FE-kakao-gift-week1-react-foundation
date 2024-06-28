import styled from '@emotion/styled';

export interface ImageProps {
  src?: string;
  radius: number | 'circle';
  ratio: 'square' | 'auto' | number;
}

const ImageStyled = styled.img<ImageProps>`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: ${(props) =>
    typeof props.radius === 'number'
      ? `${props.radius}px`
      : props.radius === 'circle'
        ? '50%'
        : '0'};
  object-fit: ${(props) => (props.ratio === 'square' ? 'cover' : 'contain')};
  aspect-ratio: ${(props) =>
    typeof props.ratio === 'number'
      ? props.ratio.toFixed(2)
      : props.ratio === 'square'
        ? '1'
        : 'auto'};
`;

const Image = ({ src, radius, ratio, ...props }: ImageProps) => (
  <ImageStyled src={src} radius={radius} ratio={ratio} {...props} />
);

export default Image;

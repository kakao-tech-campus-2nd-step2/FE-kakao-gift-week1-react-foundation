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
  border-radius: ${(props) => {
    if (typeof props.radius === 'number') {
      return `${props.radius}px`;
    }
    if (props.radius === 'circle') {
      return '50%';
    }
    return '0';
  }};
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

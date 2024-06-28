/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  ratio?: '16:9' | 'square';
  radius?: 'default' | 'circle' | number;
}

const imageStyles = {
  base: css`
    display: block;
    width: 100%;
  `,
  '16:9': css`
    aspect-ratio: 16 / 9;
  `,
  square: css`
    aspect-ratio: 1 / 1;
  `,
  default: css`
    border-radius: 4px;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

const Image = ({
  src,
  alt,
  ratio,
  radius = 'default',
  ...props
}: ImageProps) => {
  const radiusStyle =
    typeof radius === 'number'
      ? css`
          border-radius: ${radius}px;
        `
      : imageStyles[radius];

  return (
    <img
      src={src}
      alt={alt}
      css={[imageStyles.base, ratio && imageStyles[ratio], radiusStyle]}
      {...props}
    />
  );
};

export default Image;

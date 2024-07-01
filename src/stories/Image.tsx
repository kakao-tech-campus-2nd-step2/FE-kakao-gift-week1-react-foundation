import React from 'react';
import './Image.css';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio?: 'auto' | 'square' | number;
  radius?: 'circle' | number;
}

const Image: React.FC<ImageProps> = ({
  ratio = 'auto',
  radius,
  style,
  ...props
}) => {
  const getRatioStyle = () => {
    if (typeof ratio === 'number') {
      return {
        aspectRatio: `${ratio}`,
      };
    } else if (ratio === 'square') {
      return {
        aspectRatio: '1 / 1',
      };
    } else {
      return {};
    }
  };

  const getRadiusStyle = () => {
    if (typeof radius === 'number') {
      return {
        borderRadius: `${radius}px`,
      };
    } else if (radius === 'circle') {
      return {
        borderRadius: '50%',
      };
    } else {
      return {};
    }
  };

  const combinedStyle = {
    ...getRatioStyle(),
    ...getRadiusStyle(),
    ...style,
  };

  return <img style={combinedStyle} {...props} />;
};

export default Image;

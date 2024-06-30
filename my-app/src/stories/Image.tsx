import React from 'react';
import './image.css';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  ratio?: '16/9' | 'square'; // 비율 설정
  radius?: number | 'circle';
  src?: string;
}

const Image: React.FC<ImageProps> = ({
  ratio = '16/9', // 기본값
  radius = 0,
  src,
}) => {
  const ratioClass = `storybook-image--${ratio.replace('/', '-')}`;
  const radiusClass = typeof radius === 'number' ? '' : 'storybook-image--circle';

  return (
    <div className={`storybook-image ${ratioClass} ${radiusClass}`} style={{ borderRadius: typeof radius === 'number' ? `${radius}px` : '50%' }}>
      <img src={src} />
    </div>
  );
};

export default Image;

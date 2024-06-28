import React from 'react';
import './image.css';

interface ImageProps {
    src: string; // 이미지 링크
    radius?: number | 'circle'; // 'circle' | 숫자
    ratio?: '16:9' | 'square'; // 'square' | '16:9'
    width?: string;
    onClick?: () => void; // 클릭 여부
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({
    src = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    radius,
    ratio,
    width,
    ...props
}: ImageProps) => {
    // const borderRadiusStyle = radius === 'circle' ? '50%' : typeof radius === 'number' ? `${radius}%` : undefined;
    const borderRadiusStyle = radius === 'circle' ? '50%' : `${radius}%`;
    const aspectRatioStyle = ratio === '16:9' ? '16/9' : '1/1';
    const widthStyle = `${width}px`;

    return (
        <img
            src={src}
            className={['storybook-image', `storybook-image--${radius}`].join(' ')}
            style={{
                borderRadius: borderRadiusStyle,
                aspectRatio: aspectRatioStyle,
                width: widthStyle
            }}
            {...props}
        />
    );
};
import React from 'react';
import './ranking.css';

interface GoodsItemProps {
    rankingIndex: number;
    imageSrc: string; // 이미지 링크
    subtitle?: string,
    title?: string,
    amount?: number
}

export const Ranking = ({
    rankingIndex,
    imageSrc = 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle,
    title,
    amount,
    ...props
}: GoodsItemProps) => {

    return (
        <div className='storybook-ranking'>
            <span className='storybook-ranking--ranking'>{rankingIndex}</span>
            <img src={imageSrc} />
            <span className='storybook-ranking--sub'>{subtitle}</span>
            <span className='storybook-ranking--title'>{title}</span>
            <span className='storybook-ranking--amount'>{amount}원</span>
        </div>
    );
};
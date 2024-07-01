import React from 'react';
import './GoodsItem.css';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
}

export interface RankingGoodsItemProps extends GoodsItemProps {
  rankingIndex: number;
}

export const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount }) => {
  return (
    <div className="goods-item">
      <img src={imageSrc} alt={title} className="goods-item__image" />
      <div className="goods-item__details">
        <div className="goods-item__subtitle">{subtitle}</div>
        <div className="goods-item__title">{title}</div>
        <div className="goods-item__amount">{amount}</div>
      </div>
    </div>
  );
};

export const RankingGoodsItem: React.FC<RankingGoodsItemProps> = ({ rankingIndex, imageSrc, subtitle, title, amount }) => {
  const rankingClass = rankingIndex <= 3 ? 'ranking-goods-item--top' : 'ranking-goods-item--normal';
  return (
    <div className={`ranking-goods-item ${rankingClass}`}>
      <div className="ranking-goods-item__badge">{rankingIndex}</div>
      <GoodsItem imageSrc={imageSrc} subtitle={subtitle} title={title} amount={amount} />
    </div>
  );
};

import React from 'react';
import './goodsitem.css';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number
}

const GoodsItem: React.FC<GoodsItemProps> = ({ imageSrc, subtitle, title, amount, rankingIndex }) => {
  return (
    <div className={`goodsitem ${rankingIndex ? 'ranking' : ''}`}>
      {rankingIndex && (
        <div className={`ranking-badge ${rankingIndex <= 3 ? 'top-three' : ''}`}>
          {rankingIndex}
        </div>
      )}
      <img src={imageSrc} alt={title} className="goodsitem-image" />
      <div className="goods-info">
        <div className="goods-subtitle">{subtitle}</div>
        <div className="goods-title">{title}</div>
        <div className="goods-amount">{amount}원</div>
      </div>
    </div>
  );
};

export default GoodsItem;
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/GoodsItem.css';

interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number; // Optional prop for Ranking component
}

const GoodsItem = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}: GoodsItemProps) => {
  return (
    <div className="goods-item">
      <div className="goods-image-wrapper">
        <img src={imageSrc} alt={title} className="goods-image" />
        {rankingIndex && (
          <div
            className={`ranking-badge ${rankingIndex <= 3 ? 'pink' : 'gray'}`}
          >
            {rankingIndex}
          </div>
        )}
      </div>
      <div className="goods-details">
        <div className="goods-subtitle">{subtitle}</div>
        <div className="goods-title">{title}</div>
        <div className="goods-amount">{amount}원</div>
      </div>
    </div>
  );
};

GoodsItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  rankingIndex: PropTypes.number, // Optional prop for Ranking component
};

export default GoodsItem;

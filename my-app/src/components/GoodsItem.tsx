import React from 'react'
import '../styles/GoodsItem.css'

export interface GoodsItemProps {
  imageSrc: string
  subtitle: string
  title: string
  amount: number
  rankingIndex?: number
}

const GoodsItem: React.FC<GoodsItemProps> = ({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
}) => {
  const getRankingBadgeColor = (index: number) => {
    if (index >= 1 && index <= 3) {
      return '#FF69B4' // Pink color
    }
    return '#A9A9A9' // Gray color
  }

  return (
    <div
      className="goods-item"
      style={{ width: rankingIndex ? '160px' : '120px' }}
    >
      {rankingIndex !== undefined && (
        <div
          className="ranking-badge"
          style={{ backgroundColor: getRankingBadgeColor(rankingIndex) }}
        >
          {rankingIndex}
        </div>
      )}
      <div className="image-container">
        <img src={imageSrc} alt={title} className="goods-image" />
      </div>
      <div className="goods-info">
        <div className="goods-title">{title}</div>
        <div className="goods-subtitle">{subtitle}</div>
        <div className="goods-amount">{amount.toLocaleString()}원</div>
      </div>
    </div>
  )
}

export default GoodsItem

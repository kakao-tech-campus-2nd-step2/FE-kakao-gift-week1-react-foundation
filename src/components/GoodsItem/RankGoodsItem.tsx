/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import "@styles/goodsItem.css";

type RankGoodsItemProps = {
  rankingIndex: number;
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
};

function RankGoodsItem({ rankingIndex, imageSrc, subTitle, title, amount }: RankGoodsItemProps) {
  return (
    <div className="goodsItem">
      <span className="goodsItem__ranking">{rankingIndex}</span>
      <img className="goodsItem__img" src={imageSrc} alt={title} />
      <div className="goodsItem__subtitle">{subTitle}</div>
      <div className="goodsItem__title">{title}</div>
      <div className="goodsItem__amount">{amount}원</div>
    </div>
  );
}

export default RankGoodsItem;

/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import "@styles/goodsItem.css";

type DefaultGoodsItemProps = {
  imageSrc: string;
  subTitle: string;
  title: string;
  amount: number;
};

function DefaultGoodsItem({ imageSrc, subTitle, title, amount }: DefaultGoodsItemProps) {
  return (
    <div className="goodsItem">
      <img className="goodsItem__img" src={imageSrc} alt={title} />
      <div className="goodsItem__subtitle">{subTitle}</div>
      <div className="goodsItem__title">{title}</div>
      <div className="goodsItem__amount">{amount}원</div>
    </div>
  );
}

export default DefaultGoodsItem;

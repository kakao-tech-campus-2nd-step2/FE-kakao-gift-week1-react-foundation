import "./GoodsItem.css"

export default function GoodsItem(props) {
  const {imageSrc, subtitle, title, amount} = props;
  return (
    <div className="goodsItem">
      <img className="imgSrc" src={imageSrc} />
      <p className="subtitle">{subtitle}</p>
      <p className="title">{title}</p>
      <p className="amount">₩ {amount} 원</p>
    </div>
  );
}
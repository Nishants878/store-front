import React, { memo } from "react";
import Image from "next/image";
// @ts-expect-error
import ReactStars from "react-rating-stars-component";
interface ITypeCard {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  id?: string;
  rate?: string;
  count?: number;
  key?: number;
  productId?: number;
  category?: string;
}
const Card = ({
  title,
  description,
  price,
  image,
  id,
  rate,
  count,
  productId,
  category,
}: ITypeCard) => {
  return (
    <article className="card">
      <Image
        width={200}
        height={200}
        src={image || ""}
        alt={title || ""}
        className="product-image"
      />
      <div className="product-info">
        <h4 className="product-info__title">
          {title}({category})
        </h4>
        <p className="product-info__description">{description}</p>
        <p className="product-info__price-count">
          <span>Price: ${price}💵 💵 </span>
          <span>Available:{count} pcs</span>
        </p>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={rate}
          isHalf={true}
        />
      </div>
    </article>
  );
};

export default memo(Card);

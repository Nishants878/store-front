import React, { memo } from "react";
import Image from "next/image";
// @ts-expect-error
import ReactStars from "react-rating-stars-component";
import loaderImage from "../../../public/next.svg";
import {
  CardWrapper,
  ProductDescriptionWrap,
  ProductInfoWrap,
  ProductPriceWrap,
} from "./Card.style";
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
    <CardWrapper>
      <Image
        width={200}
        height={200}
        src={image || ""}
        alt={title || ""}
        loader={loaderImage}
        priority
      />
      <ProductInfoWrap>
        <h4 className="product-info__title">
          {title}({category})
        </h4>
        <ProductDescriptionWrap>{description}</ProductDescriptionWrap>
        <ProductPriceWrap>
          <span>Price: ${price}💵 💵 </span>
          <span>Available:{count} pcs</span>
        </ProductPriceWrap>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={rate}
          isHalf={true}
        />
      </ProductInfoWrap>
    </CardWrapper>
  );
};

export default memo(Card);

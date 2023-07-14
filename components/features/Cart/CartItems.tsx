import React, { memo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchQueries } from "@/utils";
interface ITypesCartItems {
  products: [];
}

const CartItems = ({ products }: ITypesCartItems) => {
  return <div></div>;
};

export default memo(CartItems);

import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchQueries } from "@/utils";
import Loader from "@/components/core-components/loader";
import Card from "@/components/core-components/card";
import CartItems from "./CartItems";

const Cart = () => {
  const {
    data: cart,
    isLoading,
    refetch,
    isError: isCartError,
  } = useQuery({
    queryKey: ["cartList"],
    queryFn: async () => {
      return await fetchQueries("carts/2");
    },
    refetchOnReconnect: "always",
    refetchIntervalInBackground: true,
  });

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      if (cart && cart?.products) {
        const productResponse = cart.products.map(
          (product: { productId: any }) =>
            fetchQueries(`products/${product?.productId}`)
        );
        const productData = await Promise.all(productResponse);
        return productData;
      }
      return [];
    },
    refetchOnReconnect: "always",
    refetchIntervalInBackground: true,
    enabled: Boolean(cart),
  });

  if (isCartError || isProductsError) {
    return <p>Error fetching data.</p>;
  }

  return (
    <section className="cart-container">
      <h1>Cart</h1>
      <hr />
      {isLoading || isProductsLoading ? (
        <Loader />
      ) : (
        <>
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              rate={product?.rating?.rate}
              count={product?.rating?.count}
              category={product.category}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Cart;

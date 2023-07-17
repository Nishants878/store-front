import Cart from "../components/features/Cart/index";

import React from "react";
import { render, screen } from "@testing-library/react";
import { useQueryClient, useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  useQueryClient: jest.fn(),
  useQuery: jest.fn(),
}));

describe("Cart component", () => {
  beforeEach(() => {
    useQueryClient.mockReturnValue({
      invalidateQueries: jest.fn(),
    });

    useQuery.mockImplementation(({ queryKey, queryFn }) => {
      if (queryKey[0] === "cartList") {
        return {
          data: { products: [{ id: 1, productId: 1 }] },
          isLoading: false,
          isError: false,
          refetch: jest.fn(),
        };
      }
      if (queryKey[0] === "productsData") {
        return {
          data: [
            {
              id: 1,
              title: "Product 1",
              description: "Description 1",
              price: 10,
            },
          ],
          isLoading: false,
          isError: false,
        };
      }
      return {};
    });
  });

  test("renders Cart component", () => {
    render(<Cart />);
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  test("renders loading state", () => {
    useQuery.mockImplementation(() => ({
      isLoading: true,
      isError: false,
    }));

    render(<Cart />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  test("renders error state", () => {
    useQuery.mockImplementation(() => ({
      isLoading: false,
      isError: true,
    }));

    render(<Cart />);
    expect(screen.getByText("Error fetching data.")).toBeInTheDocument();
  });

  test("renders cart items", () => {
    render(<Cart />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Price: $10")).toBeInTheDocument();
  });
});

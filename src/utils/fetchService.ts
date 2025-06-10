import type { ProductResponse } from "@/types/product.type";

export const fetchProducts = async (): Promise<ProductResponse> => {
  const res = await fetch("https://dummyjson.com/products?skip=25&limit=150");

  if (!res.ok) {
    console.error("API error:", res.status, res.statusText);
    throw new Error("Error occurred while fetching the Products.");
  }

  const data = await res.json();
  return data;
};

import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/types/product.type";
import { fetchProductDetails } from "@/utils/fetchService";

export const useProductDetails = (productId: number | string) => {
  return useQuery<Product, Error>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductDetails(productId),
    enabled: !!productId,
  });
};

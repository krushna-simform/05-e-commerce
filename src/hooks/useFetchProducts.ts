import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/utils/fetchService";
import type { ProductResponse } from "@/types/product.type";

export const useFetchProducts = () => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

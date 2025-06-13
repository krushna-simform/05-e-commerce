import { useMemo } from "react";

import { Products } from "@/components/Products";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useSort } from "@/hooks/useSort";
import { Loader } from "@/components/ui/Loader";
import { SortOption } from "@/types/sort.type";
import { useSearch } from "@/hooks/useSearch";

const Home = () => {
  const { sortOption } = useSort();
  const { searchTerm } = useSearch();

  const { data: defaultData, isLoading: isLoadingDefault } = useFetchProducts();

  const finalProducts = useMemo(() => {
    if (searchTerm.trim()) {
      return (
        defaultData?.products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) || []
      );
    }
    return defaultData?.products || [];
  }, [defaultData, searchTerm]);

  const sortedProducts = useMemo(() => {
    const products = [...finalProducts];

    switch (sortOption) {
      case SortOption.NameAsc:
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case SortOption.NameDesc:
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case SortOption.PriceAsc:
        return products.sort((a, b) => a.price - b.price);
      case SortOption.PriceDesc:
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  }, [finalProducts, sortOption]);

  if (isLoadingDefault) {
    return (
      <div className="min-h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-[80vh]">
      <Products product={sortedProducts} />
    </div>
  );
};

export default Home;

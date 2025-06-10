import { useMemo } from "react";

import { Products } from "@/components/Products";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useSort } from "@/hooks/useSort";
import { Loader } from "@/components/ui/Loader";

const Home = () => {
  const { sortOption } = useSort();

  const { data: defaultData, isLoading: isLoadingDefault } = useFetchProducts();

  const finalProducts = useMemo(() => {
    return defaultData?.products || [];
  }, [defaultData]);

  const sortedProducts = useMemo(() => {
    const products = [...finalProducts];

    switch (sortOption) {
      case "name-asc":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  }, [finalProducts, sortOption]);

  const isLoading = isLoadingDefault;

  return (
    <div className="min-h-[80vh]">
      {isLoading ? <Loader /> : <Products product={sortedProducts} />}
    </div>
  );
};

export default Home;

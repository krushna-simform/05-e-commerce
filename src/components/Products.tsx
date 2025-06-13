import { useEffect } from "react";
import type { Product } from "@/types/product.type";
import { useSort } from "@/hooks/useSort";
import { useSearch } from "@/hooks/useSearch";
import { ProductCard } from "@/components/ProductCard";
import { Sidebar } from "@/components/Sidebar";

export const Products = ({ product }: { product: Array<Product> }) => {
  const { sortOption } = useSort();
  const { searchTerm } = useSearch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sortOption]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 md:ml-65 px-10 mt-12 pt-12 shadow-lg min-h-[80vh]">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-10 w-5 rounded-l-sm"></div>
          <p
            className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-2xl w-50 font-medium"
            role="heading"
          >
            Our Products
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 py-7">
          {product.length == 0 && (
            <p>
              No products found for{" "}
              <span className="font-medium">"{searchTerm}"</span>
            </p>
          )}
          {product.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

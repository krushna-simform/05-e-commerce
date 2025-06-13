import { Navigate, useParams } from "react-router";
import { ProductDetail } from "@/components/ProductDetail";
import { Loader } from "@/components/ui/Loader";
import { useProductDetails } from "@/hooks/useProductDetails";
import { useEffect } from "react";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading } = useProductDetails(productId!);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[80vh]">
        <Loader />
      </div>
    );
  }

  if (!data) return <Navigate to="/notfound" />;

  return (
    <div className="py-6 min-h-[80vh]">
      <ProductDetail product={data} />
    </div>
  );
};

export default Product;

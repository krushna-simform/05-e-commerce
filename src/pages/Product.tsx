import { ProductDetail } from "@/components/ProductDetail";
import { Loader } from "@/components/ui/Loader";
import { useProductDetails } from "@/hooks/useProductDetails";
import { useParams } from "react-router";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading } = useProductDetails(productId!);

  if (!data)
    return <p className="text-center min-h-[80vh]">No product found</p>;

  if (isLoading) {
    return (
      <div className="min-h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="py-6 min-h-[80vh]">
      <ProductDetail product={data} />
    </div>
  );
};

export default Product;

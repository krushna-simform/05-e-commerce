import { ProductDetail } from "@/components/ProductDetail";
import { Loader } from "@/components/ui/Loader";
import { useProductDetails } from "@/hooks/useProductDetails";
import { useParams } from "react-router";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading } = useProductDetails(productId!);

  if (!data) return <p className="text-center">No product found</p>;

  return (
    <div className="py-6 min-h-[80vh]">
      {isLoading ? <Loader /> : <ProductDetail product={data} />}
    </div>
  );
};

export default Product;

import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import type { Product } from "@/types/product.type";
import { ProductInfo } from "@/components/ui/ProductInfo";
import { ProductSpecificationPolicy } from "@/components/ui/ProductSpecificationPolicy";
import { ProductReview } from "@/components/ui/ProductReview";
import { ProductQRBarcode } from "@/components/ui/ProductQRBarcode";
import { ProductImages } from "@/components/ui/ProductImages";

export const ProductDetail = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-2xl space-y-8 mt-15">
      <button
        onClick={handleBackClick}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </button>
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductImages product={product} />
        <ProductInfo product={product} />
      </div>

      <ProductSpecificationPolicy product={product} />
      <ProductReview product={product} />
      <ProductQRBarcode product={product} />
    </div>
  );
};

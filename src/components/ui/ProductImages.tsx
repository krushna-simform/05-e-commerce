import type { Product } from "@/types/product.type";
import { useState } from "react";

export const ProductImages = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.thumbnail);
  return (
    <div className="flex-1">
      <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden shadow-md">
        <img
          loading="lazy"
          src={mainImage}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto py-2 px-1">
        {product.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setMainImage(img)}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition cursor-pointer ${
              mainImage === img
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Image ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

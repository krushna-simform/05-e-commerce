import type { Product } from "@/types/product.type";
import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/Rating";

export const ProductCard = ({
  product,
}: {
  product: Pick<Product, "thumbnail" | "title" | "price" | "rating" | "id">;
}) => {
  return (
    <div className="group bg-white rounded-lg shadow border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="relative pt-[100%] bg-gray-50">
        <img
          loading="lazy"
          src={product.thumbnail}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-3 space-y-2">
        <h3 className="font-medium text-gray-900 text-base line-clamp-2 h-10">
          {product.title}
        </h3>

        <div className="flex items-center gap-1">
          <Rating rating={product.rating} />
          <span className="text-xs text-gray-500 ml-1">
            ({Math.floor(product.rating)})
          </span>
        </div>

        <p className="text-base font-semibold text-blue-600">
          ₹{new Intl.NumberFormat("en-IN").format(product.price * 82)}
        </p>

        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[15px] py-5 hover:bg-blue-800/80 rounded-md transition-colors cursor-pointer">
          View Details
        </Button>
      </div>
    </div>
  );
};

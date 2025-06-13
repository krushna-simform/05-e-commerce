import type { Product } from "@/types/product.type";
import { Rating } from "./Rating";

export const ProductInfo = ({ product }: { product: Product }) => {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price * 82);
  return (
    <div className="flex-1 space-y-5">
      <div className="border-b pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {product.title}
        </h1>
        <div className="flex items-center gap-2 mt-2">
          <Rating rating={product.rating} />
          <span className="text-sm text-gray-500">
            ({product.reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-gray-600 text-sm sm:text-base">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold text-blue-700">
            {formattedPrice}
          </span>
          {product.discountPercentage > 0 && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ₹
                {(
                  product.price *
                  82 *
                  (1 + product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {product.discountPercentage}% OFF
              </span>
            </>
          )}
        </div>

        <div
          className={`text-sm font-medium ${
            product.availabilityStatus === "In Stock"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {product.availabilityStatus}
        </div>

        <div className="flex gap-4 pt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors cursor-pointer">
            Add to Cart
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-colors cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <strong className="text-gray-800">Brand:</strong>{" "}
            {product.brand ? product.brand : "N/A"}
          </p>
          <p>
            <strong className="text-gray-800">Category:</strong>{" "}
            {product.category}
          </p>
          <p>
            <strong className="text-gray-800">Stock:</strong> {product.stock}{" "}
            units
          </p>
        </div>
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <strong className="text-gray-800">SKU:</strong> {product.sku}
          </p>
          <p>
            <strong className="text-gray-800">Tags:</strong>{" "}
            {product.tags.join(", ")}
          </p>
          <p>
            <strong className="text-gray-800">Min. Order:</strong>{" "}
            {product.minimumOrderQuantity}
          </p>
        </div>
      </div>
    </div>
  );
};

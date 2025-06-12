import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import type { Product } from "@/types/product.type";
import { Rating } from "@/components/ui/Rating";

export const ProductDetail = ({ product }: { product: Product }) => {
  const [mainImage, setMainImage] = useState(product.thumbnail);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price * 82);

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
                <strong className="text-gray-800">Stock:</strong>{" "}
                {product.stock} units
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
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Specifications</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Width:</strong> {product.dimensions.width} cm
              </p>
              <p>
                <strong>Height:</strong> {product.dimensions.height} cm
              </p>
              <p>
                <strong>Depth:</strong> {product.dimensions.depth} cm
              </p>
              <p>
                <strong>Weight:</strong> {product.weight} kg
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Policies</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">
          Customer Reviews ({product.reviews.length})
        </h2>

        {product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="border p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{review.reviewerName}</p>
                    <Rating rating={review.rating} />
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 mt-2 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>

      <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <strong className="text-gray-800">Barcode:</strong>{" "}
            {product.meta.barcode}
          </p>
          <p>
            <strong className="text-gray-800">Created:</strong>{" "}
            {new Date(product.meta.createdAt).toLocaleString()}
          </p>
          <p>
            <strong className="text-gray-800">Updated:</strong>{" "}
            {new Date(product.meta.updatedAt).toLocaleString()}
          </p>
        </div>
        {product.meta.qrCode && (
          <div className="bg-white p-2 rounded border">
            <img
              src={product.meta.qrCode}
              alt="QR Code"
              className="w-24 h-24"
            />
            <p className="text-xs text-center mt-1 text-gray-500">
              Scan to view
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

import type { Product } from "@/types/product.type";
import { Rating } from "./Rating";

export const ProductReview = ({ product }: { product: Product }) => {
  return (
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
  );
};

import type { Product } from "@/types/product.type";

export const ProductSpecificationPolicy = ({
  product,
}: {
  product: Product;
}) => {
  return (
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
  );
};

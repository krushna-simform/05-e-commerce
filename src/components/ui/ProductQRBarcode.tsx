import type { Product } from "@/types/product.type";

export const ProductQRBarcode = ({ product }: { product: Product }) => {
  return (
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
          <img src={product.meta.qrCode} alt="QR Code" className="w-24 h-24" />
          <p className="text-xs text-center mt-1 text-gray-500">Scan to view</p>
        </div>
      )}
    </div>
  );
};

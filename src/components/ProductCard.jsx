import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4"
      />

      {/* Product Title */}
      <h3 className="text-center font-semibold text-lg mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Product Price */}
      <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>

      {/* Add to Cart Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-auto">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

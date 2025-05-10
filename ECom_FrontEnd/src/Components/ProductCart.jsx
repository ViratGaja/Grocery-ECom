import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../Context/Context";

const ProductCart = ({ product }) => {
  const {
    currency,
    removeFromCart,
    addToCart,
    updateCartItem,
    cartItems,
    navigate,
  } = useAppContext();

  const [count, setCount] = useState(cartItems[product?._id] || 0);

  useEffect(() => {
    if (product && count > 0) {
      updateCartItem(product._id, count);
    } else if (product && count === 0 && cartItems[product._id]) {
      removeFromCart(product._id);
    }
  }, [count, product, updateCartItem, removeFromCart, cartItems]);

  if (!product) return null;

  const isProductInCart = !!cartItems[product._id];

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category?.toLowerCase() || "unknown"}/${product._id}`);
        window.scrollTo(0, 0);
      }}
      className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full"
    >
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image?.[0] || assets.placeholder_image}
          alt={product.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">
          {product.name}
        </p>
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                className="md:w-3.5 w-3"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt="rating star"
              />
            ))}
          <p>(4)</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-indigo-500">
            {currency} ${product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              ${product.price}
            </span>
          </p>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="text-indigo-500"
          >
            {!isProductInCart ? (
              <button
                className="flex items-center justify-center gap-1 bg-primary border border-primary-300 md:w-20 w-16 h-8 rounded text-indigo-600 font-medium cursor-pointer"
                onClick={() => {
                  setCount(1);
                  addToCart(product._id);
                }}
              >
                <img src={assets.cart_icon} alt="cart" />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8 bg-indigo-500/25 rounded select-none">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  -
                </button>
                <span className="w-5 text-center">{count}</span>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

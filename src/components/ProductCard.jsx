import React, { useContext } from "react";
import { Auth } from "../context/Authcontext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {


let {CartItems, setCartItems } = useContext(Auth);

const AddToCart = ()=>{
  setCartItems((prev)=>[...prev , product])
  toast("Added to cart 🛒", {
  position: "bottom-right",
  autoClose: 1500,
  theme: "dark",
});

}


  const {
    title,
    thumbnail,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
  } = product;

  const discountedPrice =
    price - (price * discountPercentage) / 100;

  
    

    
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-xl hover:shadow-black/20">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">

        {/* Discount */}
        <span className="absolute left-4 top-4 z-10 rounded-lg bg-lime-400 px-2.5 py-1 text-xs font-bold text-black">
          -{Math.round(discountPercentage)}%
        </span>

        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Stock Status */}
        <span
          className={`absolute right-4 top-4 rounded-lg px-2.5 py-1 text-xs font-semibold ${
            stock > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {availabilityStatus}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wider text-lime-400">
          {category}
        </p>

        {/* Title */}
        <h2 className="mt-2 line-clamp-2 min-h-[48px] text-base font-semibold text-white transition group-hover:text-lime-400">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-zinc-800 px-2 py-1">
            <span className="text-sm text-yellow-400">★</span>

            <span className="text-xs font-semibold text-zinc-300">
              {rating}
            </span>
          </div>

          <span className="text-xs text-zinc-500">
            {stock} available
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-white">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="mb-1 text-sm text-zinc-500 line-through">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Add To Cart */}
        <button onClick={AddToCart}
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-sm font-bold text-black transition duration-200 hover:bg-lime-300 active:scale-[0.98]"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 7H6"
            />

            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
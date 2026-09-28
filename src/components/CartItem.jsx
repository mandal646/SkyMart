import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ 
  item ,
  increaseQuantity,
  decreaseQuantity,
  removeItem, }) => {
  return (
    <div className="group flex flex-col gap-5 border-b border-zinc-800 p-5 transition hover:bg-zinc-900/40 sm:flex-row sm:items-center">

      {/* Product Image */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-white">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
        />

        {/* Discount */}
        {item.discountPercentage && (
          <span className="absolute left-2 top-2 rounded-md bg-lime-400 px-1.5 py-1 text-[9px] font-bold text-black">
            -{Math.round(item.discountPercentage)}%
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="min-w-0 flex-1">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-wider text-lime-400">
          {item.category}
        </p>

        {/* Title */}
        <h3 className="mt-1 line-clamp-2 text-base font-semibold text-white sm:text-lg">
          {item.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md bg-zinc-800 px-2 py-1 text-xs text-yellow-400">
            ★ {item.rating}
          </span>

          <span className="text-xs text-zinc-500">
            {item.stock} available
          </span>
        </div>

        {/* Quantity */}
        <div className="mt-4 flex items-center gap-3">

          <div className="flex items-center overflow-hidden rounded-lg border border-zinc-700 bg-[#0c0c0c]">

            <button 
            onClick={() => decreaseQuantity(item.id)}
              type="button"
              className="flex h-9 w-9 items-center justify-center text-zinc-400 transition hover:bg-zinc-800 hover:text-lime-400"
            >
              <Minus size={15} />
            </button>

            <span className="flex h-9 w-10 items-center justify-center border-x border-zinc-700 text-sm font-semibold text-white">
              {item.quantity || 1}
            </span>

            <button
            onClick={() => increaseQuantity(item.id)}
              type="button"
              className="flex h-9 w-9 items-center justify-center text-zinc-400 transition hover:bg-zinc-800 hover:text-lime-400"
            >
              <Plus size={15} />
            </button>

          </div>

          {/* Remove Button */}
          <button 
          onClick={() => removeItem(item.id)}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
          >
            <Trash2 size={16} />
          </button>

        </div>
      </div>

      {/* Price */}
      <div className="text-left sm:min-w-[100px] sm:text-right">

        <p className="text-lg font-bold text-lime-400">
          ${(item.price * (item.quantity || 1)).toFixed(2)}
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          Item total
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          ${item.price.toFixed(2)} each
        </p>

      </div>

    </div>
  );
};

export default CartItem;
import React, { useContext } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Auth } from "../context/Authcontext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { CartItems, setCartItems } = useContext(Auth);

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: (item.quantity || 1) - 1,
              }
            : item
        )
        .filter((item) => (item.quantity || 1) > 0)
    );
  };

  // Total
  const subtotal = CartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const shipping = subtotal === 0 ? 0 : subtotal > 50 ? 0 : 5.99;

  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#0c0c0c] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">

          <Link
            to="/main/shop"
            className="mb-5 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-400"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-black">
              <ShoppingBag size={25} />
            </div>

            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Your Cart
              </h1>

              <p className="mt-1 text-sm text-zinc-500">
                Review your items before checkout
              </p>
            </div>

          </div>
        </div>

        {/* EMPTY CART */}
        {CartItems.length === 0 ? (

          <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-[#111111] px-5 text-center">

            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900">
              <ShoppingBag
                size={38}
                className="text-zinc-600"
              />
            </div>

            <h2 className="text-2xl font-bold">
              Your Cart is Empty
            </h2>

            <p className="mt-2 max-w-md text-sm text-zinc-500">
              Looks like you haven't added anything to your
              cart yet. Explore our products and find something
              you'll love.
            </p>

            <Link
              to="/main/shop"
              className="mt-6 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Browse Products
            </Link>

          </div>

        ) : (

          /* CART WITH PRODUCTS */
          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

            {/* Cart Items */}
            <div className="rounded-2xl border border-zinc-800 bg-[#111111]">

              <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">

                <h2 className="text-lg font-semibold">
                  Cart Items
                </h2>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {CartItems.length} Items
                </span>

              </div>

              <div>
                {CartItems.map((item) => (

                  <CartItem
                    key={item.id}
                    item={item}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    removeItem={removeItem}
                  />

                ))}
              </div>

            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-zinc-800 bg-[#111111]">

              <div className="border-b border-zinc-800 px-5 py-4">
                <h2 className="text-lg font-semibold">
                  Order Summary
                </h2>
              </div>

              <div className="space-y-4 p-5">

                {/* Subtotal */}
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Subtotal
                  </span>

                  <span className="font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">
                    Shipping
                  </span>

                  <span
                    className={
                      shipping === 0
                        ? "text-lime-400"
                        : ""
                    }
                  >
                    {shipping === 0
                      ? "FREE"
                      : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                {/* Total */}
                <div className="border-t border-zinc-800 pt-4">

                  <div className="flex items-center justify-between">

                    <span className="text-lg font-semibold">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-lime-400">
                      ${total.toFixed(2)}
                    </span>

                  </div>

                </div>

                {/* Checkout */}
                <button
                  type="button"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 py-3.5 font-semibold text-black transition hover:bg-lime-300"
                >
                  Proceed to Checkout
                  <ArrowLeft
                    className="rotate-180"
                    size={18}
                  />
                </button>

                {/* Features */}
                <div className="space-y-3 border-t border-zinc-800 pt-5">

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-lime-400/10 p-2 text-lime-400">
                      <Truck size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium">
                        Fast Delivery
                      </p>

                      <p className="text-[11px] text-zinc-600">
                        Delivered within 3-5 days
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-lime-400/10 p-2 text-lime-400">
                      <ShieldCheck size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium">
                        Secure Checkout
                      </p>

                      <p className="text-[11px] text-zinc-600">
                        Your payment is protected
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
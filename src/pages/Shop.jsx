import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Search, X, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";


const Shop = () => {
  
  const [ProductsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search
  const [search, setSearch] = useState("");

  // Category
  const [category, setCategory] = useState("all");

  const getProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );

      setProductsData(res.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Categories
  const categories = [
    "all",
    ...new Set(ProductsData.map((product) => product.category)),
  ];

  // Search + Category Filter
  const filteredProducts = ProductsData.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0b0b0b] px-5 py-10 text-white sm:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
            Explore Store
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Shop Products
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Find everything you need in one place.
          </p>

        </div>


        {/* ================= SEARCH + FILTER ================= */}
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-[#111111] p-4">

          <div className="flex flex-col gap-4 lg:flex-row">

            {/* Search */}
            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="h-12 w-full rounded-xl border border-zinc-700 bg-[#0b0b0b] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400"
              />

              {/* Clear Search */}
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                >
                  <X size={17} />
                </button>
              )}

            </div>


            {/* Filter Label */}
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <SlidersHorizontal size={18} />
              <span>Category</span>
            </div>

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 rounded-xl border border-zinc-700 bg-[#0b0b0b] px-4 text-sm capitalize text-white outline-none transition focus:border-lime-400 lg:w-52"
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                  className="bg-[#111111]"
                >
                  {item === "all" ? "All Categories" : item}
                </option>
              ))}
            </select>

          </div>


          {/* Result Info */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800 pt-4">

            <p className="text-sm text-zinc-500">
              Showing{" "}
              <span className="font-semibold text-zinc-300">
                {filteredProducts.length}
              </span>{" "}
              products
            </p>

            {(search || category !== "all") && (
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
                className="text-sm font-medium text-lime-400 transition hover:text-lime-300"
              >
                Clear filters
              </button>
            )}

          </div>

        </div>


        {/* ================= PRODUCTS ================= */}

        {loading ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>

        ) : filteredProducts.length > 0 ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          /* ================= NO RESULTS ================= */

          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-[#111111] px-5 text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900">
              <Search
                size={28}
                className="text-zinc-600"
              />
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              No products found
            </h2>

            <p className="mt-2 max-w-md text-sm text-zinc-500">
              We couldn't find any products matching your search.
              Try another keyword or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
              className="mt-6 rounded-xl bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            >
              Clear Search
            </button>

          </div>

        )}

      </div>
    </div>
  );
};

export default Shop;
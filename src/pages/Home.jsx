import React, { useContext } from "react";
import { Link } from "react-router";
import { Auth } from "../context/Authcontext";

const HomePage = () => {
  const { LoggedInuser , CartItems } = useContext(Auth);

  const categories = [
    {
      name: "Electronics",
      icon: "💻",
      items: "120+ Products",
    },
    {
      name: "Fashion",
      icon: "👕",
      items: "80+ Products",
    },
    {
      name: "Accessories",
      icon: "🎧",
      items: "60+ Products",
    },
    {
      name: "Home & Living",
      icon: "🏠",
      items: "90+ Products",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">

      {/* ================= HERO ================= */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-12">

        <section className="relative overflow-hidden rounded-[28px] border border-zinc-700 bg-[#111111]">

          {/* Background Grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(#84cc16 1px, transparent 1px),
                linear-gradient(90deg, #84cc16 1px, transparent 1px)
              `,
              backgroundSize: "43px 43px",
            }}
          />

          {/* Glow */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative grid min-h-[380px] grid-cols-1 gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_220px] lg:p-12">

            {/* Hero Content */}
            <div className="flex flex-col justify-center">

              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lime-400">
                Good Morning 👋
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Welcome back,
                <br />
                <span className="text-lime-400">
                  {LoggedInuser?.name || "Priyanshu"}!
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                Discover today's picks — hand-curated products across
                electronics, fashion, and more.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  to="/main/shop"
                  className="group flex items-center gap-3 rounded-xl bg-lime-400 px-6 py-3.5 text-sm font-bold text-black transition duration-200 hover:bg-lime-300"
                >
                  Shop Now

                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/main/shop"
                  className="rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
                >
                  View All Products
                </Link>

              </div>
            </div>

            {/* Hero Stats */}
            <div className="flex flex-row gap-3 lg:flex-col lg:justify-center">

              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-lime-400/30 bg-lime-400/[0.08] p-5 lg:h-28">
                <p className="text-3xl font-bold text-lime-400">
                  20+
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Products Available
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-center rounded-2xl border border-zinc-600 p-5 lg:h-28">
                <p className="text-2xl font-bold text-white">
                  Free
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Delivery on ₹999+
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon="▣"
            value={CartItems.length}
            title="Cart Items"
            subtitle="In your bag"
          />

          <StatCard
            icon="↗"
    
            value="$ 0.0"
            title="Cart Value"
            subtitle="Ready to checkout"
          />

          <StatCard
            icon="☆"
            value="5"
            title="Top Products"
            subtitle="Highly rated"
          />

          <StatCard
            icon="◇"
            value="6"
            title="Categories"
            subtitle="To explore"
          />

        </section>

        {/* ================= CATEGORY HEADER ================= */}
        <section className="mt-12">

          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">
              Shop by Category
            </h2>

            <Link
              to="/main/shop"
              className="text-sm font-semibold text-lime-400 transition hover:text-lime-300"
            >
              View All →
            </Link>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => (
              <Link
                to="/main/shop"
                key={category.name}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#111111] transition duration-300 hover:-translate-y-1 hover:border-zinc-600"
              >
                {/* Category Image Area */}
                <div className="flex h-40 items-center justify-center bg-white text-6xl">
                  {category.icon}
                </div>

                {/* Category Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-white transition group-hover:text-lime-400">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {category.items}
                  </p>
                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* ================= FEATURED ================= */}
        <section className="mt-12 rounded-3xl border border-zinc-800 bg-[#111111] p-6 sm:p-8">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
                Why SkyMart?
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Shopping made simple.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                Quality products, simple checkout and a smooth shopping
                experience — everything you need in one place.
              </p>
            </div>

            <Link
              to="/main/shop"
              className="w-fit rounded-xl bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
            >
              Explore Products
            </Link>

          </div>
        </section>

      </main>
    </div>
  );
};


/* ================= STAT CARD ================= */

const StatCard = ({ icon, value, title, subtitle }) => {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-zinc-700 bg-[#111111] p-6 transition duration-300 hover:border-zinc-500">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-lime-400/10 text-xl font-bold text-lime-400">
        {icon}
      </div>

      <div>
        <p className="text-2xl font-bold text-white">
          {value}
        </p>

        <p className="text-sm text-zinc-400">
          {title}
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          {subtitle}
        </p>
      </div>

    </div>
  );
};

export default HomePage;
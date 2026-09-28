import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Auth } from "../context/Authcontext";

const Navbar = () => {

 const {CartItems} = useContext(Auth);


 const handleCart = () => {
  console.log("Cart items:", CartItems);
  navigate("/main/cart");
};



  let navigate = useNavigate();
  const { LoggedInuser } = useContext(Auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useContext(Auth);

  const handleLogout = () => {
    logout();
    navigate("/login");
  }
  const navLinkStyle = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-lime-400"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <div>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0c0c0c]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* ================= LOGO ================= */}
        <Link
          to="/main"
          className="flex items-center gap-3"
        >
          {/* Logo Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black shadow-lg shadow-lime-400/10">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
          </div>

          {/* Logo Text */}
          <h1 className="text-xl font-bold tracking-tight text-white">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-10 md:flex">

          <NavLink
            to="/main"
            className={navLinkStyle}
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/main/shop"
            className={navLinkStyle}
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={navLinkStyle}
          >
            About
          </NavLink>
          
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2">

          {/* User */}
          <div className="hidden items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 sm:flex">

            {/* Avatar */}
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime-400 text-xs font-bold text-black">
              {LoggedInuser?.name?.charAt(0)?.toUpperCase() || "P"}
            </div>

            {/* Name */}
            <span className="max-w-[120px] truncate text-sm font-medium text-zinc-300">
              {LoggedInuser?.name || "Priyanshu"}
            </span>

          </div>

          {/* Cart */}
          <Link  
          onClick={handleCart}
            to="/main/cart"
            
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-zinc-600 hover:text-white"
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

            {/* Cart Count */}
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-lime-400 px-1 text-[9px] font-bold text-black">
              {CartItems.length}
            </span>
          </Link>

          {/* Logout */}
          <button onClick={handleLogout}
            type="button"
            className="hidden cursor-pointer h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-zinc-600 hover:text-white sm:flex"
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
                d="M15 8l4 4-4 4M19 12H9M13 5H6a2 2 0 00-2 2v10a2 2 0 002 2h7"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300 md:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-[#0c0c0c] px-5 py-5 md:hidden">

          <div className="flex flex-col gap-1">

            <NavLink
              to="/main"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-lime-400/10 text-lime-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/main/shop"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-lime-400/10 text-lime-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/main/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-lime-400/10 text-lime-400"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              About
            </NavLink>

            {/* Mobile User */}
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-3 sm:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-400 font-bold text-black">
                {LoggedInuser?.name?.charAt(0)?.toUpperCase() || "P"}
              </div>

              <span className="text-sm font-medium text-zinc-300">
                {LoggedInuser?.name || "Priyanshu"}
              </span>
            </div>

          </div>
        </div>
      )}
    </nav>
    </div>
    
  );
};

export default Navbar;





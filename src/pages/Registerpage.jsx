import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import {useForm} from 'react-hook-form';
import { Auth } from "../context/Authcontext";
import { toast } from "react-toastify";
const Registerpage = () => {
let navigate = useNavigate();

const {RegisteredUsers, setRegisteredUsers} = useContext(Auth)

    let {register , handleSubmit , reset , formState:{errors}} = useForm();
    let formsubmit = (data)=>{
      let arr = [...RegisteredUsers , data]
        setRegisteredUsers(arr);
        toast.success("User registerd successfully");
        localStorage.setItem("RegisteredUsers",JSON.stringify(arr));
        navigate("/");
        reset();
    }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-2xl">

        {/* Register Form */}
        <div className="p-7 sm:p-10 bg-slate-900/80 order-2 md:order-1">

          {/* Heading */}
          <div className="mb-7">
            <p className="text-sm text-violet-400 font-medium mb-2">
              CREATE ACCOUNT
            </p>

            <h1 className="text-3xl font-bold text-white">
              Join SkyMart 🚀
            </h1>

            <p className="text-slate-400 mt-2">
              Create your account and start your shopping journey.
            </p>
          </div>

          <form onSubmit={handleSubmit(formsubmit)} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full name
              </label>

              <input
              {...register("name",{
                required:"name is required",
              })}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
              {errors.name && <p className="text-blue-600">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email address
              </label>

              <input
              {...register("email",{
                required:"email is required",
              })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
              {errors.email && <p className="text-blue-600">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>

              <input
              {...register("password",{
                required:"password is required",
              })}
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
              {errors.password && <p className="text-blue-600">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm password
              </label>

              <input
              
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-violet-600"
              />

              <p className="text-xs text-slate-400 leading-relaxed">
                I agree to the{" "}
                <span className="text-violet-400 cursor-pointer hover:text-violet-300">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-violet-400 cursor-pointer hover:text-violet-300">
                  Privacy Policy
                </span>
                .
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full mt-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/30 active:scale-[0.98]"
            >
              Create account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <button onClick={()=>navigate("/")}
                to="/login"
                className="font-semibold text-violet-400 hover:text-violet-300 transition cursor-pointer"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white order-1 md:order-2">

          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-lg font-bold">
                S
              </div>

              <span className="text-xl font-semibold">
                SkyMart
              </span>
            </div>

            {/* Content */}
            <div className="mt-20">
              <p className="text-sm text-white/70 mb-3">
                YOUR SHOPPING JOURNEY STARTS HERE
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Shop smarter.
                <br />
                Live better.
              </h2>

              <p className="mt-5 text-white/75 leading-relaxed max-w-sm">
                Create your account to discover products, manage your cart,
                and enjoy a smooth shopping experience.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs">
                ✦ Easy Shopping
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs">
                ✦ Secure Account
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs">
                ✦ Fast Checkout
              </span>
            </div>
          </div>

          <p className="text-sm text-white/60">
            © 2026 SkyMart. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { Auth } from "../context/Authcontext";
import { toast } from "react-toastify";

const Loginpage = () => {
    let navigate = useNavigate();
    
    const {LoggedInUser, setLoggedInUser , RegisteredUsers} = useContext(Auth);

    let {register , handleSubmit , reset , formState:{errors}} = useForm();
        let formsubmit = (data)=>{
            let user = RegisteredUsers.find((val)=>{
              return val.email === data.email && val.password === data.password
            });

            if(!user){
              toast.error("Invalid user or user not found");
              reset();
              return;
            }

            setLoggedInUser(user);
            localStorage.setItem("LoggedInUser",JSON.stringify(user));
            toast.success("User Loggedin Succesfullly");
            navigate("/main");
            
            reset();
        }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-2xl">

        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 text-white">
          
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-lg font-bold">
                S
              </div>
              <span className="text-xl font-semibold">SkyMart</span>
            </div>

            <div className="mt-20">
              <p className="text-sm text-white/70 mb-3">
                WELCOME BACK
              </p>

              <h1 className="text-4xl font-bold leading-tight">
                Everything you need,
                <br />
                in one place.
              </h1>

              <p className="mt-5 text-white/75 leading-relaxed max-w-sm">
                Sign in to continue your journey and explore a seamless
                shopping experience.
              </p>
            </div>
          </div>

          <p className="text-sm text-white/60">
            © 2026 SkyMart. All rights reserved.
          </p>
        </div>

        {/* Login Form */}
        <div className="p-7 sm:p-10 bg-slate-900/80">
          
          <div className="mb-8">
            <p className="text-sm text-violet-400 font-medium mb-2">
              ACCOUNT LOGIN
            </p>

            <h2 className="text-3xl font-bold text-white">
              Welcome back 👋
            </h2>

            <p className="text-slate-400 mt-2">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit(formsubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email address
              </label>

              <input
              {...register("email",{
                required:"email is required"
              })}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
              {errors.email && <p className="text-blue-600">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-violet-400 hover:text-violet-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
              {...register("password",{
                required:"password is required"
              })}
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3.5 text-white placeholder-slate-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
              {errors.password && <p className="text-blue-600">{errors.password.message}</p>}
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-violet-600"
              />

              <span className="text-sm text-slate-400">
                Remember me
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-500/30 active:scale-[0.98]"
            >
              Sign in
            </button>
          </form>

          {/* Register */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{" "}
              <button onClick={()=>navigate("/register")}
                to="/register"
                className="font-semibold text-violet-400 hover:text-violet-300 transition cursor-pointer"
              >
                Create account
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loginpage;
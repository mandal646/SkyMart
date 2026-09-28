import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">

        <div className="flex flex-col items-center text-center">

          {/* Icon */}
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c6ff00]">
            <Zap size={38} strokeWidth={3} className="text-black" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="text-[#c6ff00]">SkyMart</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>


        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon={<Package />}
            number="20K+"
            text="Products"
          />

          <StatCard
            icon={<Users />}
            number="50K+"
            text="Happy Customers"
          />

          <StatCard
            icon={<Star />}
            number="4.9"
            text="Avg. Rating"
          />

          <StatCard
            icon={<Truck />}
            number="99%"
            text="On-time Delivery"
          />

        </div>


        {/* OUR STORY */}
        <div className="mt-16 rounded-[28px] border border-gray-700 bg-[#101010] p-7 sm:p-10 lg:p-12">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Our Story
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-gray-500 sm:text-base">

            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually{" "}
              <span className="italic text-gray-300">
                enjoyable?
              </span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and
              everyday essentials — all carefully selected for quality and
              value.
            </p>

            <p>
              Our goal is simple: make online shopping feel less complicated
              and more human.
            </p>

          </div>
        </div>


        {/* WHAT WE STAND FOR */}
        <section className="mt-20">

          <h2 className="mb-10 text-center text-3xl font-bold">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <FeatureCard
              icon={<ShieldCheck />}
              title="Trust"
              description="Every product is verified for quality and authenticity before listing."
            />

            <FeatureCard
              icon={<Truck />}
              title="Speed"
              description="We obsess over delivery times so your orders arrive when promised."
            />

            <FeatureCard
              icon={<HeartHandshake />}
              title="Community"
              description="Built around real customer feedback, not just business metrics."
              highlight
            />

            <FeatureCard
              icon={<Star />}
              title="Quality"
              description="We curate the best — no filler, no junk, just great products."
            />

          </div>
        </section>


        {/* TEAM */}
        <section className="mt-20">

          <h2 className="mb-10 text-center text-3xl font-bold">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

           <TeamCard
  letter="P"
  name="Priyanshu Mandal"
  role="Founder & CEO"
  color="bg-[#c6ff00] text-black"
/>

<TeamCard
  letter="H"
  name="Himanshu Mandal"
  role="Head of Product"
  color="bg-blue-500"
/>

<TeamCard
  letter="R"
  name="Rajan Mandal"
  role="Lead Engineer"
  color="bg-purple-500"
/>

<TeamCard
  letter="V"
  name="Vivek Mandal"
  role="Design Director"
  color="bg-pink-500"
/>

          </div>
        </section>


        {/* CTA */}
        <section className="mt-20 rounded-[28px] border border-[#354500] bg-[#101010] px-6 py-14 text-center sm:px-10">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to shop?
          </h2>

          <p className="mt-4 text-gray-500">
            Explore thousands of products at unbeatable prices.
          </p>

          <Link
            to="/main/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#c6ff00] px-8 py-4 font-semibold text-black transition hover:bg-[#d5ff4d] hover:scale-[1.02]"
          >
            Browse Products
            <ArrowRight size={20} />
          </Link>

        </section>

      </section>


      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-800 py-10 text-center">

        <h3 className="text-2xl font-bold text-[#c6ff00]">
          SkyMart
        </h3>

        <p className="mt-3 text-sm text-gray-600">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>

      </footer>

    </div>
  );
};


/* ---------------- STAT CARD ---------------- */

const StatCard = ({ icon, number, text }) => {
  return (
    <div className="group rounded-3xl border border-gray-700 bg-[#101010] p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#637900]">

      <div className="mx-auto flex w-fit items-center justify-center text-[#c6ff00]">
        {React.cloneElement(icon, {
          size: 26,
          strokeWidth: 1.8,
        })}
      </div>

      <h3 className="mt-5 text-2xl font-bold">
        {number}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {text}
      </p>

    </div>
  );
};


/* ---------------- FEATURE CARD ---------------- */

const FeatureCard = ({
  icon,
  title,
  description,
  highlight = false,
}) => {
  return (
    <div
      className={`group flex gap-5 rounded-3xl border p-7 transition duration-300 hover:-translate-y-1
      ${
        highlight
          ? "border-[#455900]"
          : "border-gray-700"
      }
      bg-[#101010]`}
    >

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#202900] text-[#c6ff00]">
        {React.cloneElement(icon, {
          size: 23,
          strokeWidth: 1.8,
        })}
      </div>

      <div>
        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
          {description}
        </p>
      </div>

    </div>
  );
};


/* ---------------- TEAM CARD ---------------- */

const TeamCard = ({
  letter,
  name,
  role,
  color,
}) => {
  return (
    <div className="rounded-3xl border border-gray-700 bg-[#101010] px-5 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-gray-500">

      <div
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${color}`}
      >
        {letter}
      </div>

      <h3 className="mt-5 font-semibold">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {role}
      </p>

    </div>
  );
};

export default About;
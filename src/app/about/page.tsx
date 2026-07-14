"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  FaArrowRight,
  FaBuilding,
  FaHouse,
  FaMagnifyingGlass,
  FaShieldHalved,
  FaUsers,
} from "react-icons/fa6";

const values = [
  {
    title: "Simple Discovery",
    description:
      "Find useful rental information without unnecessary complexity.",
    icon: FaMagnifyingGlass,
  },
  {
    title: "Clear Information",
    description:
      "Property details are presented clearly to support better decisions.",
    icon: FaHouse,
  },
  {
    title: "Safer Experience",
    description:
      "Users are encouraged to verify properties and rental terms carefully.",
    icon: FaShieldHalved,
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            variants={fadeUp}
            whileHover={{
              rotate: 6,
              scale: 1.08,
            }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E] text-white shadow-sm"
          >
            <FaBuilding size={25} />
          </motion.span>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]"
          >
            About Rentora
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Making rental discovery simple and organized
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Rentora connects people searching for rental properties
            with users who want to publish and manage their available
            properties.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeLeft}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              One account for your complete rental journey
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every Rentora user can explore available properties and
              publish their own rental property from the same account.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Users can only edit or delete the properties they create,
              keeping property management simple and secure.
            </p>

            <motion.div
              whileHover={{
                x: 5,
              }}
              className="mt-7 w-fit"
            >
              <Link
                href="/rentals"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0F766E] px-6 py-3 font-bold text-white transition hover:bg-[#115E59]"
              >
                Browse Rentals
                <FaArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeRight}
            whileHover={{
              y: -6,
            }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-10"
          >
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.08,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-[#0F766E]"
            >
              <FaUsers size={25} />
            </motion.div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Built for everyone
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              A user may be searching for a home today and publishing
              their own rental property tomorrow. Rentora supports both
              activities without separate account roles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
              What We Value
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A better rental experience
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -7,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <motion.span
                    whileHover={{
                      rotate: 6,
                      scale: 1.1,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E]"
                  >
                    <Icon size={21} />
                  </motion.span>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
          className="mx-auto max-w-5xl rounded-3xl bg-[#0F766E] px-6 py-12 text-center text-white sm:px-10"
        >
          <h2 className="text-3xl font-extrabold">
            Start your rental journey with Rentora
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
            Explore available rental properties and find a place that
            suits your needs.
          </p>

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mx-auto mt-7 w-fit"
          >
            <Link
              href="/rentals"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#0F766E] transition hover:bg-slate-100"
            >
              Browse Rentals
              <FaArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
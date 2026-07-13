"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaHouse,
  FaLock,
  FaShieldHalved,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Registration API ও validation logic পরে যোগ হবে।
  };

  return (
    <main className="min-h-[calc(100vh-72px)] bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left content */}
        <section className="relative hidden overflow-hidden bg-[#0F766E] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0F766E]">
                <FaBuilding size={23} />
              </span>

              <span className="text-3xl font-extrabold">
                Rent<span className="text-teal-200">ora</span>
              </span>
            </Link>

            <div className="mt-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">
                Join Rentora
              </p>

              <h1 className="mt-4 max-w-md text-4xl font-extrabold leading-tight">
                Create an account for your rental journey
              </h1>

              <p className="mt-5 max-w-md leading-7 text-teal-50/80">
                Register as a renter or property owner and access the
                features designed for your needs.
              </p>
            </div>
          </div>

          <div className="relative space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
              <FaHouse size={21} className="shrink-0 text-teal-100" />

              <p className="text-sm text-teal-50">
                Discover and manage rental opportunities.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
              <FaShieldHalved
                size={21}
                className="shrink-0 text-teal-100"
              />

              <p className="text-sm text-teal-50">
                Keep your rental activities organized in one account.
              </p>
            </div>
          </div>
        </section>

        {/* Register form */}
        <section className="p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-xl">
            {/* Mobile logo */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 lg:hidden"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E] text-white">
                <FaBuilding size={21} />
              </span>

              <span className="text-2xl font-extrabold text-slate-900">
                Rent<span className="text-[#0F766E]">ora</span>
              </span>
            </Link>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
              Create Account
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Join Rentora today
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Enter your information and select the account type that
              matches your purpose.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full name
                  </label>

                  <div className="relative">
                    <FaUser
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                    />
                  </div>
                </div>

                {/* Account type */}
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Account type
                  </label>

                  <select
                    id="role"
                    name="role"
                    defaultValue="renter"
                    className="h-12 w-full cursor-pointer rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                  >
                    <option value="renter">Renter</option>
                    <option value="owner">Property Owner</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <FaEnvelope
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <FaLock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={6}
                      autoComplete="new-password"
                      placeholder="Minimum 6 characters"
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((current) => !current)
                      }
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#0F766E]"
                    >
                      {showPassword ? (
                        <FaEyeSlash size={17} />
                      ) : (
                        <FaEye size={17} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <FaLock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      minLength={6}
                      autoComplete="new-password"
                      placeholder="Enter password again"
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((current) => !current)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#0F766E]"
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash size={17} />
                      ) : (
                        <FaEye size={17} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#0F766E]"
                />

                <span>
                  I agree to Rentora&apos;s{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-[#0F766E] hover:underline"
                  >
                    Terms and Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#0F766E] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] text-sm font-bold text-white transition hover:bg-[#115E59] active:scale-[0.99]"
              >
                Create Account
                <FaUserPlus size={17} />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-[#0F766E] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
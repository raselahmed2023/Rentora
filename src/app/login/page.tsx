"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  FaArrowRightToBracket,
  FaBuilding,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaHouse,
  FaKey,
  FaLock,
  FaShieldHalved,
} from "react-icons/fa6";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleDemoLogin = () => {
    setEmail("user@rentora.com");
    setPassword("User@123");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend authentication logic পরে যোগ হবে।
  };

  return (
    <main className="min-h-[calc(100vh-72px)] bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:grid-cols-2">
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
                Welcome Back
              </p>

              <h1 className="mt-4 max-w-md text-4xl font-extrabold leading-tight">
                Continue your rental journey with Rentora
              </h1>

              <p className="mt-5 max-w-md leading-7 text-teal-50/80">
                Access your account to manage rental activities and
                continue exploring suitable properties.
              </p>
            </div>
          </div>

          <div className="relative space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
              <FaHouse size={21} className="shrink-0 text-teal-100" />

              <p className="text-sm text-teal-50">
                Explore organized rental information.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
              <FaShieldHalved
                size={21}
                className="shrink-0 text-teal-100"
              />

              <p className="text-sm text-teal-50">
                Manage your account through a secure experience.
              </p>
            </div>
          </div>
        </section>

        {/* Login form */}
        <section className="p-6 sm:p-10 lg:p-14">
          <div className="mx-auto max-w-md">
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
              Account Login
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Enter your account information to continue to Rentora.
            </p>

            {/* Demo credentials */}
            <div className="mt-7 rounded-2xl border border-[#0F766E]/20 bg-teal-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F766E] text-white">
                  <FaKey size={17} />
                </span>

                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">
                    Demo Account
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Email: user@rentora.com
                    <br />
                    Password: User@123
                  </p>

                  <button
                    type="button"
                    onClick={handleDemoLogin}
                    className="mt-3 text-sm font-bold text-[#0F766E] hover:underline"
                  >
                    Fill demo credentials
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                  />
                </div>
              </div>

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
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    minLength={6}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white pl-11 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/15"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#0F766E]"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 rounded border-slate-300 accent-[#0F766E]"
                />

                Remember me
              </label>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] text-sm font-bold text-white transition hover:bg-[#115E59] active:scale-[0.99]"
              >
                Login
                <FaArrowRightToBracket size={17} />
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-[#0F766E] hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
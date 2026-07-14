"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type FormEvent,
  useState,
} from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaLock,
} from "react-icons/fa6";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [showPassword, setShowPassword] =
    useState(false);
  const [rememberMe, setRememberMe] =
    useState(true);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] =
    useState(false);

  const handleDemoLogin = () => {
    setEmail("user@rentora.com");
    setPassword("User@123");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const { error: loginError } =
        await authClient.signIn.email({
          email,
          password,
          rememberMe,
        });

      if (loginError) {
        setError(
          loginError.message ||
            "Invalid email or password."
        );
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gradient-to-br from-teal-50 via-white to-slate-100 px-4 py-12">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-9">
        {/* Logo */}
        <Link
          href="/"
          className="mx-auto flex w-fit items-center gap-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F766E] text-white">
            <FaBuilding size={20} />
          </span>

          <span className="text-2xl font-extrabold text-slate-900">
            Rent
            <span className="text-[#0F766E]">
              ora
            </span>
          </span>
        </Link>

        {/* Heading */}
        <div className="mt-7 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Login to continue your rental journey.
          </p>
        </div>

        {/* Demo account */}
        <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-teal-50 p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white">
              <FaKey size={16} />
            </span>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Demo Account
              </p>

              <p className="text-xs text-slate-500">
                user@rentora.com
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="text-sm font-bold text-[#0F766E] hover:underline"
          >
            Fill
          </button>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email address
            </label>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/15"
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
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
                minLength={8}
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 pl-11 pr-12 text-sm outline-none transition focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/15"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    (current) => !current
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#0F766E]"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) =>
                setRememberMe(
                  event.target.checked
                )
              }
              className="h-4 w-4 accent-[#0F766E]"
            />

            Remember me
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full rounded-xl bg-[#0F766E] text-sm font-bold text-white transition hover:bg-[#115E59] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-[#0F766E] hover:underline"
          >
            Create account
          </Link>
        </p>
      </section>
    </main>
  );
}
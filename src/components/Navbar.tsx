"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaBuilding,
  FaRightFromBracket,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

import { authClient } from "@/lib/auth-client";

type NavLink = {
  label: string;
  href: string;
};

const publicLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Browse Rentals", href: "/rentals" },
  { label: "About", href: "/about" },
];

const loggedInLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Browse Rentals", href: "/rentals" },
  { label: "List Property", href: "/list-property" },
  { label: "My Properties", href: "/manage-properties" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } =
    authClient.useSession();

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isLoggingOut, setIsLoggingOut] =
    useState(false);

  const isLoggedIn = Boolean(session?.user);

  const navLinks = isLoggedIn
    ? loggedInLinks
    : publicLinks;

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);

    await authClient.signOut();

    closeMenu();
    router.replace("/login");
    router.refresh();

    setIsLoggingOut(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] max-w-7xl flex-wrap items-center justify-between px-4 sm:px-6 lg:flex-nowrap lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2 py-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-sm">
            <FaBuilding size={20} />
          </span>

          <span className="text-2xl font-extrabold text-slate-900">
            Rent
            <span className="text-[#0F766E]">
              ora
            </span>
          </span>
        </Link>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() =>
            setIsMenuOpen((current) => !current)
          }
          aria-label={
            isMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {isMenuOpen ? (
            <FaXmark size={23} />
          ) : (
            <FaBars size={21} />
          )}
        </button>

        {/* Shared desktop and mobile navigation */}
        <nav
          className={`w-full flex-col gap-1 border-t border-slate-200 py-4 lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:py-0 ${
            isMenuOpen
              ? "flex"
              : "hidden lg:flex"
          }`}
        >
          {navLinks.map((link) => {
            const isActive =
              isActiveRoute(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition lg:px-1 lg:py-6 ${
                  isActive
                    ? "bg-teal-50 text-[#0F766E] lg:bg-transparent"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[#0F766E] lg:hover:bg-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="my-2 border-t border-slate-200 lg:hidden" />

          {/* Session loading */}
          {isPending ? (
            <div className="h-10 w-28 animate-pulse rounded-lg bg-slate-100" />
          ) : isLoggedIn ? (
            <>
              {/* Logged-in user */}
              <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 lg:py-2.5">
                <FaUser
                  size={15}
                  className="text-[#0F766E]"
                />

                {session?.user.name || "Account"}
              </div>

              <button
                type="button"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:opacity-60 lg:py-2.5"
              >
                <FaRightFromBracket size={16} />

                {isLoggingOut
                  ? "Logging out..."
                  : "Logout"}
              </button>
            </>
          ) : (
            <>
              {/* Logged-out actions */}
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-[#0F766E] hover:bg-teal-50 lg:py-2.5"
              >
                Login
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="rounded-lg bg-[#0F766E] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#115E59] lg:py-2.5"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
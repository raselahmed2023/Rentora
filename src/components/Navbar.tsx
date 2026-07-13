"use client";

import { Building2, Menu, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavLink = {
    label: string;
    href: string;
};

const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Browse Rentals",
        href: "/rentals",
    },
    {
        label: "List Property",
        href: "/list-property",
    },
    {
        label: "About",
        href: "/about",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] =
        useState(false);

    const isActiveRoute = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(href);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex min-h-18 max-w-7xl flex-wrap items-center justify-between px-4 sm:px-6 lg:flex-nowrap lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2 py-4"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white shadow-sm">
                        <Building2 size={23} />
                    </span>

                    <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                        Rent
                        <span className="text-[#0F766E]">
                            ora
                        </span>
                    </span>
                </Link>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() =>
                        setIsMenuOpen((current) => !current)
                    }
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={isMenuOpen}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 lg:hidden"
                >
                    {isMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

                {/* One navigation for desktop and mobile */}
                <nav
                    className={`w-full flex-col gap-2 border-t border-slate-200 py-4 lg:w-auto lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:py-0 ${isMenuOpen
                            ? "flex"
                            : "hidden lg:flex"
                        }`}
                >
                    {/* Main links */}
                    {navLinks.map((link) => {
                        const isActive = isActiveRoute(
                            link.href
                        );

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`rounded-lg px-4 py-3 text-sm font-semibold transition lg:rounded-none lg:px-0 lg:py-6 ${isActive
                                        ? "bg-[#0F766E]/10 text-[#0F766E] lg:bg-transparent"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-[#0F766E] lg:hover:bg-transparent"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* Divider only on mobile */}
                    <div className="my-2 border-t border-slate-200 lg:hidden" />

                    {/* Login */}
                    <Link
                        href="/login"
                        onClick={closeMenu}
                        className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 lg:px-3 lg:py-2.5"
                    >
                        <UserRound size={18} />
                        Login
                    </Link>

                    {/* Register */}
                    <Link
                        href="/register"
                        onClick={closeMenu}
                        className="flex items-center justify-center rounded-lg bg-[#0F766E] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#115E59] active:scale-[0.98] lg:py-2.5"
                    >
                        Sign Up
                    </Link>
                </nav>
            </div>
        </header>
    );
}
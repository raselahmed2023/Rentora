import Link from "next/link";
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Browse Rentals",
    href: "/rentals",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const accountLinks: FooterLink[] = [
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Create Account",
    href: "/register",
  },
  {
    label: "List Property",
    href: "/list-property",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E] text-white">
              <FaBuilding size={22} />
            </span>

            <span className="text-2xl font-extrabold tracking-tight text-white">
              Rent
              <span className="text-teal-400">ora</span>
            </span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Rentora helps renters discover suitable properties and
            enables property owners to present their rental information
            through a simple and organized platform.
          </p>

          {/* Social links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/raselahmed2023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/rasel-ahmed06/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:raselahmediu22@gmail.com"
              aria-label="Send email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-400 transition hover:border-[#0F766E] hover:bg-[#0F766E] hover:text-white"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h2 className="text-base font-bold text-white">
            Quick Links
          </h2>

          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-teal-400"
                >
                  {link.label}

                  <FaArrowUpRightFromSquare size={11} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Account links */}
        <div>
          <h2 className="text-base font-bold text-white">
            Account
          </h2>

          <ul className="mt-5 space-y-3">
            {accountLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-teal-400"
                >
                  {link.label}

                  <FaArrowUpRightFromSquare size={11} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h2 className="text-base font-bold text-white">
            Contact
          </h2>

          <div className="mt-5 space-y-4">
            <a
              href="mailto:raselahmediu22@gmail.com"
              className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-teal-400"
            >
              <FaEnvelope
                size={18}
                className="mt-0.5 shrink-0 text-teal-400"
              />

              <span className="break-all">
                raselahmediu22@gmail.com
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dhaka%2C%20Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-teal-400"
            >
              <FaLocationDot
                size={18}
                className="mt-0.5 shrink-0 text-teal-400"
              />

              <span>Dhaka, Bangladesh</span>
            </a>
          </div>

          {/* Support card */}
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-bold text-white">
              Need assistance?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Visit our contact page for account, property, or
              platform-related support.
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:underline"
            >
              Contact Support

              <FaArrowUpRightFromSquare size={11} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">
          <p>
            © {currentYear} Rentora. All rights reserved.
          </p>

          <p>
            Built with Next.js, TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
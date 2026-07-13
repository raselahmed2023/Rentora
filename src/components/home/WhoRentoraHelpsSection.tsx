import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Search,
} from "lucide-react";
import Link from "next/link";

const renterBenefits = [
  "Explore rental options in one place",
  "Review clear property information",
  "Compare locations and rental requirements",
];

const ownerBenefits = [
  "Present property information professionally",
  "Connect with interested renters",
  "Manage rental listings from one account",
];

export default function WhoRentoraHelpsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Built for Both Sides
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            One platform for renters and property owners
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Rentora provides a clear and organized experience for
            people searching for homes and owners presenting their
            rental properties.
          </p>
        </div>

        {/* User type cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Renter card */}
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E] text-white">
              <Search size={27} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#0F766E]">
              For Renters
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Find a suitable place to live
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Explore rental opportunities, review important
              information, and make better housing decisions through
              a simple experience.
            </p>

            <ul className="mt-6 space-y-3">
              {renterBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#0F766E]"
                  />

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/rentals"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#0F766E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#115E59]"
            >
              Browse Rentals
              <ArrowRight size={18} />
            </Link>
          </article>

          {/* Property owner card */}
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F59E0B] text-white">
              <Building2 size={27} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#B45309]">
              For Property Owners
            </p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Present and manage rental properties
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Create organized property listings and provide renters
              with the information they need before contacting you.
            </p>

            <ul className="mt-6 space-y-3">
              {ownerBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#B45309]"
                  />

                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/register"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#F59E0B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#D97706]"
            >
              Create Owner Account
              <ArrowRight size={18} />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
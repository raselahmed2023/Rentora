import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F0FDFA] via-white to-[#FFF7ED] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      {/* Decorative backgrounds */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#0F766E]/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[65vh] max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F766E]/20 bg-white px-4 py-2 text-sm font-semibold text-[#0F766E] shadow-sm">
            <ShieldCheck size={17} />

            Simple and trusted rental discovery
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find a rental that feels like{" "}
            <span className="text-[#0F766E]">
              home
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Rentora helps renters discover suitable homes by
            location, budget, and property type through a simple
            and transparent experience.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rentals"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F766E] px-6 py-3.5 font-bold text-white shadow-sm transition hover:bg-[#115E59] active:scale-[0.98]"
            >
              Browse Rentals
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:border-[#0F766E] hover:text-[#0F766E]"
            >
              Create Account
            </Link>
          </div>

          {/* Small features */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-[#0F766E]"
              />
              Clear rental information
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-[#0F766E]"
              />
              Responsive experience
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-[#0F766E]"
              />
              Simple property search
            </span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-7">
            {/* Property illustration */}
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#CCFBF1] to-[#E2E8F0] p-6 sm:min-h-[420px]">
              <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0F766E] shadow-md">
                For Rent
              </div>

              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0F766E] text-white">
                    <Home size={24} />
                  </span>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      Comfortable city living
                    </h2>

                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600">
                      <MapPin size={15} />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-200 pt-4 text-center">
                  <div>
                    <p className="text-xs text-slate-500">
                      Type
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      Apartment
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Bedrooms
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      2 Rooms
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Status
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#0F766E]">
                      Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Building illustration */}
              <div className="absolute left-1/2 top-12 flex -translate-x-1/2 items-end gap-3">
                <div className="h-40 w-24 rounded-t-2xl bg-[#0F766E]/80 p-3">
                  <BuildingWindows />
                </div>

                <div className="h-52 w-32 rounded-t-3xl bg-[#0F766E] p-4 shadow-lg">
                  <BuildingWindows />
                </div>

                <div className="h-32 w-20 rounded-t-2xl bg-[#F59E0B]/90 p-3">
                  <BuildingWindows />
                </div>
              </div>
            </div>
          </div>

          {/* Floating trust card */}
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:flex">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F766E]/10 text-[#0F766E]">
              <ShieldCheck size={22} />
            </span>

            <div>
              <p className="text-sm font-bold text-slate-900">
                Built for trust
              </p>

              <p className="text-xs text-slate-500">
                Clear and relevant rental details
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildingWindows() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="h-4 rounded-sm bg-white/75"
        />
      ))}
    </div>
  );
}
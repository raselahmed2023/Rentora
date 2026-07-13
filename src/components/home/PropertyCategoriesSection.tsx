import {
  ArrowUpRight,
  BedDouble,
  Building2,
  House,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

type PropertyCategory = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const propertyCategories: PropertyCategory[] = [
  {
    title: "Apartment",
    description:
      "Explore modern apartments suitable for individuals, couples, and families.",
    href: "/rentals?type=apartment",
    icon: Building2,
  },
  {
    title: "Family House",
    description:
      "Find comfortable and spacious homes designed for family living.",
    href: "/rentals?type=family-house",
    icon: House,
  },
  {
    title: "Bachelor Room",
    description:
      "Discover practical and affordable rooms for students and professionals.",
    href: "/rentals?type=bachelor-room",
    icon: BedDouble,
  },
  {
    title: "Sublet",
    description:
      "Find flexible short-term rental options for temporary accommodation.",
    href: "/rentals?type=sublet",
    icon: KeyRound,
  },
];

export default function PropertyCategoriesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Property Categories
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Choose the right rental for your needs
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Browse different property types and quickly find a
            rental that matches your lifestyle.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {propertyCategories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="group flex h-full min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-[#0F766E] transition group-hover:bg-[#0F766E] group-hover:text-white">
                    <Icon size={27} />
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <p className="mt-5 text-sm font-bold text-[#0F766E]">
                    Explore properties
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}